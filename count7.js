var x=200; var y=300; var contador=0; acumulador=0;
console.log("Los multiplos son: ")
while(x<y){
 if(x%7 ===0){
   console.log(x);
   acumulador=acumulador+ x;
   contador++;
   console.log(x)
 }
  x++
}
console.log("El total de multiplos es de: "+contador);