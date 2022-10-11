const primo=(num)=>{
  if(num<2){
    return false;
  }
  for(let i=2; i<num; i++){
    if(num%i ===0){
      return false;
    }
  }
  return true;
}

const primos=(numero)=>{
  resultado=[]
  for(let i=2; i<numero;i++){
    if(primo(i)) resultado.push(i)
  }
  return resultado
}
console.log("Los primeros 11 numeros primos son: "+ primos(35))