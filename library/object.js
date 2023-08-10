{
  // Freeze and Seal
  const person = {
    firstName: "Agent",
    lastName: "A",
  };

  // tidak bisa diubah dan tidak bisa dihapus
  Object.freeze(person);

  // keduanya tidak bisa ditambah

  // bisa diubah tetapi tidak bisa dihapus
  Object.seal(person);
  person.firstName = "Boss";
  delete person.lastName;

  console.info(persons);
}

{
  // Object Assign

  const target = {
    firstName: "Agent",
  };
  const source = {
    lastName: "B",
  };

  Object.assign(target, source);
  console.info(target);
  console.info(source);
}

{
  // Object property name & value

  const person = {
    firstName: "Agent",
    lastName: "C",
  };

  console.info(Object.values(person));
  console.info(Object.getOwnPropertyNames(person));
}
