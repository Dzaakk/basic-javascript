{
  <h1 id="title"></h1>;
  <p id="description"></p>;

  const title = document.getElementById("title");
  title.textContent = "Title";
}

{
  // element property
  <div id="content" class="class content">
    <h1>Title</h1>;<p>Description</p>;
  </div>;

  const content = document.getElementById("content");

  console.info(content.id);
  console.info(content.className);
  console.info(content.tagName);
}

{
  // element method
  <div id="content" class="class content">
    <h1 id="title">Title</h1>;<p id="description">Description</p>;
  </div>;

  document.getElementById("title").remove();
  document.getElementById("description").remove();
}

{
  // create element

  <div id="content" class="class content"></div>;

  const content = document.getElementById("content");

  const title = document.createElement("h1");
  title.textContent = "h1 DOM";
  content.appendChild(title);

    
}
