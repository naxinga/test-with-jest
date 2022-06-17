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
    if (typeof doll !== 'string' && doll>=0){ // Comprobamos que no sea un string y que no sea un numero negativo
    let euros = doll / oneEuroIs["USD"];
    let yenes = euros * oneEuroIs["JPY"];
    return parseFloat(Number.parseFloat(yenes).toFixed(2)); // Si le hago solamente un parseFloat me devuelve 2 decimaes pero en string, el segundo me lo convierte a float de nuevo.
    }else if (typeof doll === 'string' || doll<0){ // Si es String o negativo return false
        return false;
    }    
}

function fromEuroToDollar(eur){
    if (typeof eur !== 'string' && eur>=0){ 
    let doll = eur * oneEuroIs["USD"];
    return parseFloat(Number.parseFloat(doll).toFixed(2));
    }else if (typeof eur === 'string' || eur<0){
    return false;
    }   
}

function fromYanToPound(yen){
    if (typeof yen !== 'string' && yen>=0){
    let euros = yen / oneEuroIs["USD"];
    let libras = euros * oneEuroIs["GBP"];
    return parseFloat(Number.parseFloat(libras).toFixed(2));
    }else if (typeof yen === 'string'|| yen<0){
    return false;
} 
}



module.exports = { fromDollarToYen, fromEuroToDollar,fromYanToPound };

