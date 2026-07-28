# 🤖 AI Engineering - Intensive Course

## About
This repository documents my progress, notes, and projects developed during an intensive course in Artificial Intelligence Engineering. The focus is on building a strong foundation and applying practical knowledge to real-world scenarios.

## Course Overview
The intensive program covers key concepts in AI, from fundamentals to advanced topics, with an emphasis on hands-on learning and project development.

## 📚 Topics Covered

### Fundamentals
- Programming logic  
- Data structures  
- Linear algebra, probability, and statistics  

### Machine Learning
- Supervised and unsupervised learning  
- Regression and classification models  
- Model evaluation and optimization  

### Deep Learning
- Neural networks  
- Convolutional Neural Networks (CNN)  
- Recurrent Neural Networks (RNN) and LSTM  

### Practical Applications
- Real-world AI projects  
- Model training and deployment  
- API integration  

## 🎯 Objective
To develop the skills necessary to design, build, and deploy intelligent systems, preparing for real-world AI engineering challenges.

## 📂 Modulo 1 Fundamentos de LLm´s 

| Example | Topic | Main Technologies |
|---------|-------|-------------------|
| **exemplo-00** | TensorFlow.js Basics | TensorFlow.js, Node.js |
| **exemplo-01** | E-commerce Recommendation System | TensorFlow.js, JavaScript |
| **exemplo-02** | Duck Hunt Game | PixiJS, Webpack |
| **exemplo-04** | Temperature & TopK | JavaScript, AI APIs |
| **exemplo-05** | Multimodal AI | JavaScript, AI Services |
| **exemplo-06** | Playwright Tests | Playwright |
| **exemplo-07** | Playwright Navigation | Playwright |
| **exemplo-08** | Better Auth Demo | Next.js, Better Auth |
| **exemplo-09** | Grafana + MCP | Grafana, OpenTelemetry |
| **exemplo-10** | Ollama API Comparison | Ollama |
| **exemplo-11** | OpenRouter API | OpenRouter |
| **exemplo-12** | Neo4j Embeddings | LangChain, Neo4j |
| **exemplo-13** | RAG with Neo4j | LangChain, Neo4j, LLM |



### **exemplo-00**: TensorFlow.js Basics
- **Description**: Introduction to TensorFlow.js with basic machine learning models
- **Tech Stack**: Node.js, TensorFlow.js
- **Key Learning**: ML model fundamentals using JavaScript
- **Files**: `index.js`, `package.json`

### **exemplo-01-ecommerce-recomendations**: E-commerce Recommendation System
- **Description**: A web application that implements a machine learning-based product recommendation engine. Tracks user profiles, purchase history, and generates personalized product recommendations using TensorFlow.js
- **Tech Stack**: HTML5, CSS3, JavaScript (ES6+), TensorFlow.js, Browser-sync
- **Key Features**:
  - User profile management and selection
  - Purchase history tracking
  - Product catalog display
  - ML model training for recommendations
  - TensorFlow Visor for model visualization
- **Architecture**: MVC pattern with Controllers, Services, and Views
- **Setup**: `npm install` → `npm start` → Navigate to `http://localhost:3000`

### **exemplo-02-vencendo-qualquer-jogo**: Duck Hunt Game Implementation
- **Description**: A full-featured implementation of the classic Duck Hunt game in JavaScript/HTML5. Demonstrates game development concepts, asset management, and game logic
- **Tech Stack**: Webpack, Babel, PixiJS, HowlerJS, GreenSock, HTML5 Canvas/WebGL
- **Key Features**:
  - Real-time rendering with PixiJS
  - Audio management with HowlerJS
  - Sprite animation and tweening
  - Responsive game mechanics
  - Multiple difficulty levels
- **Concepts**: Game loop, collision detection, state management, asset optimization
- **Setup**: `npm install` → `npm start` → Navigate to `http://localhost:8080`

