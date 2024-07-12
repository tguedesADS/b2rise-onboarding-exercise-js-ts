// 1. Crie um literal de objeto com as propriedades `name`, `age` e `city`. Registre-o no console.
// 2. Acesse uma propriedade de um literal de objeto usando notação de ponto e registre-a.
// 3. Acesse uma propriedade de um literal de objeto usando notação de colchetes e registre-a.
// 4. Adicione uma nova propriedade a um literal de objeto existente e registre o objeto atualizado.

const person = {
    name: 'Maria',
    age: 25,
    city: 'Fortaleza',
};
console.log(person);

const userName = person.name;
console.log(userName);

const userCity = person['city'];
console.log(userCity)

person.occupation = 'Secretária'
console.log(person)

// 5. Crie um literal de objeto com um método que registre uma mensagem de saudação. Chame o método.

const client = {
  nome: 'Joao',
  msg(){
    console.log(`Olá, ${this.nome}. Seja bem vindo!`)
  }
}
client.msg()

// 6. Use nomes de propriedades computadas para criar um literal de objeto e registrá-lo.

const test6 = {
  [`data_${new Date().toLocaleDateString()}`]: {
    hour: new Date().toLocaleTimeString(),
    message: 'Registro criado com sucesso!'
  }
};

console.log(test6);

// 7. Crie um literal de objeto com uma propriedade que seja um array. Registre o objeto.

const delivery = {
  client: 'Felipe',
  order: '01B3',
  price: 31.50,
  address: ['Rua Sobral, 23.', 'Rua Caetano, 40.', 'Rua Sossego, 900.']
}
console.log(delivery.address)
console.log(delivery.address[0]);
console.log(delivery['address'][1]);


// 8. Crie um literal de objeto com um objeto aninhado e registre-o.

const test8 = {
  nome: 'Silva',
  idade: 23,
  endereco: {
    rua: 'Rua dos Pinheiros',
    numero: 123,
    bairro: 'Centro',
    cidade: 'Fortaleza',
    estado: 'CE'
  }
};
const test8City = test8.endereco.cidade
console.log(test8)
console.log(test8City)

// 9. Escreva uma função que receba um literal de objeto e retorne um novo objeto com as chaves e valores invertidos.
/*
const teste = [
  ['a', 1],
  ['b', 2],
  ['c', 3]
]
console.log(Object.fromEntries(teste)) // { a: 1, b: 2, c: 3 }
console.log(Object.entries(teste))//[ [ '0', [ 'a', 1 ] ], [ '1', [ 'b', 2 ] ], [ '2', [ 'c', 3 ] ] ]
*/

const order = {
  blusa: 32,
  sapato: 22,
  camiseta: 10,
}

function inverterObjeto(obj) {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
}

console.log(inverterObjeto(order))

// 10. Crie um literal de objeto com propriedades getter e setter e demonstre seu uso.

const matricula = {
  aluno: '',
  disciplina: 'Python e IA',
  sala: 201,

  get insertAluno(){
    return this.aluno
  },
  set insertAluno(value){
    if(value === ''){
      throw new Error('O campo "aluno" não pode ser vazio.')
    }
    this.aluno = value
  }
}

matricula.insertAluno = 'Paulo'
console.log(matricula.insertAluno)

// try {
//   matricula.insertAluno = '';
// } catch (e) {
//   console.error(e);
// }
