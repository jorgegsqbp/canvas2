var cuadrote = document.getElementById("cuadro");
var cuad = cuadrote.getContext("2d");

var imagi = document.createElement("img");
imagi.crossOrigin ="Anonymous";
var sor='https://www.dropbox.com/s/j150b0dm9gzqpb3/picker.png?dl=0'
source = "picker.png";
imagi.src=source;
console.log(imagi.crossOrigin)

//body.appendChild(imagi);
var boton = document.getElementById("but");
boton.addEventListener("click",fnDrawingImage);
var calc=document.getElementById("calcular");
calc.addEventListener("click",fnCalcular);
var p=document.getElementById("p");
var xi
var yi
var x
var y
var color;
var red, green, blue;
var texto;
    function fnDrawingImage(evento){
      cuad.drawImage(imagi,0,0,cuadrote.width,cuadrote.height);
      //imagi.load()
      //originalImageData=cuad.cuadrote.toDataURL();
      }

    function fnCalcular(evento){
      xi = document.getElementById("x");
      yi = document.getElementById("y");
      x = parseInt(xi.value);
      y = parseInt(yi.value);
      color=cuad.getImageData(x,y,1,1);
      red=color.data[0];
      green=color.data[1];
      blue=color.data[2];
      texto = "la coordenada que escogiste tiene por color: R = " + red+" G = " + green + " B = " + blue;
      p.innerHTML = texto;
    }
