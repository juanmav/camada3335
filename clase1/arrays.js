let numeros = [ 3, 4, 6, 25, 6, 9 ];
/*let dobles = [];

for (let i = 0; i < numeros.length; i++){



    dobles.push(numeros[i] * 2);
}*/

let dobles = numeros.map( elemento => elemento * 2 );

console.log(numeros);
console.log(dobles);