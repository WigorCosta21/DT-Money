# DT Money

DT Money é uma aplicação de controle financeiro pessoal que permite registrar entradas, saídas e categorizar transações. Com um design simples e funcional, é ideal para quem deseja monitorar e organizar suas finanças de forma eficiente.

---

## Funcionalidades

- **Cadastro de transações:** Registre entradas e saídas financeiras, incluindo descrição, valor, categoria e tipo (income ou outcome).
- **Resumo financeiro:** Visualize o saldo total, entradas e saídas em um resumo dinâmico.
- **Busca por transações:** Utilize um campo de busca para filtrar transações por descrições e categorias.
- **Interação dinâmica:** Interface responsiva e intuitiva utilizando Radix UI Dialog e Styled Components.

---

## Tecnologias Utilizadas

- **React:** Para construção de componentes e gerenciamento de estado.
- **Styled Components:** Para estilização baseada em temas dinâmicos.
- **Radix UI:** Implementação de modais acessíveis e personalizáveis.
- **React Hook Form:** Para manipulação de formulários e validação utilizando Zod.
- **Axios:** Consumo de API para manipulação de transações.
- **Json-Server:** Simulação de API REST para desenvolvimento local.

---

## Estrutura de Diretórios

- **components:** Contém os componentes reutilizáveis, como o Header, Summary e modais.
- **context:** Configuração de contextos React, incluindo o TransactionsContext.
- **hooks:** Contém hooks customizados, como o `useSummary`.
- **pages:** Contém as páginas principais da aplicação.
- **styles:** Estilizações globais e temáticas.
- **utils:** Funções utilitárias como formatadores de preços e datas.

---

## Como Executar o Projeto

### Requisitos

- Node.js
- Gerenciador de pacotes (npm ou yarn)

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/dt-money.git
   ```

2. Navegue para o diretório do projeto:

   ```bash
   cd dt-money
   ```

3. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. Inicie o servidor de API local:

   ```bash
   npm run dev:server
   # ou
   yarn dev:server
   ```

6. Acesse o projeto em seu navegador no endereço:
   ```
   http://localhost:5173
   ```

---
