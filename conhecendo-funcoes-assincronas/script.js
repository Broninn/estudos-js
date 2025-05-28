// Conhecendo promisses

function asyncFunction() {
  return new Promise((resolve, reject) => {
    // Simula uma operação assincrona
    setTimeout(() => {
      const isSuccess = true;

      if (isSuccess) {
        resolve("A operação foi resolvida");
      } else {
        reject("A operação falhou");
      }
    }, 3000); // Simula 3 segundos
  });
}

// Visualizando que o retorno é uma promise
// console.log(asyncFunction())

// const response = asyncFunction()
// console.log(response)

asyncFunction()
  .then((response) => {
    console.log("Sucesso: ", response);
  })
  .catch((error) => {
    console.log("Erro: ", error);
  })
  .finally(() => {
    console.log("Finalizado");
  });
