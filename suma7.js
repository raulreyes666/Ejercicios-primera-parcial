var i; var x=0; var z=1;
console.log("Los multiplos de 7 entre 200 y 300 son: ");
for (i = 200; i <= 300; i++) {
  if ((i % 7) == 0) {
    console.log(i); 
x=x+i;  
  } 
}
console.log("La suma de estos multiplos es de = "+x); 