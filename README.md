
# 💡 Gerenciador de Ideias

Uma aplicação fullstack para cadastrar, listar, editar, filtrar e excluir ideias de projetos. Criada com **Node.js + Express (API)** e **React + TypeScript (frontend)**.

---

## 🚀 Funcionalidades

- Cadastro de ideias com título, descrição, categoria e status
- Listagem com filtros por categoria e status
- Edição e exclusão de ideias
- Integração total entre frontend e backend
- Boas práticas com Clean Code, API RESTful e tipagem forte

---

## 🧱 Tecnologias

- Backend: Node.js + Express + UUID
- Frontend: React + TypeScript + Axios + Vite
- Deploy: Render (API) + Vercel (Frontend)

---

## 💻 Rodando localmente

### Requisitos:
- Node.js
- npm

### 🔧 Clone o repositório:
```bash
git clone https://github.com/seu-usuario/project-ideas-app.git
cd project-ideas-app
```

### 🚀 Backend (API)
```bash
cd backend
npm install
node server.js
```
> A API roda em: `http://localhost:3001/ideas`

---

### 💻 Frontend
```bash
cd ../frontend
npm install
npm run dev
```
> A aplicação abre em: `http://localhost:5173`

---

## 🌍 Deploy

- 🔗 Frontend: [https://seu-app.vercel.app](https://seu-app.vercel.app)
- 🔗 Backend: [https://sua-api.onrender.com/ideas](https://sua-api.onrender.com/ideas)

---

## 🧪 Exemplo de Requisições à API

- **GET** `/ideas?category=tecnologia&status=pendente`
- **POST** `/ideas`
```json
{
  "title": "Nova ideia",
  "description": "Descrição legal",
  "category": "tecnologia",
  "status": "pendente"
}
```

---

## 📂 Estrutura do Projeto

```
project-ideas-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── server.js
├── frontend/
│   ├── components/
│   ├── services/
│   ├── interfaces/
│   └── App.tsx
```

---

## 👩‍💻 Desenvolvido por

Michelle Silva  
📧 mhapasilva@gmail.com  
📱 WhatsApp: +33 06 07 03 37 92

---
