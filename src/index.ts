//Tipos Básicos*
// let nome: string = 'Thalia'
// let idade: number = 27
// let adulto: boolean = true
// let simbolo: symbol = Symbol('qualquer-symbol')

import { PassThrough } from "stream";

// Array*
// let arrayNumber: Array<number> = [1, 2, 3]
// let arrayNumber2: number[] = [1, 2, 3]
// let arrayStrings: Array<string> = ['a', 'b', 'c']
// let arrayStrings2: string[] = ['a', 'b', 'c']

// Objetos*
// let pessoa: {
//   nome: string,
//   idade: number,
//   adulto?: boolean
// } = {
//   nome: 'pedro',
//   idade: 35,
// }

// Funções*
// function soma(x: number, y: number): number {
//   return x + y
// }
// const soma2: (x: number, y: number) => number = (x, y) => x + y


// Objetos part2*
// const objetoA: {
//   readonly chaveA: string;  //não pode ser alterada
//   chaveB: string;
//   chaveC?: string;
//   [key: string]: unknown;
// } = {
//   chaveA:'Outro valor',
//   chaveB: 'Valor de B',
// }

// objetoA.chaveB = 'novo valor B'
// objetoA.chaveC = 'novo valor C'
// objetoA.chaveD = 123

// console.log(objetoA)

// Array Tuple*
// const dadosCliente: [number, string] = [1, 'Luiz']

// dadosCliente[0] = 10;
// dadosCliente[1] = 'Jose'
// console.log(dadosCliente)

// Array Readonly
// const array1: readonly string[] = ['Ana', 'Paulo']
// const array2: ReadonlyArray<string> = ['Maria', 'Joao']

// console.log(array1)
// console.log(array2)

// Type Alias*
// type Idade = number;
// type Pessoa = {
//   nome: string;
//   idade: Idade;
//   salario: number;
//   corFavorita?: string;
// }
// type CorRGB = 'Vermelho' | "Verde" | "Azul";
// type CorCMYL = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
// type corFavorita = CorRGB | CorCMYL;

// const pessoa: Pessoa = {
//   nome: 'Paula',
//   idade: 29,
//   salario: 2.000
// }

// export function setCorFavorita(pessoa: Pessoa, cor: corFavorita): Pessoa {
//   return {...pessoa, corFavorita: cor}
// }

// console.log(setCorFavorita(pessoa, 'Vermelho'))

// Types Intersection*
//type Intersecao = AB & AC & AD;
// type Temnome = { nome: string };
// type TemSobrenome = { sobrenome: string };
// type TemIdade = { idade: number };
// type Person = Temnome & TemSobrenome &  TemIdade;

// const pessoa: Person = {
//   nome: 'Lucas',
//   sobrenome: 'Silva',
//   idade: 32,
// }
// console.log(pessoa)

// Structual Typing*
// type VerifyUserFn = (user: User, sentValue: User) => boolean
// type User = { username: string, password: string}

// const verifyUser: VerifyUserFn = (user, sentValue) => {
//   return (
//     user.username === sentValue.username && user.password === sentValue.password
//   );
// }

// const bdUser = {username: 'thiago', password: '1234'}
// const sentUser = {username: 'thiago', password: '1234'}
// const loggedIn = verifyUser(bdUser, sentUser)

// console.log(loggedIn)

// This em Funções*
// function funcao(this: Date, argumento1: string): void {
//   console.log(this)
//   console.log(argumento1)
// }

// funcao.call(new Date(), 'Hoje')
// funcao.apply(new Date(), ['Hoje'])



