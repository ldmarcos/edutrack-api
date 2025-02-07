# 📚 API - EduTrack – Sistema de Gestão Educacional  

O **EduTrack** é uma plataforma de gestão acadêmica que permite o acompanhamento do desempenho dos alunos e professores. O sistema oferece um ambiente interativo e gamificado, onde os alunos podem visualizar suas notas e conquistas, enquanto os professores gerenciam turmas e monitoram o progresso acadêmico.

---

## ⚙️ Tecnologias Utilizadas  

- **NodeJS** – Desenvolvimento do backend  
- **Express** – Framework para construção da API

---

## 📌 Pré-requisitos  

Antes de iniciar, instale as seguintes dependências no seu sistema:  
✅ **Node.js** (versão 16 ou superior)  
✅ **npm** ou **yarn**  
✅ **Git** (para clonar o repositório)  

---

## 📂 Estrutura do Projeto  

```bash
EDUTRACK-API/
│── src/  # 📂 Código-fonte da API 
│   ├── config/   # ⚙️ Configuração do MongoDB
│   ├── controllers/ # 🎯 Controladores para definir a lógica das rotas
│   ├── models/    # 🧑‍💻 Definições dos modelos (ex: Usuario)
│   ├── routes/    # 🌐 Definição das rotas da API
│   ├── app.js     # 🔧 Arquivo principal para configuração do Express
│── .env           # 📄 Variáveis de ambiente, como credenciais de banco de dados
│── package.lock.json  # 🛠️ Registro exato das versões das dependências
│── package.json    # 🛠️ Arquivo de dependências do projeto
│── server.js     # 🚀 Inicializa o servidor
```

---

## 🔧 Como Configurar e Executar  

### 1️⃣ Clonar o repositório  

```sh
git clone https://github.com/ldmarcos/edutrack-api.git
```

### 2️⃣ Instalar as dependências  

Usando **npm**:  

```sh
npm install
```

Ou com **yarn**:  

```sh
yarn install
```

---

### 3️⃣ Iniciar a API

```sh
npm start
```

Se estiver usando **yarn**:

```sh
yarn start
```

📢 **A API será iniciada em:** `http://localhost:5000`

---

## 🔗 Endpoints da API

### 🧑‍🏫 Cadastro de Usuário

- **POST /usuarios**

### 📰 Listar Usuários

- **GET /usuarios**

### 📖 Obter Usuário por ID

- **GET /usuarios/:id**

### 📝 Atualizar Usuário

- **PUT /usuarios/:id**

### ❌ Deletar Uusário

- **DELETE /usuarios/:id**





📌 **Criado por:** [Marcos Domingues](https://github.com/ldmarcos)  
📌 **Repositório da Aplicação:** [EduTrack](https://github.com/FellGMS/EduTrack)  
📌 **Repositório da API:** [EduTrack-API](https://github.com/ldmarcos/edutrack-api)  
---

## 🏆 Licença  

📝 **MIT License** – Fique à vontade para usar e melhorar!  
