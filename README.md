Buenas!

Este trabajo va sobre los test de Jest, a continuacion describo brevemente los pasos seguidos:

Primero se han instalado todos los paquetes necesarios para que jest funcione correctamente y en package.json se ha especificado que los test sean "jest".

Despues se han creado los archivos app.js y test.js, en app.js haremos nuestras funciones y en test.js llamaremos al test para hacer las pruebas.

Se han creado las funciones fromDollarToYen, fromEuroToDollar y fromYanToPound en app.js, tratando en primera instancia que funcionen para valores simples.

Cuando se han creado las funciones nos vamos a test.js y hacemos el primer test a cada función, vemos que hacen su labor pero de forma muy simple.

Una vez esta funcionando nos volvemos a app.js para añadir unas cuantas excepciones:
    *Si es un string lo que le entra como valor que devuelva false.
    *Si es un numero negativo que devuelva false.
    *Si tiene mas de 2 decimales que corte a los dos decimales.

Hacemos en test.js las comprobaciones de lo anterior y listo.