<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:0F172A,50:1C3C3C,100:FF6F00&height=200&section=header&text=CORTEX-AI&fontSize=70&fontColor=ffffff&fontAlignY=38&desc=Multi-Agent%20AI%20Platform&descAlignY=58&descSize=20&animation=fadeIn" />

### 🧠 Specialized AI agents that plan, research, and build — together

**MERN Stack · LangGraph Orchestration · Retrieval-Augmented Generation**

<p>
  <img src="https://img.shields.io/badge/status-active-brightgreen?style=for-the-badge" alt="status"/>
</p>

<p>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node"/>
  <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white" alt="Express"/>
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/LangGraph-1C3C3C?style=flat-square&logo=langchain&logoColor=white" alt="LangGraph"/>
  <img src="https://img.shields.io/badge/RAG-Enabled-FF6F00?style=flat-square" alt="RAG"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker"/>
</p>

<p>
  <a href="https://cortex-ai-nine-nu.vercel.app"><b>🌐 Live Demo</b></a> ·
  <a href="#-getting-started"><b>⚙️ Getting Started</b></a> ·
  <a href="#-api-reference"><b>📡 API Reference</b></a> ·
 
</p>

</div>

<br/>

## 🧠 Overview

> *Multi-Agent AI Platform automates complex, multi-step tasks that a single LLM call handles poorly. Instead of one model juggling research, planning, and execution at once, specialized agents each own a slice of the problem and hand off work through a LangGraph orchestration layer, while a RAG pipeline keeps every response grounded in real, retrievable data. Built for teams that need traceable, reliable automation — not another chatbot wrapper.*

This platform lets several purpose-built AI agents — **research**, **coding**, **planning** — collaborate on multi-step tasks through a **LangGraph** orchestration layer. A **RAG pipeline** grounds agent responses in real, retrievable data rather than relying on model memory alone.

<br/>

## ✨ Key Features

<table>
<tr>
<td width="50%">

### 🤖 Multi-Agent Orchestration
Agents coordinate via LangGraph state machines to break down and solve complex tasks step by step.

### 📚 Retrieval-Augmented Generation
Agents pull grounded context from a vector database before responding — no hallucinated answers.

### 🔐 Secure Authentication
JWT-based auth with role-based access control out of the box.

</td>
<td width="50%">

### ⚡ Real-Time Updates
WebSocket-powered live agent status and streaming responses.

### 🧩 Microservices Architecture
Independently deployable, horizontally scalable backend services.

### 📊 Monitoring Dashboard
Visual tracking of agent tasks, logs, and performance.

</td>
</tr>
</table>

<br/>

## 🏗️ Architecture

```mermaid
flowchart TD
    A[👤 User] -->|Request| B[⚛️ React Frontend]
    B -->|API Call| C[🚪 Express Gateway]
    C --> D{🧠 Agent Orchestrator<br/>LangGraph}
    D --> E[🔍 Research Agent]
    D --> F[💻 Coding Agent]
    D --> G[🗂️ Planning Agent]
    E --> H[(📦 Vector DB<br/>RAG)]
    F --> I[(🍃 MongoDB)]
    G --> I
    D --> J[🔌 WebSocket Layer]
    J --> B

    style A fill:#0F172A,stroke:#FF6F00,color:#fff
    style D fill:#1C3C3C,stroke:#FF6F00,color:#fff
    style H fill:#FF6F00,stroke:#0F172A,color:#000
    style I fill:#47A248,stroke:#0F172A,color:#fff
```

<br/>

## 🛠️ Tech Stack

<div align="center">

| Layer | Technologies |
|:---|:---|
| **Frontend** | ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black) ![Tailwind](https://img.shields.io/badge/-Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) |
| **Backend** | ![Node](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/-Express-000000?style=flat-square&logo=express&logoColor=white) |
| **Database** | ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) |
| **AI / Agents** | ![LangGraph](https://img.shields.io/badge/-LangGraph-1C3C3C?style=flat-square) ![LangChain](https://img.shields.io/badge/-LangChain-1C3C3C?style=flat-square&logo=langchain&logoColor=white) |
| **Vector Store** | ![Qdrant](https://img.shields.io/badge/-Qdrant-DC244C?style=flat-square) |
| **DevOps** | ![Docker](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white) |

</div>

<br/>

## ⚙️ Getting Started

### Prerequisites

![Node](https://img.shields.io/badge/Node.js-≥18.x-339933?style=flat-square&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-≥6.x-47A248?style=flat-square&logo=mongodb&logoColor=white)
![npm](https://img.shields.io/badge/npm%20or%20yarn-required-CB3837?style=flat-square&logo=npm&logoColor=white)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Aniruddha-Shukla/CORTEX-AI.git
cd CORTEX-AI

# 2. Install dependencies
cd backend && npm install
cd ../frontend && npm install

# 3. Configure environment variables
cd ../backend
cp .env.example .env

# 4. Run the app
npm run dev                      # backend
cd ../frontend && npm run dev    # frontend
```

<div align="center">

### 🎉 The app runs at [cortex-ai-nine-nu.vercel.app](https://cortex-ai-nine-nu.vercel.app)

</div>

<br/>

## 🔑 Environment Variables

Create a `.env` file in `backend/`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key
VECTOR_DB_API_KEY=your_vector_db_key
```

> ⚠️ **Never commit `.env`** — confirm it's listed in `.gitignore`.

<br/>

## 📁 Project Structure

```
CORTEX-AI/
├── backend/
│   ├── agents/         # Research, coding, planning agent logic
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/        # LangGraph orchestration, RAG pipeline
│   └── server.js
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.jsx
├── docker-compose.yml
└── README.md
```

<br/>

## 📡 API Reference

<div align="center">

| Method | Endpoint | Description |
|:---:|:---|:---|
| ![POST](https://img.shields.io/badge/POST-49CC90?style=flat-square) | `/api/auth/register` | Register a new user |
| ![POST](https://img.shields.io/badge/POST-49CC90?style=flat-square) | `/api/auth/login` | Authenticate a user, returns a JWT |
| ![POST](https://img.shields.io/badge/POST-49CC90?style=flat-square) | `/api/agents/task` | Submit a new task to the agent orchestrator |
| ![GET](https://img.shields.io/badge/GET-61AFFE?style=flat-square) | `/api/agents/status/:id` | Get status of a running agent task |
| ![GET](https://img.shields.io/badge/GET-61AFFE?style=flat-square) | `/api/agents/history` | Retrieve past agent task history |

</div>

<br/>

## 🗺️ Roadmap

- [ ] 🌊 Streaming responses for all agents
- [ ] 🔌 Support for additional LLM providers
- [ ] 🧠 Persistent agent memory
- [ ] ✅ Unit + integration test coverage
- [ ] 🚀 CI/CD pipeline for auto-deployment

<br/>

## 🤝 Contributing

Contributions make the open-source community amazing — any contribution is **greatly appreciated**.

1. Fork the repository
2. Create a feature branch — `git checkout -b feature/AmazingFeature`
3. Commit your changes — `git commit -m 'Add AmazingFeature'`
4. Push the branch — `git push origin feature/AmazingFeature`
5. Open a Pull Request

<br/>

---

<div align="center">

### Built by **Aniruddha Shukla**

<p>
  <a href="https://www.linkedin.com/in/aniruddhashuklanie/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
  <a href="https://github.com/Aniruddha-Shukla"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/></a>
</p>

**⭐ If this project helped you, consider giving it a star!**

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:FF6F00,50:1C3C3C,100:0F172A&height=100&section=footer" />

</div>
