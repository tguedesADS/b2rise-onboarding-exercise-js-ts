// 1. Utilize o tipo `union` para criar uma variável que pode ser uma string ou um número.

let test1: string | number;

test1 = 'hello'
test1 = 22


// 2. Defina um tipo `alias` para um objeto que represente um ponto no espaço 2D, com propriedades `x` e `y`.
// Escreva uma função que calcule a distância entre dois pontos.

type Ponto2D = {
  x: number;
  y: number;
};

function distanciaEntrePontos(p1: Ponto2D, p2: Ponto2D): number {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

const ponto1: Ponto2D = { x: 10, y: 20 };
const ponto2: Ponto2D = { x: 30, y: 40 };

const distancia = distanciaEntrePontos(ponto1, ponto2);
console.log(`A distância entre os pontos é: ${distancia.toFixed(2)}`);


// 3. Crie um tipo `mapped` que transforme todas as propriedades de um objeto em opcionais.
// Utilize esse tipo para definir uma função que atualize parcialmente um objeto, aplicando somente as mudanças fornecidas.


type Mapped<T> = {
  [K in keyof T]?: T[K] | undefined;
};

interface User {
  name: string;
  age: number;
  address: string;
}

// type PartialUser = Mapped<User>;
// Equivale a:
// type PartialUser = {
//   name: string | undefined;
//   age: number | undefined;
//   address: string | undefined;
// };

function updatePartial<T>(obj: T, updates: Mapped<T>): T {
  return {...obj,...updates };
}

const user: User = {
  name: 'John Doe',
  age: 30,
  address: 'Rua ABC, 123',
};

const updatedUser = updatePartial(user, {
  address: 'Rua DEF, 456',
});

console.log(updatedUser);
