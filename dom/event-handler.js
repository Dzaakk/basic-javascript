{
  // event target
  <input id="clickMe" type="button" value="Click Me!"></input>;

  const button = document.getElementById("clickMe");

  button.addEventListener("click", function () {
    button.setAttribute("value", "You Already Click Me!");
  });
  button.addEventListener("click", function () {
    console.log("Done!");
  });
}
{
  // global event handler
  <input id="clickMe" type="button" value="Click Me!"></input>;

  const button = document.getElementById("clickMe");
  button.onclick = function () {
    button.setAttribute("value", "Done!");
    console.log("Done!!");
  };
}
