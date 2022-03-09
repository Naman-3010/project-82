canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="null";

 var current_y,current_x,last_x,last_y;

 canvas.addEventListener("mousemove", mousemove)



 function mousemove(e){
     current_x=e.clientX-canvas.offsetLeft;
     current_y=e.clientY-canvas.offsetTop;

     if (mouseEvent=="mousedown"){
         ctx.beginPath();
         ctx.strokeStyle=document.getElementById("color_input").value;
         ctx.lineWidth=5;
         ctx.drawingStyle="spray";
         
        
         console.log("last x = " +last_x + "last y = " +last_y);
         ctx.moveTo(last_x,last_y);

         console.log("current x = " +current_x + "current y = " +current_y);
         ctx.lineTo(current_x,current_y);
         ctx.stroke();
         

     }

     last_x=current_x;
     last_y=current_y;

}

canvas.addEventListener("mousedown", mousedown)

function mousedown(e){
  mouseEvent="mousedown"
}

canvas.addEventListener("mouseup", mouseup)

function mouseup(e){
  mouseEvent="mouseup"
}

canvas.addEventListener("mouseleave", mouseleave)

function mouseleave(e){
  mouseEvent="mouseleave"
}