### **exemplo-04-webai02-temperature-and-topK**: Temperature & TopK Parameters Exploration
- **Description**: An interactive web application that demonstrates and explains how temperature and topK parameters affect AI model outputs. Essential for understanding text generation behavior
- **Tech Stack**: HTML5, CSS3, JavaScript, Web API Integration
- **Key Concepts**:
  - **Temperature**: Controls randomness in model responses (0 = deterministic, 1+ = more creative)
  - **TopK**: Limits predictions to top K most probable tokens
  - Interactive experimentation with different parameter values
- **Setup**: `npm start` → Navigate to `http://localhost:8080`

### **exemplo-05-webai03-multimodal**: Multimodal AI Integration
- **Description**: A web application demonstrating multimodal capabilities (text, image, audio integration). Shows how to build AI-powered applications that process multiple input types
- **Tech Stack**: HTML5, CSS3, JavaScript (ES6+), AI Service Integration
- **Structure**:
  - `controllers/` - Form handling and user interaction
  - `services/` - AI service calls and translation
  - `views/` - UI rendering and display logic
- **Key Features**:
  - Multiple input modalities support
  - Translation services integration
  - AI response processing
- **Setup**: `npm start` → Navigate to `http://localhost:8080`

### **exemplo-06-playwright-testes**: Automated Testing with Playwright
- **Description**: Demonstrates automated end-to-end testing using Playwright framework. Tests web applications by simulating real user interactions
- **Tech Stack**: Playwright, Node.js
- **Key Concepts**:
  - Browser automation
  - Element interaction testing
  - Cross-browser compatibility testing
  - Assertion and validation
- **Setup**: `npm test` or `npx playwright test`
- **Location**: Tests are in `tests/app.spec.js`

### **exemplo-07-playwright-navegacao**: Advanced Playwright Navigation
- **Description**: Explores advanced navigation automation scenarios with Playwright, including form filling, multi-page navigation, and data scraping
- **Tech Stack**: Playwright, Node.js
- **Purpose**: Learn complex automation patterns for real-world web testing scenarios
- **Key Use Cases**:
  - Form automation and validation
  - Multi-step navigation workflows
  - Data extraction from web pages
  - Session and state management
- **Reference**: `prompt.md` contains specific automation tasks and requirements

### **exemplo-08-context7**: Next.js Auth Demo with Better Auth
- **Description**: A minimal full-stack demo built with Next.js App Router, Better Auth, GitHub OAuth, and local SQLite persistence
- **Tech Stack**: Next.js, TypeScript, Tailwind CSS, Better Auth, better-sqlite3, npm
- **Key Features**:
  - GitHub login button with GitHub icon
  - Home page showing login state
  - Local SQLite storage for users and sessions
  - Simple and polished UI with clear setup instructions
- **Setup**: `npm install` → `npx @better-auth/cli migrate` → `npm run dev`

### **exemplo-09-grafana-mcp**: Observability with Grafana + MCP
- **Description**: Explores a complete observability stack using Grafana and the Model Context Protocol (MCP), enabling developers to query metrics, logs, traces, and alerts directly from the IDE.
- **Tech Stack**: Node.js, Fastify, OpenTelemetry, Prometheus, Grafana, Loki, Tempo, Docker Compose, Blackbox Exporter
- **Purpose**: Learn how to build, monitor, and troubleshoot applications using a modern observability platform integrated with MCP.
- **Key Use Cases**:
  - Collecting and visualizing application metrics
  - Centralized log aggregation and analysis
  - Distributed tracing with Tempo
  - Querying observability data directly from the IDE via MCP
  - Monitoring service health and availability with Blackbox Exporter
- **Reference**: `prompt.md` contains setup instructions, MCP integration examples, and observability queries.


### **exemplo-10-ollama-api-comparison**: Ollama API Comparison (OpenAI Compatible vs Native API)

