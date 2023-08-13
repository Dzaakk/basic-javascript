{
  <ul id="menu">
    <li id="first">First</li>
    <li id="second">Second</li>
    <li id="third">Third</li>
  </ul>;

  const menu = document.getElementById("menu");
  console.info(menu);

  const third = document.getElementById("third");
  console.info(third);
}

{
  // node property
  <ul id="menu">
    <li id="first">First</li>
    <li id="second">Second</li>
    <li id="third">Third</li>
  </ul>;

  const menu = document.getElementById("menu");
  console.info(menu);
  console.info(menu.childNodes);

  const third = document.getElementById("third");
  console.info(third);
  console.info(third.textContent);

  const second = document.getElementById("second");
  console.info(second);
  console.info(second.previousSibling.previousSibling);
  console.info(second.nextSibling);
}

{
  // node method
  <ul id="menu">
    <li id="first">First</li>
    <li id="second">Second</li>
    <li id="third">Third</li>
  </ul>;

  const menu = document.getElementById("menu");
  menu.removeChild(document.getElementById("first"));
  menu.removeChild(document.getElementById("second"));
}
