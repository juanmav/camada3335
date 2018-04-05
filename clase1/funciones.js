function sumar(a, b){
    return a + b;
}

console.log(sumar(2,3));


const restar = function (a, b) {
    return a - b;
};

console.log(restar(5, 3));

let ejecutar = function (fn, a,b){
    return fn(a,b);
};

console.log(ejecutar(restar, 5,3));
console.log(ejecutar(sumar, 3,4));

let leyenda = 'Algo para esto';

leyenda = 'otra leyenda';

