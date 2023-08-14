{
  {
    /* <h1 id="text">Click Orange Box</h1>
<div id= "canvas" style= "width: 500px; height: 500px; background-color: orange"></div> */
  }

  const canvas = document.getElementById("canvas");
  const text = document.getElementById("text");

  canvas.onclick = function (event) {
    text.textContent = `You click at (${event.x},${event.y})`;
  };
}
