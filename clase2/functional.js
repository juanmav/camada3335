let sumar = (a,b) => a + b;

let ajuste = 0;

let sumarImpura = (a,b) => a + b + ajuste;


//console.log(sumar(10,5));
//console.log(sumarImpura(10, 5));

/***
 *
 * Mucho codigo por aca ejecutandose.....
 *
 *
 * ***/

ajuste = -3;

/***/

//console.log(sumar(10,5));
//console.log(sumarImpura(10, 5));


// Corregier la impurta

let sumarConAjuste = (a, b, ajuste) => a + b + ajuste;


let dameSumarAjustada = (ajuste) => {
    return (a,b) => a + b + ajuste;
};

let sumarAjustaPor5 = dameSumarAjustada(20);

console.log(sumarAjustaPor5(10, 5));
