//Generar numeros
var miArray = []; var total = 5; var nRandy;
 for(i = 0; i < total; i++){
 nRandy = Math.floor(Math.random() * 5);
 miArray.push(nRandy);
 };


//Buscar majority
const majority = (miArray = []) => {
  
   const limite = Math.floor(miArray.length / 2);
   const save = {};
   for (let i = 0; i < miArray.length; i++) {
      const value = miArray[i];
      save[value] = save[value] + 1 || 1;
      if (save[value] > limite)
         return value
     
   };
   return false;
};
console.log("Mi array sin ordenar es = ")
console.log(miArray);
console.log("El majority es = ")
console.log(majority(miArray));


