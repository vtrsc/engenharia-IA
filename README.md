# AI Engineering - Intensive Course

## About
This repository documents my progress, notes, and projects developed during an intensive course in Artificial Intelligence Engineering. The focus is on building a strong foundation and applying practical knowledge to real-world scenarios.

## Course Overview
The intensive program covers key concepts in AI, from fundamentals to advanced topics, with an emphasis on hands-on learning and project development.

## Topics Covered

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

## Objective
To develop the skills necessary to design, build, and deploy intelligent systems, preparing for real-world AI engineering challenges.

## Progress
This repository is continuously updated with new learnings, experiments, and projects throughout the course.

## Notes
All materials and implementations are for educational purposes and personal development.
Estrutura de Prompt (Baseada em Context Engineering da Anthropic)

🧠 Estrutura de Prompt (Baseada em Context Engineering da Anthropic)

A qualidade das respostas de uma IA depende diretamente da qualidade do contexto fornecido. Em vez de pensar apenas em prompts, a Anthropic recomenda pensar em Context Engineering, ou seja, organizar todas as informações necessárias para que o modelo execute a tarefa corretamente.

🎯 1. Contexto da Tarefa (Task Context)

Define quem a IA é e qual seu objetivo principal.

Exemplo
Você é um assistente especializado em Flutter.
Seu objetivo é ajudar desenvolvedores a criar aplicações modernas utilizando GetX.
Objetivo

Dar identidade e propósito ao modelo.

🎭 2. Contexto de Tom (Tone Context)

Define a personalidade e o estilo de comunicação.

Exemplo
Utilize linguagem amigável.
Explique conceitos de forma didática.
Evite respostas excessivamente técnicas.
Objetivo

Garantir consistência na forma como a IA responde.

📚 3. Dados de Antecedentes, Documentos e Imagens (Background Data)

Fornece informações de apoio para a tarefa.

Pode incluir
📄 Documentação
💻 Código-fonte
📑 PDFs
🏢 Regras de negócio
🖼️ Capturas de tela
📸 Imagens
🔌 APIs
🗄️ Bancos de dados
Exemplo
Considere o seguinte documento:

[DOCUMENTO]

Considere também o seguinte código:

[CÓDIGO]
Objetivo

Dar conhecimento específico sobre o problema.

📋 4. Descrição Detalhada da Tarefa e Regras

Explica exatamente o que deve ser feito e quais restrições devem ser seguidas.

Exemplo
Regras:

- Sempre utilize Flutter 3.35.
- Utilize GetX para gerenciamento de estado.
- Não altere a arquitetura existente.
- Explique todas as modificações realizadas.
Objetivo

Evitar ambiguidades e comportamentos inesperados.

📝 5. Exemplos (Few-Shot Prompting)

Mostra exemplos de entradas e saídas esperadas.

Exemplo
Usuário:
Como você foi criado?

Assistente:
Fui criado para ajudar desenvolvedores Flutter.
Objetivo

Ensinar o padrão desejado através de exemplos.

🕒 6. Histórico da Conversa (Conversation History)

Fornece contexto das interações anteriores.

Exemplo
Histórico:

- O projeto utiliza Flutter.
- O backend utiliza FastAPI.
- O banco de dados é PostgreSQL.
Objetivo

Manter continuidade e coerência ao longo da conversa.

🚀 7. Descrição ou Pedido Imediato (Immediate Request)

Representa a solicitação atual do usuário.

Exemplo
Crie uma tela de login moderna utilizando GetX.
Objetivo

Informar exatamente o que deve ser executado agora.

📤 8. Formatação da Saída (Output Formatting)

Define como a resposta deve ser estruturada.

Exemplo
Responda utilizando:

# Análise

# Solução

# Código

# Explicação
Objetivo

Produzir respostas organizadas e previsíveis.

🎬 9. Resposta Pré-Preenchida (Prefill)

Técnica utilizada para induzir um formato específico de resposta.

Exemplo
<resposta>

ou

{
  "analise": "",
  "solucao": ""
}
Objetivo

Guiar o modelo para uma estrutura de saída específica.


