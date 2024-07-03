# Projeto CRUD em TypeScript no Node.js

Este projeto é um exemplo de um CRUD (Create, Read, Update, Delete) implementado em TypeScript utilizando o ambiente de desenvolvimento Node.js. A aplicação permite a manipulação básica de itens, onde os dados são armazenados em memória durante a execução do servidor.

### Funcionalidades Implementadas

1. **Create (Criar)**: Permite adicionar novos itens à lista em memória.
2. **Get (Pegar)**: Recupera todos os itens existentes ou um item específico por ID.
3. **Update (Atualizar)**: Modifica os dados de um item existente com base no ID.
4. **Delete (Excluir)**: Remove um item da lista com base no ID fornecido.

### Tecnologias Utilizadas

- Node.js
- TypeScript
- Express (para criação de APIs)

### Estrutura do Projeto

- `src/index.ts`: Arquivo principal.
- `src/server/index.ts`: Arquivo que instância a aplicação e faz as configurações necessarias.
- `src/server/routers/index.ts`: Arquivo que configura as rotas.
- `src/server/controller/index.ts`: Arquivo de onde os metódos controladores são importados.
- `tsconfig.json`: Arquivo de configuração do TypeScript.
- `package.json`: Arquivo de manifesto do projeto Node.js com scripts de inicialização.

### Instruções de Uso

1. **Instalação de Dependências:**

   ````bash
   npm install

2. **Execução do Servidor:**
   ```bash
   npm start
   ````


### Observações
Este projeto é uma implementação simples de um CRUD em um ambiente de desenvolvimento local. Os dados são armazenados apenas em memória e serão perdidos ao reiniciar o servidor. Para um ambiente de produção, considere integrar um banco de dados para persistência de dados.

# 
### Este projeto foi desenvolvido por [Júlio Elias de Sousa Rocha](https://github.com/Juliowk).