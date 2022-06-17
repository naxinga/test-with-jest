// importar la función sum del archivo app.js
//const { sum } = require('./app.js');

// comienza tu primera prueba
//test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    //let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    //expect(total).toBe(23);
//});
const { fromDollarToYen, fromEuroToDollar, fromYanToPound } = require('./app.js') // En vez de importarlo en cada test lo importamos 1 vez todo junto.
test("One euro should be 1.206 dollars", function(){
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("If String return false", function(){
    // prueba
    expect(fromEuroToDollar("Cuatro")).toBe(false); //Si introduzco un string devuelve false.
})

test("One dollar should be 106.58 yens", function(){
    expect(fromDollarToYen(1)).toBe(106.58);
}
)

test("One yen should be 0.67 pounds", function(){
    expect(fromYanToPound(1)).toBe(0.67);
}
)

test("Siempre positivo nunca negativo", function(){
    expect(fromDollarToYen(-1)).toBe(false);
}
)