// 1. Implemente o princípio de responsabilidade única criando uma classe `Usuario` que seja responsável apenas pela manipulação de dados de usuário.

export class Usuario {
  constructor(private nome: string, private email: string, private idade: number) { }

  getName(): string {
    return this.nome;
  }

  setName(nome: string): void {
    this.nome = nome;
  }

  checkInformation(): void {
    console.log(`Informações do Usuário -> Nome: ${this.nome}, Idade: ${this.idade}, E-mail: ${this.email}.`)
  }
}

const usuario = new Usuario('Thalia', 'tguedes@gmail.com', 27);
console.log(usuario.getName());
usuario.setName('Thalia Guedes');
console.log(usuario.getName());
usuario.checkInformation()

// 2. Aplique o princípio da substituição de Liskov implementando uma classe base `Forma` e classes derivadas `Quadrado` e `Retangulo`que mantenham a consistência do comportamento

abstract class Forma {
  constructor(
    protected largura: number,
    protected altura: number
  ) {}

  abstract area(): number;
  abstract perimetro(): number;
}

class Quadrado extends Forma {
  constructor(lado: number) {
    super(lado, lado);
  }

  area(): number {
    return this.largura ** 2;
  }

  perimetro(): number {
    return 4 * this.largura;
  }
}

class Retangulo extends Forma {
  constructor(largura: number, altura: number) {
    super(largura, altura);
  }

  area(): number {
    return this.largura * this.altura;
  }

  perimetro(): number {
    return 2 * (this.largura + this.altura);
  }
}

let forma1: Forma = new Quadrado(5);
console.log(`Área do quadrado: ${forma1.area()}`);
console.log(`Perímetro do quadrado: ${forma1.perimetro()}`);

let forma2: Forma = new Retangulo(4, 8);
console.log(`Área do retângulo: ${forma2.area()}`);
console.log(`Perímetro do retângulo: ${forma2.perimetro()}`);

// 3. Utilize os princípios de segregação de interfaces e inversão de dependência para criar um sistema de pagamento modular,
// onde diferentes métodos de pagamento (cartão, boleto, etc.) podem ser facilmente integrados e substituídos.

//Path:  exercise_typescript/project_payment_system
