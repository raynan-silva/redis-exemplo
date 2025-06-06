import {
  criarCliente,
  criarConta,
  listarContas,
  transferir,
  buscarConta,
} from "./banco";

async function main() {
  const cliente1 = await criarCliente("Maria", "maria@email.com");
  const cliente2 = await criarCliente("Carlos", "carlos@email.com");

  const conta1 = await criarConta(cliente1.id, 1000);
  const conta2 = await criarConta(cliente2.id, 300);

  console.log("Contas antes da transferência:");
  console.log(await buscarConta(conta1.id));
  console.log(await buscarConta(conta2.id));

  await transferir(conta1.id, conta2.id, 250);

  console.log("Contas após a transferência:");
  console.log(await buscarConta(conta1.id));
  console.log(await buscarConta(conta2.id));
}

main().catch(console.error);
