var box= document.querySelector("#box")

box.addEventListener("click", onBoxClick)

function onBoxClick(){
  var x = evt.movementX;
  var y = evt.movementY;

  console.log (x,y);
  
  box.style.left = x+"px";
  box.style.right = y+"px";

}
