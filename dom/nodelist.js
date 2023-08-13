{
  <ul id="menu1">
    <li id="first">First</li>
    <li id="second">Second</li>
    <li id="third">Third</li>
  </ul>;

  <ul id="menu2">
    <li id="a">A</li>
    <li id="b">B</li>
    <li id="c">C</li>
  </ul>;

  //script
  const list = document.querySelector("li");
  console.info(list);

  const menu1 = document.getElementById("menu1").childNodes;
  console.info(menu1);

  const menu2 = document.getElementById("menu2").childNodes;
  console.info(menu2);
}

{
  /* live vs static nodelist
     - Live = perubahan yang terjadi pada nodelist akan merubah nodelist yang sama
     - static = perubahan yang terjadi pada nodelist tidak akan merubah nodelist yang sama
    */

  <ul id="menu1">
    <li id="first">First</li>
    <li id="second">Second</li>
    <li id="third">Third</li>
  </ul>;

  <ul id="menu2">
    <li id="a">A</li>
    <li id="b">B</li>
    <li id="c">C</li>
  </ul>;

  <ul id="menu3">
    <li id="d">D</li>
    <li id="e">E</li>
    <li id="f">F</li>
  </ul>;
  // Live
  const menu1 = document.getElementById("menu1");
  const list = menu1.childNodes;

  menu1.appendChild(document.createElement("li"));
  menu1.appendChild(document.createElement("li"));

  console.info(list);

  //static
  const list2 = document.querySelectorAll("li");
  const menu2 = document.getElementById("menu1");

  menu2.appendChild(document.createElement("li"));
  menu2.appendChild(document.createElement("li"));

  console.info(list2);

  // manual add
  let list3 = document.querySelectorAll("li");
  const menu3 = document.getElementById("menu1");

  menu3.appendChild(document.createElement("li"));
  menu3.appendChild(document.createElement("li"));

  console.info(list3);
}
