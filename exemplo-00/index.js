import * as tf from '@tensorflow/tfjs';

async function trainModel( inputXs, outputYs) {
    const model = tf.sequential();


    //primeira camada da rede:
    // entrada de 7 posições (idade normalizada + 3 cores + 3 localizaçoes)
    // 80 neurônios = aqui coloquei tudo isso , pq tem pouca base de treino
    //quanto mais neurônios, mais complexa a rede pode aprender
 // e consequentemente, mais processamento ela vai usar 

    // A ReLU age como um filtro:
    // É como se ela deixasse somente os dados interessantes seguirem viagem na rede
    /// Se a informação chegou nesse neuronio é positiva, passa para frente!
    // se for zero ou negativa, pode jogar fora, nao vai servir para nada
    model.add(tf.layers.dense({inputShape:[7], units: 80 , activation: 'relu'}))

    //saida: 3 neurônios, um para cada categoria (premium, medium, basic)
    // activation : softmax normaliza a saída para que a soma seja 1, ou seja, cada neurônio vai representar a probabilidade de cada categoria
    model.add(tf.layers.dense({units: 3, activation: 'softmax'}))

    // compilando o modelo 
    // optimizer: 'adam' {Adaptive Moment Estimation}
    // é um treinador pessoal moderno para redes neurais
    // ajusta os pesos de forma eficiente e inteligente
    // aprender com historico de erros e acertos
    // loss : 'categoricalCrossentropy'
    // ele compara o que o modelo "acha" (os scores de cada categoria)
    // com o que é a resposta correta
    // a categoria premium sera sempre [1, 0, 0]

    //quanto mais distante da previsao do modelo da resposta correta
    //maior o erro (loss)
    // exemplo classico: classificaçao de imagens , recomendaçao ,categorização de usuario 
    //qualquer coisa em que a resposta certa é "apenas uma entre varias possiveis"
    model.compile({
         optimizer: 'adam',
          loss: 'categoricalCrossentropy',
           metrics: ['accuracy']
        })


        
}
// Exemplo de pessoas para treino (cada pessoa com idade, cor e localização)
// const pessoas = [
//     { nome: "Erick", idade: 30, cor: "azul", localizacao: "São Paulo" },
//     { nome: "Ana", idade: 25, cor: "vermelho", localizacao: "Rio" },
//     { nome: "Carlos", idade: 40, cor: "verde", localizacao: "Curitiba" }
// ];

// Vetores de entrada com valores já normalizados e one-hot encoded
// Ordem: [idade_normalizada, azul, vermelho, verde, São Paulo, Rio, Curitiba]
// const tensorPessoas = [
//     [0.33, 1, 0, 0, 1, 0, 0], // Erick
//     [0, 0, 1, 0, 0, 1, 0],    // Ana
//     [1, 0, 0, 1, 0, 0, 1]     // Carlos
// ]

// Usamos apenas os dados numéricos, como a rede neural só entende números.
// tensorPessoasNormalizado corresponde ao dataset de entrada do modelo.
const tensorPessoasNormalizado = [
    [0.33, 1, 0, 0, 1, 0, 0], // Erick
    [0, 0, 1, 0, 0, 1, 0],    // Ana
    [1, 0, 0, 1, 0, 0, 1]     // Carlos
]

// Labels das categorias a serem previstas (one-hot encoded)
// [premium, medium, basic]
const labelsNomes = ["premium", "medium", "basic"]; // Ordem dos labels
const tensorLabels = [
    [1, 0, 0], // premium - Erick
    [0, 1, 0], // medium - Ana
    [0, 0, 1]  // basic - Carlos
];

// Criamos tensores de entrada (xs) e saída (ys) para treinar o modelo
const inputXs = tf.tensor2d(tensorPessoasNormalizado)
const outputYs = tf.tensor2d(tensorLabels)


const models = trainModel(inputXs, outputYs)