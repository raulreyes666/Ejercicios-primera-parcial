var miArray = []
var m = 1000000
var pasos = 0

function secuencial(element, miArray){
  for (var i in miArray){
    if (miArray[i] == element) return i; 
    
    pasos++
  }
  return -1;
}

let vacio;
 for(i = 0; i < m; i++){
  vacio= Math.floor(Math.random() * 100);
 miArray.push(vacio);
  pasos++ };

console.log(miArray);
var res = secuencial('6',miArray);

console.log("Posicion del numero= " + res);
console.log("Cantidad de pasos= "+ pasos);