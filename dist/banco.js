import Redis from "ioredis";
import { v4 as uuid } from "uuid";
const redis = new Redis({ host: "redis", port: 6379 });
// CLIENTE
export async function criarCliente(nome, email) {
    const id = uuid();
    await redis.hmset(`cliente:${id}`, { id, nome, email });
    await redis.sadd("clientes", id);
    return { id, nome, email };
}
export async function listarClientes() {
    const ids = await redis.smembers("clientes");
    return Promise.all(ids.map(id => redis.hgetall(`cliente:${id}`)));
}
export async function buscarCliente(id) {
    return await redis.hgetall(`cliente:${id}`);
}
export async function deletarCliente(id) {
    await redis.del(`cliente:${id}`);
    await redis.srem("clientes", id);
}
// CONTA
export async function criarConta(clienteId, saldoInicial = 0) {
    const id = uuid();
    await redis.hmset(`conta:${id}`, {
        id,
        clienteId,
        saldo: saldoInicial.toString(),
    });
    await redis.sadd("contas", id);
    return { id, clienteId, saldo: saldoInicial };
}
export async function listarContas() {
    const ids = await redis.smembers("contas");
    return Promise.all(ids.map(id => redis.hgetall(`conta:${id}`)));
}
export async function buscarConta(id) {
    return await redis.hgetall(`conta:${id}`);
}
export async function atualizarSaldo(id, novoSaldo) {
    await redis.hset(`conta:${id}`, "saldo", novoSaldo.toString());
}
export async function deletarConta(id) {
    await redis.del(`conta:${id}`);
    await redis.srem("contas", id);
}
// TRANSFERÊNCIA
export async function transferir(contaOrigem, contaDestino, valor) {
    const conta1 = await redis.hgetall(`conta:${contaOrigem}`);
    const conta2 = await redis.hgetall(`conta:${contaDestino}`);
    if (!conta1?.saldo || !conta2?.saldo) {
        throw new Error("Conta de origem ou destino não encontrada.");
    }
    const saldoOrigem = parseFloat(conta1.saldo);
    const saldoDestino = parseFloat(conta2.saldo);
    if (saldoOrigem < valor) {
        throw new Error("Saldo insuficiente.");
    }
    const multi = redis.multi();
    multi.hset(`conta:${contaOrigem}`, "saldo", (saldoOrigem - valor).toString());
    multi.hset(`conta:${contaDestino}`, "saldo", (saldoDestino + valor).toString());
    await multi.exec();
}
