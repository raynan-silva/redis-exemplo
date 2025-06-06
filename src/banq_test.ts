import Redis from "ioredis";
import { v4 as uuid } from "uuid";

const redis = new Redis({ host: process.env.REDIS_HOST || "localhost", port: 6379 });

import { sqlData } from "./data/data";

function parseDate(dateStr?: string | null): string | null {
  return dateStr ? new Date(dateStr).toISOString() : null;
}

async function migrarBranches() {
  for (const branch of sqlData.branch) {
    await redis.hmset(`branch:${branch.branch_id}`, {
      ...branch,
    });
    await redis.sadd("branches", branch.branch_id.toString());
  }
}

async function migrarProducts() {
  for (const product of sqlData.product) {
    const type = sqlData.product_type.find(t => t.product_type_cd === product.product_type_cd);
    await redis.hmset(`product:${product.product_cd}`, {
      name: product.name,
      product_type_code: type?.product_type_cd || "",
      product_type_name: type?.name || "",
      date_offered: parseDate(product.date_offered),
      date_retired: parseDate(product.date_retired),
    });
    await redis.sadd("products", product.product_cd);
  }
}

async function migrarEmployees() {
  for (const emp of sqlData.employee) {
    const dept = sqlData.department.find(d => d.dept_id === emp.dept_id);
    await redis.hmset(`employee:${emp.emp_id}`, {
      fname: emp.fname,
      lname: emp.lname,
      start_date: parseDate(emp.start_date),
      end_date: parseDate(emp.end_date),
      superior_emp_id: emp.superior_emp_id?.toString() || "",
      dept_id: dept?.dept_id?.toString() || "",
      dept_name: dept?.name || "",
      title: emp.title,
      branch_id: emp.assigned_branch_id.toString(),
    });
    await redis.sadd("employees", emp.emp_id.toString());
  }
}

async function migrarIndividuais() {
  const individuais = sqlData.customer.filter(c => c.cust_type_cd === "I");
  for (const cust of individuais) {
    const indiv = sqlData.individual.find(i => i.cust_id === cust.cust_id);
    await redis.hmset(`individual:${cust.cust_id}`, {
      fed_id: cust.fed_id,
      address: cust.address,
      city: cust.city,
      state: cust.state,
      postal_code: cust.postal_code,
      fname: indiv?.fname || "",
      lname: indiv?.lname || "",
      birth_date: parseDate(indiv?.birth_date),
    });
    await redis.sadd("individuais", cust.cust_id.toString());
  }
}

async function migrarEmpresas() {
  const empresas = sqlData.customer.filter(c => c.cust_type_cd === "B");
  for (const cust of empresas) {
    const biz = sqlData.business.find(b => b.cust_id === cust.cust_id);
    const officers = sqlData.officer.filter(o => o.cust_id === cust.cust_id);

    const officerData = officers.map(o => JSON.stringify({
      officer_id: o.officer_id,
      fname: o.fname,
      lname: o.lname,
      title: o.title,
      start_date: parseDate(o.start_date),
      end_date: parseDate(o.end_date),
    }));

    await redis.hmset(`business:${cust.cust_id}`, {
      fed_id: cust.fed_id,
      address: cust.address,
      city: cust.city,
      state: cust.state,
      postal_code: cust.postal_code,
      name: biz?.name || "",
      state_id: biz?.state_id || "",
      incorp_date: parseDate(biz?.incorp_date),
    });

    if (officerData.length > 0) {
      await redis.del(`business:${cust.cust_id}:officers`);
      await redis.rpush(`business:${cust.cust_id}:officers`, ...officerData);
    }

    await redis.sadd("businesses", cust.cust_id.toString());
  }
}

async function migrarAccounts() {
  for (const acc of sqlData.account) {
    await redis.hmset(`account:${acc.account_id}`, {
      product_cd: acc.product_cd,
      cust_id: acc.cust_id.toString(),
      open_date: parseDate(acc.open_date),
      close_date: parseDate(acc.close_date),
      last_activity_date: parseDate(acc.last_activity_date),
      status: acc.status,
      branch_id: acc.open_branch_id.toString(),
      emp_id: acc.open_emp_id.toString(),
      avail_balance: acc.avail_balance.toString(),
      pending_balance: acc.pending_balance.toString(),
    });
    await redis.sadd("accounts", acc.account_id.toString());
  }
}

