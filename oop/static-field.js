class Configuration {
  name = "Learn OOP";
  static version = 1.0;
  static author = "D";
}

const config = new Configuration();

Configuration.author = "C";

console.info(config);
console.info(Configuration.version);
console.info(Configuration.author);
