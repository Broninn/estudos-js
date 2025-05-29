// O Método map chama a função callback recebida por parametro para ada elemento do Array original,
// em ordemm e constrói um novo array com base nos retornos de cada chamada. E no final, devolve o
// novo array

const produtcs = ["teclado", "mouse", "monitor"];

// percorrendo os itens do array
produtcs.map((item, index) => {
  console.log(`o produto ${item} está na posição ${index}`);
});

// sintaxe reduzida
produtcs.map((item, index) =>
  console.log(`o produto ${item} está na posição ${index}`)
);

// utilizando o novo objeto retornado
const formated = produtcs.map((product) => {
  // return product.toUpperCase();

  return {
    id: Math.random(),
    description: product,
  }

});

console.log(formated)