async function migrarTransacoes() {
  for (const tx of sqlData.transaction) {
    await redis.hmset(`transaction:${tx.txn_id}`, {
      txn_date: parseDate(tx.txn_date),
      account_id: tx.account_id.toString(),
      type: tx.txn_type_cd,
      amount: tx.amount.toString(),
      teller_emp_id: tx.teller_emp_id !== undefined && tx.teller_emp_id !== null ? String(tx.teller_emp_id) : "",
      branch_id: (tx.execution_branch_id !== undefined && tx.execution_branch_id !== null) ? String(tx.execution_branch_id) : "",
      funds_avail_date: parseDate(tx.funds_avail_date),
    });
    await redis.sadd("transactions", tx.txn_id.toString());
  }
}

async function migrarTudo() {
  console.log("Iniciando migração para Redis...");
  await migrarBranches();
  await migrarProducts();
  await migrarEmployees();
  await migrarIndividuais();
  await migrarEmpresas();
  await migrarAccounts();
  await migrarTransacoes();
  console.log("✅ Migração concluída.");
}

migrarTudo().catch(console.error);

// --- Funções de Consulta (Selects) ---

async function listarBranches() {
  const ids = await redis.smembers("branches");
  const branches = await Promise.all(ids.map(id => redis.hgetall(`branch:${id}`)));
  console.log("📍 Branches:");
  console.table(branches);
}

async function listarProdutos() {
  const ids = await redis.smembers("products");
  const produtos = await Promise.all(ids.map(id => redis.hgetall(`product:${id}`)));
  console.log("📦 Produtos:");
  console.table(produtos);
}

async function buscarFuncionarioPorId(id: number) {
  const funcionario = await redis.hgetall(`employee:${id}`);
  console.log(`👤 Funcionário ${id}:`);
  console.log(funcionario);
}

async function buscarContasPorClienteId(clienteId: number) {
  const todasContas = await redis.smembers("accounts");
  const contasCliente = [];

  for (const id of todasContas) {
    const conta = await redis.hgetall(`account:${id}`);
    if (conta.cust_id === clienteId.toString()) {
      contasCliente.push({ id, ...conta });
    }
  }

  console.log(`🏦 Contas do cliente ${clienteId}:`);
  console.table(contasCliente);
}

async function listarOfficersDeEmpresa(clienteId: number) {
  const empresa = await redis.hgetall(`business:${clienteId}`);
  const officersRaw = await redis.lrange(`business:${clienteId}:officers`, 0, -1);
  const officers = officersRaw.map(o => JSON.parse(o));
  console.log(`🏢 Empresa: ${empresa.name}`);
  console.log("👔 Officers:");
  console.table(officers);
}

// --- Funções de Atualização (Update) ---

/**
 * Atualiza um registro de Branch no Redis.
 * @param {number} branchId O ID da branch a ser atualizada.
 * @param {object} updates Um objeto com os campos a serem atualizados (ex: { name: 'Nova Sede', city: 'São Paulo' }).
 */
async function atualizarBranch(branchId: number, updates: object) {
  const key = `branch:${branchId}`;
  const existingBranch = await redis.hgetall(key);
  if (!Object.keys(existingBranch).length) {
    console.log(`\nBranch com ID ${branchId} não encontrada para atualização.`);
    return null;
  }
  await redis.hmset(key, updates);
  console.log(`\n✅ Branch ${branchId} atualizada com sucesso.`);
  return redis.hgetall(key); // Retorna a branch atualizada
}

/**
 * Atualiza um registro de Product no Redis.
 * @param {string} productCd O código do produto a ser atualizado.
 * @param {object} updates Um objeto com os campos a serem atualizados.
 */
