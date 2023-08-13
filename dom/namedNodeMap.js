{
  <img id="logo" src="source.com" alt="this logo"></img>;

  const logo = document.getElementById("logo");
  const attributes = logo.attributes;

  for (const attribute of attributes) {
    console.info(`${attribute.name} : ${attribute.value}`);
  }
}
