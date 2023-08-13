{
  <img id="logo" src="source.com" alt="this logo"></img>;

  const logo = document.getElementById("logo");
  const src = logo.getAttributeNode("src");

  console.info(src.name);
  console.info(src.value);
}

{
  // attr value
  <img id="logo" src="source.com" alt="this logo"></img>;

  const logo = document.getElementById("logo");
  const src = logo.getAttribute("src");
  console.info(src);
}

{
  // create attr
  <img id="image"></img>;

  const image = document.getElementById("image");

  //manual
  const src = document.createAttribute("src");
  src.value = "image.com";
  image.setAttributeNode(src);

  //direct
  image.setAttribute("src", "image.com");
}
