// Contar elementos repetidos: Dada una lista de elementos, crea una función en JavaScript que recorra la lista y cuente la cantidad de veces que aparece cada elemento. Devuelve un objeto donde las claves sean los elementos de la lista y los valores sean la cantidad de veces que aparecen.
// const numbers = [2,4,2,6,2,5,2,4];
// let repetidos = {};
// numbers.forEach( number => {
//     if( repetidos[number]){
//       repetidos[number]++;
//     }
//     else{
//         repetidos[number]= 1;
//     }
// });
// console.log( repetidos );

////////////////////////////////////////////////////////////////////////////////
let listaRepetidos = (lista) =>{
    let repetidos = {};
  lista.forEach(element => {
    if(repetidos[element]){
       repetidos[element]++;
    }else{
        repetidos[element]=1;
    }
  });
  return repetidos;
}

console.log(listaRepetidos([2,1,3,2,2,4,5]));
console.log(listaRepetidos([4,5,4,2,2,4,5]));
console.log(listaRepetidos([1,1,3,2,2,4,1]));
console.log(listaRepetidos([2,1,4,2,5,4,5]));