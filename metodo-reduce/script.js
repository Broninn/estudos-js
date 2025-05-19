// método reduce é utilizado para reduzir um array a um unico valor

/* 
Parametros
 - Array original (values)
 - Acumulador (accumulator)
 - Valor da iteração (currentValue)
 - Valor inicial (0)
 - Index (index de iteração atual - opcional)
*/

const values = [1, 2, 3, 4, 5];

const sum = values.reduce((accumulator, currentValue, index) => {
    /*console.log(`accumulator: ${accumulator}`)
    console.log(`currentValue: ${currentValue}`)
    console.log(`index: ${index}`)

    console.log(`soma acumulada: ${accumulator + currentValue}`)
    console.log("#######################")*/
    return accumulator + currentValue;

}, 0);

console.log(sum);


