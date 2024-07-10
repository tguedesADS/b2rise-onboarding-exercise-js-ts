//Tipos básicos
let nome: string = 'Thalia'
let idade: number = 27
let adulto: boolean = true
let simbolo: symbol = Symbol('qualquer-symbol')

// Array
let arrayNumber: Array<number> = [1, 2, 3]
let arrayNumber2: number[] = [1, 2, 3]
let arrayStrings: Array<string> = ['a', 'b', 'c']
let arrayStrings2: string[] = ['a', 'b', 'c']

// Objetos
let pessoa: {
  nome: string,
  idade: number,
  adulto?: boolean
} = {
  nome: 'pedro',
  idade: 35,
}

// Funções
function soma(x: number, y: number): number {
  return x + y
}
const soma2: (x: number, y: number) => number = (x, y) => x + y


// Objetos part2
const objetoA: {
  readonly chaveA: string;  //não pode ser alterada
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA:'Outro valor',
  chaveB: 'Valor de B',
}

objetoA.chaveB = 'novo valor B'
objetoA.chaveC = 'novo valor C'
objetoA.chaveD = 123

console.log(objetoA)

// array tuple
const dadosCliente: [number, string] = [1, 'Luiz']

dadosCliente[0] = 10;
dadosCliente[1] = 'Jose'
console.log(dadosCliente)

// Array Readonly
const array1: readonly string[] = ['Ana', 'Paulo']
const array2: ReadonlyArray<string> = ['Maria', 'Joao']

console.log(array1)
console.log(array2)





