class Customer {
  firstName;
  lastName;
  balance = 0;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {}
}

const AgentA = new Customer("Agent", "A");
console.info(AgentA);
