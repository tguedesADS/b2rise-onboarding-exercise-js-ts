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



// 3. Utilize os princípios de segregação de interfaces e inversão de dependência para criar um sistema de pagamento modular,
// onde diferentes métodos de pagamento (cartão, boleto, etc.) podem ser facilmente integrados e substituídos.

//Path:  exercise_typescript/project_payment_system
