class Employee {}

class Manager extends Employee {}

const AgentA = new Employee();
const AgentB = new Manager();

console.info(typeof AgentA);
console.info(typeof AgentB);

console.info(AgentA instanceof Employee); // true
console.info(AgentB instanceof Employee); // false

console.info(AgentA instanceof Manager); // true
console.info(AgentB instanceof Manager); // true
