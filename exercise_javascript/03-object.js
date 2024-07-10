// 1. Crie um objeto com as propriedades `name` e `age` e registre-o no console.
// 2. Acesse e registre o valor da propriedade `name` de um objeto.
// 3. Adicione uma nova propriedade `address` a um objeto existente e registre o objeto atualizado.
// 4. Exclua a propriedade `age` de um objeto e registre o objeto atualizado.

const person = {
  name: "Thalia",
  age: 27,
};

const nameperson = person.name;
console.log(nameperson);

// person.name = 'Pedro'
// console.log(person.name)

person.address = "Rua Brasil";
console.log(person);

const deleteAge = delete person.age;
console.log(person);

// 5. Itere sobre as propriedades de um objeto usando `for...in` e registre cada par chave-valor.

const products = {
  item: "cadeira",
  price: 30,
  quantity: 6,
  color: "azul",
};

for (const key in products) {
  // if (Object.hasOwnProperty.call(products, key)) {}
    console.log(`${key}: ${products[key]}`);
  
}
// 6. Crie um método dentro de um objeto que registre uma mensagem de saudação. Chame o método.

const client = {
  name: "Pedro",
  salutation: () => `Olá, meu nome é ${client.name}`,
};
console.log(client.salutation()); // Output: "Olá, meu nome é Pedro"

const client2 = {
  name: "Maria",
  salutation: ({ name }) => `Olá, meu nome é ${name}`,
};

console.log(client2.salutation(client2)); // Output: "Olá, meu nome é Maria"

// 7. Use `Object.keys` para registrar todas as chaves de um objeto.
// 8. Use `Object.values` para registrar todos os valores de um objeto.

const registro = {
  aluno: "Ana",
  address: "Rua Sobral",
  matriculado: true,
  turma: "203B",
  semestre: 4,
};

Object.keys(registro).forEach((key) => console.log(key));
Object.values(registro).forEach((value) => console.log(value));

// 9. Crie uma função que clone um objeto sem usar `Object.assign` ou operador de espalhamento.

const original = {
  A: 1,
  B: 8,
  C: {
    D: 10,
    E: 21,
  },
};

const cloneObj = (obj) => JSON.parse(JSON.stringify(obj));

const cloned = cloneObj(original);

console.log("Original: ", original);
console.log("Cópia: ", cloned);

cloned.A = 30;
cloned.D = 15;

console.log("Cópia modificada: ", cloned);

// 10. Escreva uma função que mescle profundamente dois objetos, lidando com propriedades aninhadas.

function mesclar(obj1, obj2) {
  const newObj = { ...obj1 };
  for (const key in obj2) {
    if (typeof obj2[key] === "object" && obj2[key] !== null) {
      Object.assign(newObj[key], obj2[key]);
    } else {
      newObj[key] = obj2[key];
    }
  }
  return newObj;
}
const obj1 = { a: 1, b: { c: 2, d: 3 } };
const obj2 = { b: { d: 4, e: 5 }, f: 6 };

const result = mesclar(obj1, obj2);

console.log(result);
// Output:
// { a: 1, b: { c: 2, d: 4, e: 5 }, f: 6 }
