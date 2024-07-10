// 1. Crie um array com 5 elementos e registre-o no console.

const arrayNumber = [1, 2, 3, 4, 5];
console.log(arrayNumber);

// 2. Adicione um elemento ao final de um array usando `push` e registre o array atualizado.

const list = ["banana", "uva", "manga"];
list.push("goiaba");

console.log(list);

// 3. Remova o último elemento de um array usando `pop` e registre o array atualizado.

const listNumber = [10, 20, 30, 40, 50];
listNumber.pop();

console.log(listNumber);

// 4. Acesse e registre os primeiros e últimos elementos de um array.

const users = ["Maria", "Pedro", "Lucas", "Ana", "Gabriel", "Alice"];

const userVip = users.slice(0, 2);
const userKing = users.slice(users.length - 2);

console.log("Os dois primeiros são usuários Vips:", userVip);
console.log("Os dois últimos são usuários Kings", userKing);

// 5. Itere sobre um array usando `forEach` e registre cada elemento.

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
num.forEach((e) => {
  console.log(e);
});

// 6. Use `map` para criar um novo array com cada elemento ao quadrado. Registre o novo array.

const test6 = [2, 5, 8, 3, 11, 14, 10];
const numberSquared = test6.map((value) => value ** 2);

console.log(numberSquared);

// 7. Filtre um array para incluir apenas números pares. Registre o array filtrado.

const test7 = [2, 5, 8, 3, 11, 14, 10];
const numberEven = test7.filter((value) => value % 2 === 0);

console.log(numberEven);

// 8. Use `reduce` para somar todos os elementos de um array. Registre o resultado.

const test8 = [1, 2, 3, 4, 5];
const total = test8.reduce((acc, value) => {
  return acc + value;
}, 0);

console.log("A soma de todos os elementos do array é:", total);

// 9. Crie uma função que receba um array e retorne um novo array com elementos únicos. Use `Set` e `filter`.

// function arrayUnicos(array) {
//     const conjunto = new Set(array);
    
//     return array.filter((e) => {
//         return conjunto.has(e) && conjunto.delete(e);
//     });
// }

// const meuArray = [1, 2, 2, 3, 4, 3, 5, 1, 6];
// const arrayUnico = arrayUnicos(meuArray);

// console.log(arrayUnico);

function semDup(array) {
  const conjunto = new Set();

  return array.filter((e) => {
    const itens = JSON.stringify(e); 
    return conjunto.has(itens) ? false : (conjunto.add(itens), true)
  });
}

const meuArray = [
  { id: 1, name: "Pedro" },
  { id: 2, name: "Daniela" },
  { id: 1, name: "Pedro" },
  { id: 3, name: "Eduardo" },
  { id: 2, name: "Daniela" },
];

console.log(semDup(meuArray));

// 10. Escreva uma função para achatar um array aninhado (profundidade de 2). Por exemplo, `[[1, 2], [3, 4]]` se torna `[1, 2, 3, 4]`.

// function achatarArray(array) {
//     return array.reduce((acc, cur) => {
//         return  acc.concat(cur);
//     }, []);
// }

// const arrayAninhado = [[1, 2], [3, 4]];
// const arrayAchatado = achatarArray(arrayAninhado);

// console.log(arrayAchatado); 

const arrayAnin = [2, [4, [5]]]
const arrayFlat = arrayAnin.flat(2)
console.log(arrayFlat)

const arrayAni2 = [3,[1,[4,[5,[8,[9,[10],11],],15],17]]]
const arrayFlat2 = arrayAni2.flat(Infinity)
console.log(arrayFlat2)