- **Description**: Demonstrates how to interact with local LLMs running on Ollama using both the OpenAI-compatible API (`/v1/chat/completions`) and the native Ollama API (`/api/generate`). The example compares model behavior, output formats, and reasoning capabilities.
- **Tech Stack**: Ollama, Local LLMs, cURL, Bash, jq
- **Purpose**: Learn how different Ollama endpoints behave, understand response formats, and compare safety behavior between different language models.
- **Key Use Cases**:
  - Listing locally installed models with `ollama list`
  - Downloading models using `ollama pull`
  - Calling the OpenAI-compatible endpoint (`/v1/chat/completions`)
  - Calling the native Ollama endpoint (`/api/generate`)
  - Comparing structured JSON responses
  - Inspecting reasoning (`thinking`) returned by compatible models
  - Streaming vs non-streaming responses
  - Understanding differences in safety policies between models
- **Reference**: `request.sh` contains all example requests, including model download commands, OpenAI-compatible API requests, native Ollama API examples, and streaming demonstrations.

### **exemplo-11-openrouter-api**: OpenRouter API Integration with LLM Models

- **Description**: Demonstrates how to integrate external Large Language Models (LLMs) using the OpenRouter API. This example shows how to send chat completion requests using different AI models through an OpenAI-compatible interface.

- **Tech Stack**: OpenRouter API, LLM Models, cURL, Bash, jq, Environment Variables (.env)

- **Purpose**: Learn how to consume hosted AI models through APIs, manage authentication securely, and understand the structure of chat completion requests and responses.

- **Key Concepts**:
  - OpenAI-compatible Chat Completion API
  - API authentication using environment variables
  - Secure management of API keys with `.env`
  - Model selection and configuration
  - Prompt messages structure (`system`, `user`, `assistant`)
  - Temperature parameter for controlling response creativity
  - Token limitation with `max_tokens`
  - JSON response processing with `jq`
  - **Reference**:
  `request.sh` contains the complete API request example, including authentication headers, model configuration, prompt structure, and response formatting.
     
     # Run API request
      ./request.sh
---

### **exemplo-12-embeddings-neo4j-template**: Embeddings with Neo4j Vector Store

- **Description**: Demonstrates how to generate vector embeddings from PDF documents and store them in Neo4j as a vector database. This project introduces the complete indexing pipeline required for semantic search applications.
- **Tech Stack**: Node.js, TypeScript, LangChain, Hugging Face Transformers, Neo4j, Docker Compose
- **Purpose**: Learn how to transform documents into embeddings and persist them inside a vector database for semantic retrieval.
- **Key Concepts**:
  - PDF document ingestion
  - Text chunking
  - Embedding generation using Hugging Face models
  - Neo4j Vector Store integration
  - Similarity search
  - Local vector database with Docker
- **Reference**:
  - `src/index.ts` – application entry point
  - `src/documentProcessor.ts` – document processing pipeline
  - `src/config.ts` – Neo4j configuration
  - `docker-compose.yml` – Neo4j local environment
  - `tensores.pdf` – sample document used for indexing

---

### **exemplo-13-embeddings-neo4j-rag**: Retrieval-Augmented Generation (RAG)

- **Description**: Demonstrates how to build a complete Retrieval-Augmented Generation (RAG) pipeline using Neo4j Vector Search and Large Language Models. The application retrieves the most relevant document chunks before generating grounded responses.
- **Tech Stack**: Node.js, TypeScript, LangChain, Hugging Face Transformers, Neo4j, Docker Compose, LLM APIs
- **Purpose**: Learn how modern AI assistants combine semantic search and LLMs to answer questions based on private documents instead of relying only on the model's internal knowledge.
- **Key Concepts**:
  - Retrieval-Augmented Generation (RAG)
  - Semantic Search
  - Vector Similarity Search
  - Context Injection
  - Prompt Engineering
  - AI-powered Question Answering
- **Reference**:
  - `src/index.ts` – RAG execution flow
  - `src/documentProcessor.ts` – document indexing
  - `src/config.ts` – embeddings and Neo4j configuration
  - `src/ai.ts` – LLM integration
  - `respostas/` – generated answers
  - `tensores.pdf` – knowledge source



 
