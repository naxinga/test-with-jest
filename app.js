// esta es mi función que suma dos números
//const sum = (a,b) => {
//    return a + b
//}

// solo un registro en consola para nosotros.
//console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
//module.exports = { sum };

// one euro is:
const oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(doll){
    If (isNaN(doll)){
    let euros = doll / oneEuroIs["USD"];
    let yenes = euros * oneEuroIs["JPY"];
    return yenes;
    }else{
        return ("no es un entero");
    }    
}

function fromEuroToDollar(eur){
    let doll = eur * oneEuroIs["USD"];
    return doll;
}

function fromYanToPound(yen){
    let euros = yen / oneEuroIs["USD"];
    let libras = euros * oneEuroIs["GBP"];
    return libras;
}

module.exports = { fromDollarToYen, fromEuroToDollar,fromYanToPound };

