// 1. Crie uma classe `Person` com as propriedades `name` e `age`. Crie uma instância e registre-a.
// 2. Adicione um método `greet` à classe `Person` que registre uma mensagem de saudação. Chame o método em uma instância.

class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person1 = new Person('thalia', 27);
console.log(person1);
console.log(person1.greet());

// 3. Crie uma classe `Animal` com um construtor que inicialize `type` e `sound`. Crie uma instância e registre-a.
// 4. Adicione um método estático `species` à classe `Animal` que registre uma mensagem. Chame o método.

class Animal {
    constructor(type, sound) {
        this.type = type;
        this.sound = sound;
    }
    static species(){
      return 'This is an animal species ';
    }
}

const dog = new Animal('Dog', 'Auau');
console.log(`Type: ${dog.type}, Sound: ${dog.sound}`);
console.log(Animal.species());

// 5. Crie uma classe `Car` com as propriedades `make` e `model`, e um método `drive`. Crie uma instância e chame o método.

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    drive() {
        console.log(`You are driving a ${this.make} ${this.model}.`);
    }
}

const myCar = new Car('Fiat', 'Corolla');
myCar.drive();

// 6. Estenda a classe `Person` para criar uma classe `Student` com uma propriedade adicional `grade`. Crie uma instância e registre-a.

class Student extends Person {
  constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
  }
}

const userStudent = new Student('Soares', 19, 'logic');
console.log(userStudent);

// 7. Use getters e setters em uma classe para gerenciar uma propriedade privada. Demonstre seu uso.

class Person {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    if (value === '') {
      throw new Error('Name cannot be empty');
    }
    this.#name = value;
  }
}

const personA = new Person('John');
console.log(personA.name);

personA.name = 'Maria';
console.log(personA.name);

try {
  personA.name = '';
} catch (error) {
  console.error(error);
}

// 8. Crie uma classe `Rectangle` com as propriedades `width` e `height`, e um método `area` que retorna a área. Crie uma instância e chame o método.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }
}
const rectangle = new Rectangle(4, 5);

console.log(`The area of the rectangle is ${rectangle.area}`);



// 9. Implemente uma classe `Stack` com os métodos `push`, `pop` e `peek`, e demonstre seu uso.

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.items.at(-1)
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // imprime 3

console.log(stack.pop()); // imprime 3
console.log(stack.pop()); // imprime 2
console.log(stack.peek()); // imprime 1

try {
  stack.pop();
  stack.pop();
  stack.pop();
} catch (error) {
  console.error(error);
}

// 10. Crie uma classe `Employee` com as propriedades `name` e `salary`, e um método `raiseSalary`.
// Estenda-a para criar uma classe `Manager` com uma propriedade adicional `department`. Demonstre o uso de ambas as classes.

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  raiseSalary(percentage) {
    this.salary *= (percentage / 100);
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }
}

const employee1 = new Employee("Joao Silva", 2000);
console.log(`Employee: ${employee1.name}, Salary: ${employee1.salary}`);

employee1.raiseSalary(10);
console.log(`Employee: ${employee1.name}, Salary after raise: ${employee1.salary}`);

const manager1 = new Manager("Jose Santos", 3000, "Marketing");
console.log(`Manager: ${manager1.name}, Salary: ${manager1.salary}, Department: ${manager1.department}`);

manager1.raiseSalary(15);
console.log(`Manager: ${manager1.name}, Salary after raise: ${manager1.salary}, Department: ${manager1.department}`);
