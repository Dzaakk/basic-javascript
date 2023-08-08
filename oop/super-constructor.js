class Employee {
  constructor(firstName) {
    this.firstName = firstName;
  }
  sayHello(name) {
    console.info(`Hello ${name}, my name is employee ${this.name}`);
  }
}

//manager will have anything that employee have
class Manager extends Employee {
  constructor(firstName, lastName) {
    super(firstName);
    this.lastName = lastName;
  }
  sayHello(name) {
    console.info(`Hello ${name}, my name is manager ${this.name}`);
  }
}

const agentA = new Employee("Agent A");
agentA.name = "Agent A";
agentA.sayHello("agent B");

const agentB = new Manager("Agent", "B");
agentB.name = "Agent B";
agentB.sayHello("agent A");

console.info(agentA);
console.info(agentB);
