let nms; let object={}; let counter=0;
let total=10e3;
let objetct1={},object2={};

while(counter<total){
  nms=Math.floor(Math.random()*10e5);
  nombres="nombre "+nms;
  if(nms>99999){
    object[nombres]=nombres;
    counter++;
  }
}
objetct1=Object.keys(object);
object2=objetct1.sort((p,q)=>p<q?-1:p>q?1:0);
object={}

for(j=0;j<object2.length;j++){
  nombres=object2[j]
  object[nombres]=nombres
}

console.log(object);
console.log("Total de nombres = "+ Object.entries(object).length)