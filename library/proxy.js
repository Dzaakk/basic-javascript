/*
 - digunakan sebagai wakil sebuah daata
 - semua interaksi ke data akan melalui proxy terlebih dahulu
 - bisa melakukan apapun sebelum interaksi dilakukan ke data yang dituju

 # Proxy Handler
 - pembuatan proxy perlu menggunakan handler
 - di dalam handler terdapat function yang dinamakan interceptor
 - digunakan ketika mengambil data atau mengubah data ke target
*/

{
  const target = {};

  const handler = {
    get: function (target, property) {
      console.info(`Access property : ${property}`);
      return target[property];
    },

    set: function (target, property, value) {
      console.info(`Change property ${property}: ${value}`);
      if (value == null) {
        throw new Error("Forbidden!");
      } else {
        target[property] = value;
      }
    },
  };

  const proxy = new Proxy(target, handler);

  proxy.firstName = "Agent";
  proxy.lastName = "A";

  console.info(proxy.firstName);
  console.info(proxy.lastName);
}
