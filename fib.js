function fib(numero){
  let a=0,b=1,c,d=1;
  console.log(a); 
  console.log(b);
  for(i=3; i<=numero;i++){
    c=a+b;
    console.log(c); 
    d=d+c; 
    a=b; 
    b=c;} } 
console.log("Los 11 primeros numeros de Fibonacci son :")
fib(11)
