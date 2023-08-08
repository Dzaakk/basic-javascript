function Person(firstName, LastName) {
  this.firstName = firstName;
  this.LastName = LastName;
  this.sayHello = function (name) {
    console.info(`Hello ${name}, my name is ${this.firstName}`);
  };
}

Person.prototype.sayBye = function () {
  console.info("Good Bye");
};

Person.prototype.run = function () {
  console.info(`${this.firstName} is running`);
};

const AgentA = new Person("Agent", "A");
const AgentB = new Person("Agent", "B");

console.log(agentA);
console.log(AgentB);

agentA.sayBye();
