// 1. Declare variáveis em TypeScript usando os tipos básicos: string, number e boolean.

const nome: string = "thalia"
const idade: number = 27
const adulto: boolean = true

// 2. Escreva uma função que receba dois números e retorne a soma deles. Tipifique corretamente os parâmetros e o retorno da função.

function calc(x: number, y: number): number {
  return x + y;
}
const result = calc(30, 20)

console.log(result)

// 3. Crie uma interface que descreva um objeto com propriedades de diferentes tipos básicos (string, number, boolean). Em seguida,
// escreva uma função que receba esse objeto e imprima suas propriedades no console.

interface MyObject {
  name: string;
  age: number;
  Admin: boolean;
  [key: string]: string | number | boolean;
}

function ObjectProp(obj: MyObject) {
  for (const prop in obj) {
    console.log(`${prop}: ${obj[prop]}`);
  }
}

const myObject: MyObject = {
  name: 'Adriano',
  age: 34,
  Admin: true
};

ObjectProp(myObject);
