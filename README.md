## 🏦 Banco Redis — Sistema Bancário Simples

Este projeto é um sistema bancário simples utilizando **Node.js**, **TypeScript** e **Redis** como banco de dados em memória. Ele oferece funcionalidades básicas como:

* CRUD de clientes
* CRUD de contas bancárias
* Transferência de valores entre contas
* Execução via Docker + Docker Compose

---

## 🧱 Tecnologias Utilizadas

* [Node.js](https://nodejs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Redis](https://redis.io/)
* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/)
* [ioredis](https://github.com/luin/ioredis)
* [uuid](https://www.npmjs.com/package/uuid)

---

## 📁 Estrutura de Diretórios

```
banco-redis/
├── src/
│   ├── banco.ts         # Funções de CRUD e transferências
│   └── index.ts         # Execução do sistema com exemplos
├── Dockerfile           # Dockerfile da aplicação
├── docker-compose.yml   # Sobe Redis + App
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Como Rodar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/banco-redis.git
cd banco-redis
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Rodar localmente (fora do Docker)

> Certifique-se de que o Redis está rodando localmente na porta `6379`.

```bash
npm run start
```

### 4. Rodar com Docker Compose (recomendado)

Este comando sobe o **Redis** e o **app Node.js** em containers:

```bash
docker-compose up --build
```

> Isso executa o script `src/index.ts`, que cria dois clientes, duas contas, e realiza uma transferência de R\$ 250 entre elas.

---

## 🔄 Funcionalidades

### ✅ Criar Cliente

```ts
await criarCliente("João", "joao@email.com");
```

### ✅ Criar Conta

```ts
await criarConta(clienteId, 1000);
```

### ✅ Transferência entre contas

```ts
await transferir(idContaOrigem, idContaDestino, 250);
```

### ✅ Buscar/Listar/Excluir contas e clientes

Funções como:

* `listarContas()`
* `buscarConta(id)`
* `deletarCliente(id)`

---

## 🐳 Docker Compose Detalhes

### `docker-compose.yml`

```yaml
version: "3.8"

services:
  redis:
    image: redis:7
    ports:
      - "6379:6379"
    volumes:
      - redis-data:/data

  app:
    build: .
    depends_on:
      - redis
    volumes:
      - .:/app
    command: npm run start

volumes:
  redis-data:
```

---

## 🧪 Testar o Projeto

A execução inicial com `npm run start` já cria e imprime no console um exemplo de uso com dois clientes e uma transferência entre eles.

---

## 🛠️ Problemas Comuns

### ❌ `Unknown file extension ".ts"`

Use o script com `ts-node-esm`:

```json
"scripts": {
  "start": "ts-node-esm src/index.ts"
}
```

E instale o pacote:

```bash
npm install --save-dev ts-node typescript
```

---

## 📜 Licença

Este projeto é de uso livre para fins educacionais e demonstrativos.
