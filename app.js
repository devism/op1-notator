var box;
var split;
var gridWrapper = document.getElementById('gridWrapper');
var whatColor = 'rgb(89, 179, 239)';


////////////////////////////////////////
///  makes window not move - ios
///////////////////////////////////////
var xStart, yStart = 0;

document.addEventListener('touchstart',function(e) {
  xStart = e.touches[0].screenX;
  yStart = e.touches[0].screenY;
});

document.addEventListener('touchmove',function(e) {
  var xMovement = Math.abs(e.touches[0].screenX - xStart);
  var yMovement = Math.abs(e.touches[0].screenY - yStart);
  if((yMovement * 3) > xMovement) {
      e.preventDefault();
  }
}); 


////////////////////////////////////

for(var i = 1; i < 65; i++){

  box = document.createElement('div');
  box.innerHTML = i;

  box.addEventListener('click', boxOn);
  box.classList.add('box');
  gridWrapper.appendChild(box);
  
  if(i % 8 === 0){
    split = document.createElement('div');
    split.classList.add('split');
    
    insertAfter(box,split);
    
  }

}

function changeColor(which_box){

  var modes = document.getElementsByClassName('mode');
  
  for(var i = 0; i < modes.length; i++){
      modes[i].style.border = '1px solid';
  }

  which_box.style.border = "5px solid";
 
  whatColor = which_box.style.backgroundColor;
  console.log(whatColor);
}

function boxOn(){
   
    if(this.style.backgroundColor == whatColor){
      this.style.backgroundColor = '#9E9E9E';
    } else {
      this.style.backgroundColor = whatColor;
    }
    
}
 var angle = 0;
function rotate(){
  angle-=360;
  document.getElementById('reset').style.transform = "rotate(" + angle + "deg)";

  var boxes = document.getElementsByClassName('box');
  
  for(var i = 0; i<boxes.length; i++){
      boxes[i].style.backgroundColor = '#9E9E9E';
  }

}


function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
  


