{
  <body>
    Agent A<h1>Tittle</h1>
    <p>Paragraph</p>
  </body>;

  const nodes = document.body.childNodes;
  for (const node of nodes) {
    console.info(`${node} : ${node.nodeType}`);
  }
}
