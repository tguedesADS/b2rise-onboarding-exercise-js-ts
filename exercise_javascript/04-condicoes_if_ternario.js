// 1. Escreva uma instrução `if` que verifique se um número é positivo e registre uma mensagem de acordo.

const number = 23;

if (number > 0) {
  console.log(`O número ${number} é positivo.`);
}

// 2. Escreva uma instrução `if-else` que verifique se um número é par ou ímpar e registre uma mensagem.

let test2 = 17;

if (test2 % 2 === 0) {
  console.log(`O número ${test2} é par`);
} else {
  console.log(`O número ${test2} é ímpar`);
}

// 3. Use o operador ternário para verificar se uma string está vazia e registrar uma mensagem.

const str = "";
console.log(str ? `A string não está vazia: ${str}` : "A string está vazia");

//4. Escreva uma instrução `if` que verifique se uma variável é `null` ou `undefined` e registre uma mensagem.

let variable;

if (variable === null || variable === undefined) {
  console.log("A variável é nula ou indefinida");
} else {
  console.log("A variável tem um valor");
}

let palavra;
console.log(
  !palavra ? `A variável é nula ou indefinida` : "A variável tem um valor"
);

// 5. Escreva uma instrução `if-else if-else` para verificar se um número é positivo, negativo ou zero.

const test5 = 0;

if (test5 > 0) {
  console.log(`O número ${test5} é positivo.`);
} else if (test5 < 0) {
  console.log(`O número ${test5} é negativo.`);
} else {
  console.log(`O número ${test5} é nulo.`);
}

// 6. Use instruções `if` aninhadas para verificar se um número está entre 10 e 20, e se é par.

const test6 = 18;

if (test6 >= 10 && test6 <= 20) {
  if (test6 % 2 === 0) {
    console.log(`O número está entre 10 e 20 e é par`);
  }
}

// 7. Use o operador ternário para registrar mensagens diferentes com base no comprimento de um array.

let arr = [1, 2, 3, 4, 5];

console.log(arr.length > 3 ? "O array tem mais de 3 elementos" : "O array tem 3 ou menos elementos");


// 8. Escreva uma instrução `if` que verifique se um objeto possui uma propriedade específica e registre uma mensagem.

const test8 = {
    material: 'MDF',
    largura: 35,
    altura: 160,
    profundidade: 14,
    testeQualidade: true,
}

if (test8.hasOwnProperty('altura')) {
    console.log(`Altura identificada.`)
} else {
    console.log(`A altura não foi identificada.`)
}

// 9. Escreva uma função que receba um número e retorne uma mensagem com base em condições complexas usando `if-else` aninhado e operadores ternários.

function test9(num) {
  if (num < 0) {
    return "O número é negativo";
  } else if (num === 0) {
    return "O número é zero";
  } else {
    if (num % 2 === 0) {
      return num > 10 ? "O número é par e maior que 10": "O número é par e menor ou igual a 10";
    } else {
      return num > 10 ? "O número é ímpar e maior que 10" : "O número é ímpar e menor ou igual a 10";
    }
  }
}

console.log(test9(-5));
console.log(test9(0));
console.log(test9(4));
console.log(test9(12));  
console.log(test9(7));
console.log(test9(15));

// 10. Crie uma função que use múltiplos operadores ternários para retornar valores diferentes com base em várias condições.


const times = {
 Fortaleza: 60,
 Ceara: 50,
 Flamengo: 95,
 Palmeiras: 80,
 Vasco: 78
}

function categoria(value) {
    return value >= 90? "A" :
           value >= 80? "B" :
           value >= 70? "C" :
           value >= 60? "D" :
                         "F";
}

for (const time in times) {
    const score = times[time];
    const result = categoria(score);
    console.log(`${time} tem score ${score} e está na categoria ${result}`);
  }