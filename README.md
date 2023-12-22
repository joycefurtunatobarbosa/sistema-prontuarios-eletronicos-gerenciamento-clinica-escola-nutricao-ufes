# 🏥🍎💻 Sistema de Gerenciamento de Prontuários Eletrônicos para a Clínica Escola de Nutrição (CEN) - UFES Alegre

##### :wave: Bem-vindo ao repositório do Sistema de Gerenciamento de Prontuários Eletrônicos (SGPE) desenvolvido para a Clínica Escola de Nutrição (CEN) da UFES Alegre. Este sistema foi criado para facilitar o processo de gestão de prontuários eletrônicos, proporcionando uma solução eficiente e organizada para a equipe da clínica.

## 1. Tecnologias Utilizadas

- 💻 Vue.js no Frontend: O frontend do projeto é construído utilizando o framework Vue.js, proporcionando uma experiência de usuário dinâmica e responsiva: [Vue.js](https://vuejs.org/).

- ⚙️ Node.js no Backend: O backend é desenvolvido em Node.js, oferecendo uma base robusta para a lógica de negócios, gerenciamento de dados e interação com o banco de dados: [Node.js](https://nodejs.org/).

- 📁 MongoDB como Banco de Dados: Utilizamos o MongoDB para armazenar os dados do sistema de forma eficiente e flexível: [MongoDB](https://www.mongodb.com/try/download/community).

## 2. Pré-requisitos
Antes de começar, certifique-se de ter o Node.js e o MongoDB instalados em seu ambiente de desenvolvimento.

## 3. Configuração e Execução
### :arrow_right: Clone este repositório:

git clone https://github.com/gabrielnama2/Prontuarios_Eletronicos_CEN.git

### :arrow_right: Instale as dependências do frontend e do backend:

cd Prontuarios_Eletronicos_CEN/frontend
npm install

cd ../backend/src
npm install

### :arrow_right: Inicie os servidores:
#### :fast_forward: Executar ambos os servidores juntos:

cd Prontuarios_Eletronicos_CEN/
npm start

#### :fast_forward: Executar os servidores separadamente:

#### :point_right: Frontend (Vue.js):

cd Prontuarios_Eletronicos_CEN/frontend/src
npm run serve

#### :point_right: Backend (Node.js):
cd Prontuarios_Eletronicos_CEN/backend/src
node app.js

### :arrow_right: Acesse o sistema em seu navegador:
#### :point_right: Frontend (Vue.js): http://localhost:8080<br>
#### :point_right: Backend (Node.js): http://localhost:3000<br><br>

##### :warning: Certifique-se de ter o MongoDB em execução localmente ou ajuste as configurações de conexão com o banco de dados conforme necessário.