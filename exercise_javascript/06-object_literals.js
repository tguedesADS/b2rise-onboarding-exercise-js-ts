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

const registro = {
  [`data_${new Date().toLocaleDateString()}`]: {
    hora: new Date().toLocaleTimeString(),
    mensagem: 'Registro criado com sucesso!'
  }
};

console.log(registro);

// 7. Crie um literal de objeto com uma propriedade que seja um array. Registre o objeto.

const pedido = {
  
}

// 8. Crie um literal de objeto com um objeto aninhado e registre-o.

// 9. Escreva uma função que receba um literal de objeto e retorne um novo objeto com as chaves e valores invertidos.

// 10. Crie um literal de objeto com propriedades getter e setter e demonstre seu uso.
