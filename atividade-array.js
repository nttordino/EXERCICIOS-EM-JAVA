//atividade 1

let cores = ["vermelho", "azul", "preto"];

console.log(cores[1]);

//atividade 2

let numeros = ["1", "2", "3", "4", "5"];

console.log(numeros[0], numeros[4])

//atividade 3

let frutas = ["Banana", "maçã"];

console.log(frutas[0]);
console.table(frutas)

frutas.push("manga");
console.log("frutas");
console.table(frutas)

//atividade 4

let nomes = ["Nicolas", "André", "Karine", "Neymar"];

console.log(nomes[0]);
console.table(nomes)

nomes.splice(3);
console.table(nomes);


//exercicio 5

let times = ["Santos", "São Paulo", "Corinthians", "Palmeiras", "Vasco", "Flamengo"];

console.log(`A array de times possui ${times.length} times`)

//exercicio 6


let animais = ["Cachorro", "Gato", "Elefante", "Leão", "Tigre", "pinguim", "macaco"];


for (let i = 0; i < animais.length; i++) {
    console.log(animais[i]);
}

//exercicio 7

let carros = ["Civic", "Honda", "Golf", "hb20", "corolla", "Onix"];

console.log(carros[0]);
console.table(carros)

carros[1] = "Batmovel"
console.table(carros)

//exercicio 8


let linguagens = ["Python", "Java", "C#", "JavaScript", "PHP"];


if (linguagens.includes("JavaScript")) {
    console.log("JavaScript está no array!");
} else {
    console.log("JavaScript NÃO está no array!");
}

//exercicio 9


let valores = [10, 20, 30, 40, 50];


let soma = 0;

for (let i = 0; i < valores.length; i++) {
    soma += valores[i];
}

console.log("A soma é:", soma);

//exercicio 10

// Criando array vazio
let tarefas = [];

// Adicionando três tarefas
tarefas.push("Estudar JavaScript");
tarefas.push("Fazer exercícios");
tarefas.push("Revisar código");

// Exibindo tarefas numeradas
for (let i = 0; i < tarefas.length; i++) {
    console.log(`${i + 1}. ${tarefas[i]}`);
}
