// 1. Crie uma classe `Pessoa` com propriedades `nome` e `idade`, e um método que retorne uma saudação incluindo essas informações.

// export class Pessoa {
//   public nome: string;
//   public idade: number;

//   constructor(nome: string, idade: number) {
//     this.nome = nome;
//     this.idade = idade;
//   }
//   public saudacao(): string {
//     return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`
//   }
// }

// const pessoa1 = new Pessoa('thalia', 27)
// console.log(pessoa1.saudacao())

// export class Pessoa {
//   constructor(public nome: string, public idade: number) { }

//   public saudacao(): string {
//     return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`
//   }
// }
// const pessoa1 = new Pessoa('thalia', 27)
// console.log(pessoa1.saudacao())

// 2. Implemente uma interface `Animal` com métodos `emitirSom` e `mover`. Crie uma classe `Cachorro` que implemente essa interface.

// interface Animal {
//   emitirSom(): string;
//   mover(): string;
// }

// export class Cachorro implements Animal {
//   constructor(private nome: string) { }

//   emitirSom(): string {
//     return `O ${this.nome} está latindo`;
//   }

//   mover(): string {
//     return `O ${this.nome} está andando`;
//   }
// }

// const meuCachorro = new Cachorro('Bob');
// console.log(meuCachorro.emitirSom());
// console.log(meuCachorro.mover());

// 3. Crie uma hierarquia de classes para representar diferentes tipos de veículos. A classe base `Veiculo` deve ter propriedades e métodos comuns,
// enquanto as classes derivadas `Carro` e `Moto` devem estender `Veiculo` e adicionar funcionalidades específicas.

export class Veiculo {
  constructor(
    readonly marca: string,
    readonly modelo: string,
    readonly ano: number) { }

  resumoVeiculo() { return `O veículo é da marca ${this.marca} e o modelo é ${this.modelo}, ano de fabricação ${this.ano}.` }

  tempoDeUso() {
    const idadeVeiculo = new Date().getFullYear() - this.ano;
    return `O veículo possui ${idadeVeiculo} anos de uso.`
  }
}

class Carro extends Veiculo {
  constructor(
    readonly marca: string,
    readonly modelo: string,
    readonly ano: number,
    readonly numeroPortas: number,
    readonly combustivel: string
  ) { super(marca, modelo, ano) }

  detalhesCarro() {
    let combustivelFlex = this.combustivel;
    if (this.combustivel === 'flex') {
      combustivelFlex = 'gasolina e álcool';
    }
    return `${this.resumoVeiculo()} O carro possui ${this.numeroPortas} portas e é movido a ${combustivelFlex}. ${this.tempoDeUso()}`
  }
}

class Moto extends Veiculo {
  constructor(
    readonly marca: string,
    readonly modelo: string,
    readonly ano: number,
    readonly cilindrada: number,
  ) { super(marca, modelo, ano) }

  detalhesMoto() { return `${this.resumoVeiculo()} A moto possui ${this.cilindrada} cilindradas. ${this.tempoDeUso()}` }
}

const carro1 = new Carro('Fiat', 'Uno', 2014, 4, 'gasolina')
const moto1 = new Moto('Honda', 'Bros', 2016, 160)

console.log(carro1.detalhesCarro())
console.log(moto1.detalhesMoto())
