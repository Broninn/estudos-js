// setTimeout() executa uma função após um intervalo de tempo especificado

setTimeout(() => {
  console.log("Olá, tudo bem?");
}, 1000); // tempo em ms

// setInterval() executa uma função após um intervalo de tempo especificado

let value = 10;

const interval = setInterval(() => {
  console.log(value);
  value--;
  if (value === 0) {
    console.log("Zerou");
    // interrompe o intervalo de execuções
    clearInterval(interval);
  }
}, 1000);
