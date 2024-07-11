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

export class Pessoa {
  constructor(public nome: string, public idade: number) { }

  public saudacao(): string {
    return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`
  }
}
const pessoa1 = new Pessoa('thalia', 27)
console.log(pessoa1.saudacao())

// 2. Implemente uma interface `Animal` com métodos `emitirSom` e `mover`. Crie uma classe `Cachorro` que implemente essa interface.

interface Animal {
  emitirSom(): string;
  mover(): string;
}

export class Cachorro implements Animal {
  constructor(private nome: string) {}

  emitirSom(): string {
    return `O ${this.nome} está latindo`;
  }

  mover(): string {
    return `O ${this.nome} está andando`;
  }
}

const meuCachorro = new Cachorro('Bob');
console.log(meuCachorro.emitirSom());
console.log(meuCachorro.mover());

// 3. Crie uma hierarquia de classes para representar diferentes tipos de veículos. A classe base `Veiculo` deve ter propriedades e métodos comuns,
// enquanto as classes derivadas `Carro` e `Moto` devem estender `Veiculo` e adicionar funcionalidades específicas.
