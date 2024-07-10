
# Exercícios de Codificação

## var, let, const

### Fácil

1. Declare uma variável usando `var` e atribua-lhe um valor. Registre o valor no console.
2. Declare uma variável usando `let` e atribua-lhe um valor. Altere o valor e registre-o no console.
3. Declare uma constante usando `const` e atribua-lhe um valor. Registre o valor no console.
4. Declare uma variável usando `var` dentro de uma função e registre seu valor dentro e fora da função.

### Intermediário

5. Declare uma variável usando `let` em um loop e registre seu valor dentro e fora do loop.
6. Declare uma variável usando `const` e tente reatribuir. Capture o erro e registre uma mensagem apropriada.
7. Use `let` para declarar uma variável de escopo de bloco dentro de uma instrução `if` e registre seu valor dentro e fora do bloco.
8. Declare uma variável usando `var` no escopo global e sombreie-a dentro de uma função. Registre ambos os valores.

### Difícil

9. Use `let` e `const` para criar um padrão de módulo simples. Demonstre como a encapsulação funciona nesse padrão.
10. Crie um fechamento usando `var`, `let` e `const`. Registre as variáveis para demonstrar seu escopo e tempo de vida.

## Array

### Fácil

1. Crie um array com 5 elementos e registre-o no console.
2. Adicione um elemento ao final de um array usando `push` e registre o array atualizado.
3. Remova o último elemento de um array usando `pop` e registre o array atualizado.
4. Acesse e registre os primeiros e últimos elementos de um array.

### Intermediário

5. Itere sobre um array usando `forEach` e registre cada elemento.
6. Use `map` para criar um novo array com cada elemento ao quadrado. Registre o novo array.
7. Filtre um array para incluir apenas números pares. Registre o array filtrado.
8. Use `reduce` para somar todos os elementos de um array. Registre o resultado.

### Difícil

9. Crie uma função que receba um array e retorne um novo array com elementos únicos. Use `Set` e `filter`.
10. Escreva uma função para achatar um array aninhado (profundidade de 2). Por exemplo, `[[1, 2], [3, 4]]` se torna `[1, 2, 3, 4]`.

## Object

### Fácil

1. Crie um objeto com as propriedades `name` e `age` e registre-o no console.
2. Acesse e registre o valor da propriedade `name` de um objeto.
3. Adicione uma nova propriedade `address` a um objeto existente e registre o objeto atualizado.
4. Exclua a propriedade `age` de um objeto e registre o objeto atualizado.

### Intermediário

5. Itere sobre as propriedades de um objeto usando `for...in` e registre cada par chave-valor.
6. Crie um método dentro de um objeto que registre uma mensagem de saudação. Chame o método.
7. Use `Object.keys` para registrar todas as chaves de um objeto.
8. Use `Object.values` para registrar todos os valores de um objeto.

### Difícil

9. Crie uma função que clone um objeto sem usar `Object.assign` ou operador de espalhamento.
10. Escreva uma função que mescle profundamente dois objetos, lidando com propriedades aninhadas.

## Condições if, incluindo ternário

### Fácil

1. Escreva uma instrução `if` que verifique se um número é positivo e registre uma mensagem de acordo.
2. Escreva uma instrução `if-else` que verifique se um número é par ou ímpar e registre uma mensagem.
3. Use o operador ternário para verificar se uma string está vazia e registrar uma mensagem.
4. Escreva uma instrução `if` que verifique se uma variável é `null` ou `undefined` e registre uma mensagem.

### Intermediário

5. Escreva uma instrução `if-else if-else` para verificar se um número é positivo, negativo ou zero.
6. Use instruções `if` aninhadas para verificar se um número está entre 10 e 20, e se é par.
7. Use o operador ternário para registrar mensagens diferentes com base no comprimento de um array.
8. Escreva uma instrução `if` que verifique se um objeto possui uma propriedade específica e registre uma mensagem.

### Difícil

9. Escreva uma função que receba um número e retorne uma mensagem com base em condições complexas usando `if-else` aninhado e operadores ternários.
10. Crie uma função que use múltiplos operadores ternários para retornar valores diferentes com base em várias condições.

## Condições switch

### Fácil

1. Escreva uma instrução `switch` que registre uma mensagem com base no valor de uma variável (por exemplo, "vermelho", "azul", "verde").
2. Use uma instrução `switch` para registrar o número de dias em um mês, dado o nome do mês.
3. Escreva uma instrução `switch` que verifique um número e registre se é 1, 2 ou 3.
4. Use uma instrução `switch` para registrar uma mensagem com base no dia da semana.

### Intermediário

5. Escreva uma instrução `switch` com um caso `default` que registre uma mensagem para um valor desconhecido.
6. Use uma instrução `switch` para executar funções diferentes com base em um valor de string.
7. Escreva uma instrução `switch` que verifique o valor de uma variável e registre mensagens diferentes para diferentes intervalos (por exemplo, 0-10, 11-20).
8. Implemente uma instrução `switch` que trate vários casos com a mesma lógica.

### Difícil

9. Crie uma função que use uma instrução `switch` para categorizar um número em diferentes intervalos e retornar uma mensagem.
10. Escreva uma instrução `switch` que trate de instruções `switch` aninhadas para tomada de decisão complexa.

## Object Literals

### Fácil

1. Crie um literal de objeto com as propriedades `name`, `age` e `city`. Registre-o no console.
2. Acesse uma propriedade de um literal de objeto usando notação de ponto e registre-a.
3. Acesse uma propriedade de um literal de objeto usando notação de colchetes e registre-a.
4. Adicione uma nova propriedade a um literal de objeto existente e registre o objeto atualizado.

### Intermediário

5. Crie um literal de objeto com um método que registre uma mensagem de saudação. Chame o método.
6. Use nomes de propriedades computadas para criar um literal de objeto e registrá-lo.
7. Crie um literal de objeto com uma propriedade que seja um array. Registre o objeto.
8. Crie um literal de objeto com um objeto aninhado e registre-o.

### Difícil

9. Escreva uma função que receba um literal de objeto e retorne um novo objeto com as chaves e valores invertidos.
10. Crie um literal de objeto com propriedades getter e setter e demonstre seu uso.

## POO (Programação Orientada a Objetos)

### Fácil

1. Crie uma classe `Person` com as propriedades `name` e `age`. Crie uma instância e registre-a.
2. Adicione um método `greet` à classe `Person` que registre uma mensagem de saudação. Chame o método em uma instância.
3. Crie uma classe `Animal` com um construtor que inicialize `type` e `sound`. Crie uma instância e registre-a.
4. Adicione um método estático `species` à classe `Animal` que registre uma mensagem. Chame o método.

### Intermediário

5. Crie uma classe `Car` com as propriedades `make` e `model`, e um método `drive`. Crie uma instância e chame o método.
6. Estenda a classe `Person` para criar uma classe `Student` com uma propriedade adicional `grade`. Crie uma instância e registre-a.
7. Use getters e setters em uma classe para gerenciar uma propriedade privada. Demonstre seu uso.
8. Crie uma classe `Rectangle` com as propriedades `width` e `height`, e um método `area` que retorna a área. Crie uma instância e chame o método.

### Difícil

9. Implemente uma classe `Stack` com os métodos `push`, `pop` e `peek`, e demonstre seu uso.
10. Crie uma classe `Employee` com as propriedades `name` e `salary`, e um método `raiseSalary`. Estenda-a para criar uma classe `Manager` com uma propriedade adicional `department`. Demonstre o uso de ambas as classes.