async function atualizarProduct(productCd: string, updates: object) {
  const key = `product:${productCd}`;
  const existingProduct = await redis.hgetall(key);
  if (!Object.keys(existingProduct).length) {
    console.log(`\nProduto com código ${productCd} não encontrado para atualização.`);
    return null;
  }
  await redis.hmset(key, updates);
  console.log(`\n✅ Produto ${productCd} atualizado com sucesso.`);
  return redis.hgetall(key);
}

/**
 * Atualiza um registro de Employee no Redis.
 * @param {number} empId O ID do funcionário a ser atualizado.
 * @param {object} updates Um objeto com os campos a serem atualizados.
 */
async function atualizarEmployee(empId: number, updates: object) {
  const key = `employee:${empId}`;
  const existingEmployee = await redis.hgetall(key);
  if (!Object.keys(existingEmployee).length) {
    console.log(`\nFuncionário com ID ${empId} não encontrado para atualização.`);
    return null;
  }
  await redis.hmset(key, updates);
  console.log(`\n✅ Funcionário ${empId} atualizado com sucesso.`);
  return redis.hgetall(key);
}

/**
 * Atualiza um registro de Cliente Individual no Redis.
 * @param {number} custId O ID do cliente individual a ser atualizado.
 * @param {object} updates Um objeto com os campos a serem atualizados.
 */
async function atualizarIndividual(custId: number, updates: object) {
  const key = `individual:${custId}`;
  const existingIndividual = await redis.hgetall(key);
  if (!Object.keys(existingIndividual).length) {
    console.log(`\nCliente Individual com ID ${custId} não encontrado para atualização.`);
    return null;
  }
  await redis.hmset(key, updates);
  console.log(`\n✅ Cliente Individual ${custId} atualizado com sucesso.`);
  return redis.hgetall(key);
}

/**
 * Atualiza um registro de Business no Redis.
 * @param {number} custId O ID da empresa a ser atualizada.
 * @param {object} updates Um objeto com os campos a serem atualizados.
 */
async function atualizarBusiness(custId: number, updates: object) {
  const key = `business:${custId}`;
  const existingBusiness = await redis.hgetall(key);
  if (!Object.keys(existingBusiness).length) {
    console.log(`\nEmpresa com ID ${custId} não encontrada para atualização.`);
    return null;
  }
  await redis.hmset(key, updates);
  console.log(`\n✅ Empresa ${custId} atualizada com sucesso.`);
  return redis.hgetall(key);
}

/**
 * Atualiza um registro de Account no Redis.
 * @param {number} accountId O ID da conta a ser atualizada.
 * @param {object} updates Um objeto com os campos a serem atualizados.
 */
async function atualizarAccount(accountId: number, updates: object) {
  const key = `account:${accountId}`;
  const existingAccount = await redis.hgetall(key);
  if (!Object.keys(existingAccount).length) {
    console.log(`\nConta com ID ${accountId} não encontrada para atualização.`);
    return null;
  }
  await redis.hmset(key, updates);
  console.log(`\n✅ Conta ${accountId} atualizada com sucesso.`);
  return redis.hgetall(key);
}

/**
 * Atualiza um registro de Transaction no Redis.
 * @param {number} txnId O ID da transação a ser atualizada.
 * @param {object} updates Um objeto com os campos a serem atualizados.
 */
async function atualizarTransaction(txnId: number, updates: object) {
  const key = `transaction:${txnId}`;
  const existingTransaction = await redis.hgetall(key);
  if (!Object.keys(existingTransaction).length) {
    console.log(`\nTransação com ID ${txnId} não encontrada para atualização.`);
    return null;
  }
  await redis.hmset(key, updates);
  console.log(`\n✅ Transação ${txnId} atualizada com sucesso.`);
  return redis.hgetall(key);
}

// --- Funções de Exclusão (Delete) ---

/**
 * Deleta um registro de Branch do Redis.
 * @param {number} branchId O ID da branch a ser deletada.
 */
async function deletarBranch(branchId: number) {
  const key = `branch:${branchId}`;
  const deletedCount = await redis.del(key);
  if (deletedCount > 0) {
    await redis.srem("branches", branchId.toString());
    console.log(`\n❌ Branch ${branchId} deletada com sucesso.`);
    return true;
  } else {
    console.log(`\nBranch com ID ${branchId} não encontrada para exclusão.`);
    return false;
  }
}

