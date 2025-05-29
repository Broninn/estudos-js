// O método findIndex retorna o indice no array do primeiro elemento que satisfazer a condição.
// Caso contrário, retorna -1, indicando que nenhum elemento passou no teste

const values = [4, 6, 8, 12]

// obtendo o primeiro indice do elemnto que o valor é maior do que 4
const index = values.findIndex((value) => value > 4)
console.log(index)
console.log(values[index])


// exemplo de quando nao encontra

console.log(values.findIndex((value) => value > 15))
