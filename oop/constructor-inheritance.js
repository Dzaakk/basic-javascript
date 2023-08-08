//copying what others do

function Employee(firstName) {
  this.firstName = firstName;
  this.LastName = LastName;
  this.sayHello = function (name) {
    console.info(`Hello ${name}, my name is ${this.firstName}`);
  };
}

function Manager(firstName, LastName) {
  this.LastName = LastName;
  Employee.call(this, firstName);
}

const agentA = new Manager("Agent", "A");
console.info(agentA);
