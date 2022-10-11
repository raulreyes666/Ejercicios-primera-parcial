function frst(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
let Lista=[]; 
let k=1;

for(i=0;i<=99999;i++){
  Lista[i] = frst(1,9); k++;
}


console.log('Arreglo sin ordenar:');
console.log(Lista);

let array=Lista;
console.log('Arreglo ya ordenado:');
console.log(Lista.sort());

binaria = function(item){
  array.sort();
  let bajo = 0,
    top = array.length - 1,
    mediano, elemento
  while (bajo <= top){
    mediano = Math.floor((bajo + top)/2);
    elemento = array[mediano]
    if (elemento < item){
      bajo = mediano + 1
    } else if (elemento > item){
      top = mediano - 1
    } else {
      return mediano
      return -1
    }
  }
}
x=6;

console.log(binaria(x));