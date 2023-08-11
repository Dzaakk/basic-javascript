/*
 - digunakan untuk mengeksekusi javascript function
 - tidak memiliki constructor, dan cara penggunaannya tidak dengan membuat object new Reflect
 - menggunakan banyak static method
*/

{
  const person = {};

  Reflect.set(person, "firstName", "Agent");
  Reflect.set(person, "lastName", "A");

  console.info(person);

  console.info(Reflect.get(person, "firstName"));
  console.info(Reflect.get(person, "lastName"));

  console.info(Reflect.has(person, "firstName"));
  console.info(Reflect.has(person, "lastName"));
  console.info(Reflect.has(person, "middleName"));
}
