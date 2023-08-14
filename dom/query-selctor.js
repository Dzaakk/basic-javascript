{
  // universal selector
  <p>This is Text</p>;

  const elements = document.querySelectorAll("*");
  console.info(elements);
}

{
  // type selector
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>;

  const list = document.querySelectorAll("li");
  console.info(list);
}

{
  // class selector
  <ul>
    <li class="menuItem">First</li>
    <li>Second</li>
    <li class="menuItem">Third</li>
  </ul>;

  const menuItems = document.querySelectorAll(".menuItem");
  console.info(menuItems);
}

{
  // id selector
  <ul>
    <li class="menuItem">First</li>
    <li id="menu2">Second</li>
    <li class="menuItem">Third</li>
  </ul>;

  const menu = document.querySelectorAll("#menu2");
  console.info(menu);
}

{
  // attribute selector
  <body>
    <div class="classA"></div>
    <div class="classB"></div>
    <div class="classC"></div>
  </body>;

  const list = document.querySelectorAll("[class]");
  console.info(list);
}

{
  // operator at attribute selector
  <body>
    <div class="classA"></div>
    <div class="classB"></div>
    <div class="classC"></div>
  </body>;

  const list = document.querySelectorAll("div[class^=class]");
  console.info(list);
}
