let obj={}
let n=10000;
let i=0;

for(i;i<n;i++){
  let cicle=(1+Math.floor(Math.random()*n))
  obj["name "+ cicle]= "name" + cicle
}
console.log(obj);