// 1. Declare uma variável usando `var` e atribua-lhe um valor. Registre o valor no console.

var number = 17;
console.log(number);

// 2. Declare uma variável usando `let` e atribua-lhe um valor. Altere o valor e registre-o no console.

let valueOne = "test";
valueOne = "test2";
console.log(valueOne);

// 3. Declare uma constante usando `const` e atribua-lhe um valor. Registre o valor no console.

const valueTwo = "thalia";
console.log(valueTwo);

// 4. Declare uma variável usando `var` dentro de uma função e registre seu valor dentro e fora da função.

var mensagem;

const test4 = () => {
   mensagem = "hello word!";
  console.log(mensagem);
}

test4();
console.log(`Fora da fuction: ${mensagem}`);

// 5. Declare uma variável usando `let` em um loop e registre seu valor dentro e fora do loop.

for (let i = 0; i < 3; i++) {
  console.log("Dentro do loop: " + i);
}

try {
  console.log("Fora do loop: " + i);
} catch (error) {
  console.log("Erro fora do loop: " + error.message);
}

// 6. Declare uma variável usando `const` e tente reatribuir. Capture o erro e registre uma mensagem apropriada.

try {
  const test6 = "hello";
  console.log(`${test6}`);

  test6 = "hello!!";
  console.log(`${test6}`);
} catch (err) {
  console.log("Erro ao reatribuir valor: " + err.message);
}

// 7. Use `let` para declarar uma variável de escopo de bloco dentro de uma instrução `if` e registre seu valor dentro e fora do bloco.

if (true) {
  let test7 = "Eu sou de escopo de bloco dentro da instrução if";
  console.log("Dentro do bloco: " + test7);
}

try {
  console.log("Fora do bloco: " + test7);
} catch (error) {
  console.log("Erro fora do bloco: " + error.message);
}

// 8. Declare uma variável usando `var` no escopo global e sombreie-a dentro de uma função. Registre ambos os valores.

var test8 = 10;

function soma(number) {
  return test8 + number;
}

console.log(soma(40));

// 9. Use `let` e `const` para criar um padrão de módulo simples. Demonstre como a encapsulação funciona nesse padrão.

const calculadoraIMC = (() => {
  let peso = 0;
  let altura = 0;

  const calcularIMC = () => {
    let alturaMetros = altura / 100;
    return peso / (alturaMetros * alturaMetros);
  };

  const setPesoAltura = (novoPeso, novaAltura) => {
    peso = novoPeso;
    altura = novaAltura;
  };

  const getIMC = () => {
    return calcularIMC();
  };

  return {
    setPesoAltura, getIMC
  };
})();

calculadoraIMC.setPesoAltura(60, 161);

let imc = calculadoraIMC.getIMC();

console.log("O seu IMC é: " + imc.toFixed(2)); 

// 10. Crie um fechamento usando `var`, `let` e `const`. Registre as variáveis para demonstrar seu escopo e tempo de vida.

function closVar() {
  var mensagem = "Olá, mundo!";
  function exibirMensagem() {
      console.log(mensagem);
  }
  return exibirMensagem;
}
var minhaFuncaoVar = closVar();
minhaFuncaoVar(); // Saída: "Olá, mundo!"


function closLet() {
  let contador = 0;
  function incrementar() {
      contador++;
      console.log("Contador:", contador);
  }
  return incrementar;
}
let minhaFuncaoLet = closLet();
minhaFuncaoLet(); // Saída: Contador: 1
minhaFuncaoLet(); // Saída: Contador: 2


function closConst() {
  const pi = 3.14;
  function calcularArea(raio) {
      return pi * (raio ** 2);
  }
  return calcularArea;
}
let calcularAreaDoCirculo = closConst();
let area1 = calcularAreaDoCirculo(2);
console.log("Área do círculo com raio 2:", area1); // Saída: Área do círculo com raio 2: 12.56

let area2 = calcularAreaDoCirculo(3);
console.log("Área do círculo com raio 3:", area2); // Saída: Área do círculo com raio 3: 28.26
