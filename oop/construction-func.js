function Person(firstName, LastName) {
  this.firstName = firstName;
  this.LastName = LastName;
  this.sayHello = function (name) {
    console.info(`Hello ${name}, my name is ${this.firstName}`);
  };
}

const user1 = new Person("User1", "user1");
user1.sayHello("User2");

console.log(user1s);
