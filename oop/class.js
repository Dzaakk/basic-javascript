class Person {}

const agentA = new Person();
console.info(agentA);

//Class Constructor

class Agent {
  constructor(name) {
    // property
    this.name = name;
  }
  //Method
  sayHello(name) {
    console.info(`Hello ${name}, my name is ${this.name}`);
  }
}

const agentB = new Agent();
console.info(agentB);
console.info(agentB.name);