/**
 * Deleta um registro de Product do Redis.
 * @param {string} productCd O código do produto a ser deletado.
 */
async function deletarProduct(productCd: string) {
  const key = `product:${productCd}`;
  const deletedCount = await redis.del(key);
  if (deletedCount > 0) {
    await redis.srem("products", productCd);
    console.log(`\n❌ Produto ${productCd} deletado com sucesso.`);
    return true;
  } else {
    console.log(`\nProduto com código ${productCd} não encontrado para exclusão.`);
    return false;
  }
}

/**
 * Deleta um registro de Employee do Redis.
 * @param {number} empId O ID do funcionário a ser deletado.
 */
async function deletarEmployee(empId: number) {
  const key = `employee:${empId}`;
  const deletedCount = await redis.del(key);
  if (deletedCount > 0) {
    await redis.srem("employees", empId.toString());
    console.log(`\n❌ Funcionário ${empId} deletado com sucesso.`);
    return true;
  } else {
    console.log(`\nFuncionário com ID ${empId} não encontrado para exclusão.`);
    return false;
  }
}

/**
 * Deleta um registro de Cliente Individual do Redis.
 * @param {number} custId O ID do cliente individual a ser deletado.
 */
async function deletarIndividual(custId: number) {
  const key = `individual:${custId}`;
  const deletedCount = await redis.del(key);
  if (deletedCount > 0) {
    await redis.srem("individuais", custId.toString());
    console.log(`\n❌ Cliente Individual ${custId} deletado com sucesso.`);
    return true;
  } else {
    console.log(`\nCliente Individual com ID ${custId} não encontrado para exclusão.`);
    return false;
  }
}

/**
 * Deleta um registro de Business (e seus officers associados) do Redis.
 * @param {number} custId O ID da empresa a ser deletada.
 */
async function deletarBusiness(custId: number) {
  const businessKey = `business:${custId}`;
  const officersKey = `business:${custId}:officers`;

  const deletedBusinessCount = await redis.del(businessKey);
  const deletedOfficersCount = await redis.del(officersKey); // Deleta a lista de officers também

  if (deletedBusinessCount > 0) {
    await redis.srem("businesses", custId.toString());
    console.log(`\n❌ Empresa ${custId} e seus officers deletados com sucesso.`);
    return true;
  } else {
    console.log(`\nEmpresa com ID ${custId} não encontrada para exclusão.`);
    return false;
  }
}

/**
 * Deleta um registro de Account do Redis.
 * @param {number} accountId O ID da conta a ser deletada.
 */
async function deletarAccount(accountId: number) {
  const key = `account:${accountId}`;
  const deletedCount = await redis.del(key);
  if (deletedCount > 0) {
    await redis.srem("accounts", accountId.toString());
    console.log(`\n❌ Conta ${accountId} deletada com sucesso.`);
    return true;
  } else {
    console.log(`\nConta com ID ${accountId} não encontrada para exclusão.`);
    return false;
  }
}

/**
 * Deleta um registro de Transaction do Redis.
 * @param {number} txnId O ID da transação a ser deletada.
 */
async function deletarTransaction(txnId: number) {
  const key = `transaction:${txnId}`;
  const deletedCount = await redis.del(key);
  if (deletedCount > 0) {
    await redis.srem("transactions", txnId.toString());
    console.log(`\n❌ Transação ${txnId} deletada com sucesso.`);
    return true;
  } else {
    console.log(`\nTransação com ID ${txnId} não encontrada para exclusão.`);
    return false;
  }
}

module.exports = {
    migrarTudo,
    listarBranches,
    listarProdutos,
    buscarFuncionarioPorId,
    buscarContasPorClienteId,
    listarOfficersDeEmpresa,
    atualizarBranch,
    atualizarProduct,
    atualizarEmployee,
    atualizarIndividual,
    atualizarBusiness,
    atualizarAccount,
    atualizarTransaction,
    deletarBranch,
    deletarProduct,
    deletarEmployee,
    deletarIndividual,
    deletarBusiness,
    deletarAccount,
    deletarTransaction
};