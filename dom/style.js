{
  //   <input type ="button" value="blue"></input>
  //   <input type ="button" value="red"></input>
  //   <input type ="button" value="yellow"></input>
  // <div id= "canvas" style= "width: 500px; height: 500px; background-color: orange"></div> */

  const canvas = document.getElementById("canvas");
  const buttons = document.querySelectorAll("button");

  for (let button of buttons) {
    canvas.onclick = function () {
      canvas.style.backgroundColor = button.getAttribute("value");
    };
  }
}
