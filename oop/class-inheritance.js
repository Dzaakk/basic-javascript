class Employee {
  sayHello(name) {
    console.info(`Hello ${name}, my name is employee ${this.name}`);
  }
}

//manager will have anything that employee have
class Manager extends Employee {
  sayHello(name) {
    console.info(`Hello ${name}, my name is manager ${this.name}`);
  }
}

const agentA = new Employee();
agentA.name = "Agent A";
agentA.sayHello("agent B");

const agentB = new Manager();
agentB.name = "Agent B";
agentB.sayHello("agent A");

console.info(agentA);
console.info(agentB);
