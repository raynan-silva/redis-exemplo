import {
  criarCliente,
  criarConta,
  listarContas,
  transferir,
  buscarConta,
} from "./banco";
const funcoesMigracao = require('./banq_test'); 

async function main() {
  // const cliente1 = await criarCliente("Maria", "maria@email.com");
  // const cliente2 = await criarCliente("Carlos", "carlos@email.com");

  // const conta1 = await criarConta(cliente1.id, 1000);
  // const conta2 = await criarConta(cliente2.id, 300);

  // console.log("Contas antes da transferência:");
  // console.log(await buscarConta(conta1.id));
  // console.log(await buscarConta(conta2.id));

  // await transferir(conta1.id, conta2.id, 250);

  // console.log("Contas após a transferência:");
  // console.log(await buscarConta(conta1.id));
  // console.log(await buscarConta(conta2.id));

  console.log("🔍 Testando dados migrados para Redis...\n");
  await funcoesMigracao.migrarTudo();

  await funcoesMigracao.listarBranches();
  await funcoesMigracao.listarProdutos();
  await funcoesMigracao.buscarFuncionarioPorId(1);
  await funcoesMigracao.buscarContasPorClienteId(1);
  await funcoesMigracao.listarOfficersDeEmpresa(10);

    // 3. Atualizar uma branch
    console.log("\n--- Testando atualização de Branch ---");
    const updatedBranch = await funcoesMigracao.atualizarBranch(1, { name: 'Nova Sede Global', city: 'Vila Velha', state: 'ES' });
    if (updatedBranch) {
        console.log("Branch atualizada:", updatedBranch);
    }
    await funcoesMigracao.listarBranches();

    // 4. Buscar e atualizar um funcionário
    console.log("\n--- Testando atualização de Funcionário ---");
    await funcoesMigracao.buscarFuncionarioPorId(7);
    const updatedEmployee = await funcoesMigracao.atualizarEmployee(7, { title: 'Teller Sênior' });
    if (updatedEmployee) {
        console.log("Funcionário atualizado:", updatedEmployee);
    }
    await funcoesMigracao.buscarFuncionarioPorId(7);

    // 5. Deletar uma branch
    console.log("\n--- Testando deleção de Branch ---");
    const deleted = await funcoesMigracao.deletarBranch(4);
    if (deleted) {
      await funcoesMigracao.listarBranches();
    }
    
    console.log("\n--- Operações de exemplo concluídas ---");
    process.exit();
}

main().catch(console.error);
