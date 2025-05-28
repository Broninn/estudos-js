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

// // Notação Arrow function
// const fetch = async () => {
//   const response = await asyncFunction()
//   console.log(response)
// }

// Notação normal
async function fetch() {
  try {
    const response = await asyncFunction();
    console.log("sucesso: ", response);
  } catch (error) {
    console.log("Erro: ", error);
  } finally {
    console.log("Fim da execução");
  }
}

fetch();
