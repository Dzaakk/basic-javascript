{
  //symbol
  const firstName = Symbol("firstName");
  const lastName = Symbol("lastName");

  const person = {};
  person[firstName] = "Agent";
  person[lastName] = "A";

  console.info(person);
}

{
  // symbol for
  console.info(Symbol.for("firstName") === Symbol.for("firstName"));

  const person = {};
  person[Symbol.for("firstName")] = "Agent";
  person[Symbol.for("lastName")] = "B";

  console.info(person);
  console.info(person[Symbol.for("firstName")]);
  console.info(person[Symbol.for("lastName")]);
}
