//Tipos Básicos*
// let nome: string = 'Thalia'
// let idade: number = 27
// let adulto: boolean = true
// let simbolo: symbol = Symbol('qualquer-symbol')

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

// Classes*
// export class Empresa {
//   public readonly nome: string;
//   private readonly colaboradores: Colaborador[] = [];
//   protected readonly cnpj: string;

//   constructor(nome: string, cnpj: string) {
//     this.nome = nome;
//     this.cnpj = cnpj
//   }
//   addColaborador(colaborador: Colaborador): void {
//     this.colaboradores.push(colaborador)
//   }

//   mostrarColaboradores(): void {
//     for (const colaborador of this.colaboradores){
//       console.log(colaborador)
//     }
//   }
// }

// export class Colaborador {
//   constructor(public readonly nome: string, public readonly sobrenome: string) { }
// }

// const empresa1 = new Empresa('Udemy', '00.000.000/0001-11');
// const colaborador1 = new Colaborador('Thalia', 'Guedes')
// const colaborador2 = new Colaborador('Pedro', 'Silva')
// const colaborador3 = new Colaborador('Hariane', 'Vasconcelos')
// empresa1.addColaborador(colaborador1)
// empresa1.addColaborador(colaborador2)
// empresa1.addColaborador(colaborador3)


// console.log(empresa1)
// empresa1.mostrarColaboradores()

// Herança*
// export class Pessoa {
//   constructor(
//     public nome: string,
//     public sobrenome: string,
//     private idade: number,
//     protected cpf: string) { }

//     getIdade(): number{
//       return this.idade
//     }
//     getCpf(): string {
//       return this.cpf
//     }
//     getNomCompleto(): string {
//       return this.nome+ ' ' + this.sobrenome
//     }
// }
// export class Aluno extends Pessoa{}

// const aluno = new Aluno('Thalia', 'Guedes', 27, '000.000.000-00')
// console.log(aluno)

// Classe Abstract
// export abstract class Personagem {
//   constructor(
//     protected nome: string,
//     protected ataque: number,
//     protected vida: number
//   ) { }

//   atacar(personagem: Personagem): void {
//     this.frase()
//     personagem.perderVida(this.ataque)
//   }

//   perderVida(forcaAtaque: number): void {
//     this.vida -= forcaAtaque
//     console.log(`${this.nome} agora tem ${this.vida} de vida...`)
//   }

//   abstract frase():void;
// }

// export class Guerreira extends Personagem {
//   frase():void{
//     console.log('Aiyiyiyiyiyiyi!')
//   }
// }
// export class Monstro extends Personagem {
//   frase():void{
//     console.log('hwooo-ooo-ooo!')
//   }
// }

// const play1 = new Guerreira('Xena', 200, 1000)
// const play2 = new Monstro('Fênix', 150, 1000)

// play1.atacar(play2)
// play1.atacar(play2)
// play1.atacar(play2)
// play1.atacar(play2)

// typeof e keyof*
// type CoresObj = typeof coresObj;
// type CoresChaves = keyof CoresObj;

// const coresObj = {
//   vermelho: 'red',
//   verde: 'green',
//   azul: 'blue'
// }

// function traduzirCor(cor: CoresChaves, cores: CoresObj){
//   return cores[cor]
// }

// console.log(traduzirCor('verde', coresObj))

// Generic - Types *
//Record (key, value)
// const obj1: Record<string, number> = {
//   valor1: 23,
//   valor2: 34,
//   valor3: 56
// }


// type PessoaProtocol = {
//   nome?: string,
//   sobrenome?: string,
//   idade?: number
// }

//Required (retira o opcional)
// type PessoaRequired = Required<PessoaProtocol>;

//Partial (insere o opcional)
// type PessoaPartial = Partial<PessoaRequired>;

//Readonly (retira o opcional e o tipo não pode ser alterado)
// type PessoaReadonly = Readonly<PessoaRequired>;

//Pick (retira o opcional e escolhe propriedades especificas)
// type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

//Extract e Exclude

// type ABC = 'A' | 'B' |'C'
// type CDE = 'C' | 'D' | 'E'

//Exclude (retira a igualdade <T, comparado a>)
// type TipoExclude = Exclude<ABC, CDE>;

//Extract (deixa apenas a igualdade <T, comparado a>)
// type TipoExtract = Extract<ABC, CDE>

// Decorator Class*

