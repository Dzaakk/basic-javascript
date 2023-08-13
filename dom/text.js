{
  // get text node
  <body>Text in Body</body>;

  const text = document.body.firstChild;

  console.info(text.wholeText);
}

{
  // create text node

  <body></body>;

  const text = document.createTextNode("Add Text");
  document.body.appendChild(text);
}