## 🔄 Progress
This repository is continuously updated with new learnings, experiments, and projects throughout the course.

## 📝 Notes
All materials and implementations are for educational purposes and personal development.

### 🧠 Estrutura de Prompt (Baseada em Context Engineering da Anthropic)

A qualidade das respostas de uma IA depende diretamente da qualidade do contexto fornecido. Em vez de pensar apenas em prompts, a Anthropic recomenda pensar em Context Engineering, ou seja, organizar todas as informações necessárias para que o modelo execute a tarefa corretamente.

#### 🎯 1. Contexto da Tarefa (Task Context)

Define quem a IA é e qual seu objetivo principal.

**Exemplo:**
```
Você é um assistente especializado em Flutter.
Seu objetivo é ajudar desenvolvedores a criar aplicações modernas utilizando GetX.
```

**Objetivo:** Dar identidade e propósito ao modelo.

#### 🎭 2. Contexto de Tom (Tone Context)

Define a personalidade e o estilo de comunicação.

**Exemplo:**
```
Utilize linguagem amigável.
Explique conceitos de forma didática.
Evite respostas excessivamente técnicas.
```

**Objetivo:** Garantir consistência na forma como a IA responde.

#### 📚 3. Dados de Antecedentes, Documentos e Imagens (Background Data)

Fornece informações de apoio para a tarefa.

**Pode incluir:**
- 📄 Documentação
- 💻 Código-fonte
- 📑 PDFs
- 🏢 Regras de negócio
- 🖼️ Capturas de tela
- 📸 Imagens
- 🔌 APIs
- 🗄️ Bancos de dados

**Exemplo:**
```
Considere o seguinte documento:
[DOCUMENTO]

Considere também o seguinte código:
[CÓDIGO]
```

**Objetivo:** Dar conhecimento específico sobre o problema.

#### 📋 4. Descrição Detalhada da Tarefa e Regras

Explica exatamente o que deve ser feito e quais restrições devem ser seguidas.

**Exemplo:**
```
Regras:
- Sempre utilize Flutter 3.35.
- Utilize GetX para gerenciamento de estado.
- Não altere a arquitetura existente.
- Explique todas as modificações realizadas.
```

**Objetivo:** Evitar ambiguidades e comportamentos inesperados.

#### 📝 5. Exemplos (Few-Shot Prompting)

Mostra exemplos de entradas e saídas esperadas.

**Exemplo:**
```
Usuário: Como você foi criado?
Assistente: Fui criado para ajudar desenvolvedores Flutter.
```

**Objetivo:** Ensinar o padrão desejado através de exemplos.

#### 🕒 6. Histórico da Conversa (Conversation History)

Fornece contexto das interações anteriores.

**Exemplo:**
```
Histórico:
- O projeto utiliza Flutter.
- O backend utiliza FastAPI.
- O banco de dados é PostgreSQL.
```

**Objetivo:** Manter continuidade e coerência ao longo da conversa.

#### 🚀 7. Descrição ou Pedido Imediato (Immediate Request)

Representa a solicitação atual do usuário.

**Exemplo:**
```
Crie uma tela de login moderna utilizando GetX.
```

**Objetivo:** Informar exatamente o que deve ser executado agora.

#### 📤 8. Formatação da Saída (Output Formatting)

Define como a resposta deve ser estruturada.

**Exemplo:**
```
Responda utilizando:
# Análise
# Solução
# Código
# Explicação
```

**Objetivo:** Produzir respostas organizadas e previsíveis.

#### 🎬 9. Resposta Pré-Preenchida (Prefill)

Técnica utilizada para induzir um formato específico de resposta.

**Exemplo:**
```
<resposta>
ou
{
  "analise": "",
  "solucao": ""
}
```

**Objetivo:** Guiar o modelo para uma estrutura de saída específica.




