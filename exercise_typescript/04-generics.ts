// 1. Crie uma função genérica que receba um array de elementos e retorne o primeiro elemento.
const arr = [10, 20, 30, 40]

function getFirstElement<T>(arr: T[]): T | undefined {
  if (arr.length > 0) {
    return arr[0];
  }
}

const result = getFirstElement(arr);
console.log(result);

//   2. Implemente uma classe genérica `Stack` com métodos para adicionar um elemento ao topo,
//  remover o elemento do topo e verificar se a pilha está vazia.

export class Stack<T> {
  private elements: T[] = [];

  push(element: T): void {
    this.elements.push(element);
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.elements.pop();
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }
}

const stack = new Stack<number>();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop()); // 30
console.log(stack.pop()); // 20
console.log(stack.isEmpty()); // false
console.log(stack.pop()); // 10
console.log(stack.isEmpty()); // true


//   3. Crie uma função genérica que receba um objeto e um array de chaves. A função deve retornar
//  um novo objeto contendo apenas as propriedades especificadas pelas chaves.
function pickProperties<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const newObj: Partial<T> = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj as Pick<T, K>
}

const person = {
  name: 'Otavio',
  age: 32,
  address: 'Rua Maria Brasil, 323'
}

const keys: Array<keyof typeof person> = ['name', 'age']
console.log(pickProperties(person, keys));
