// rest params (...) permite representar um numero indefinido de argumentos como um array

function values(a, ...rest) {
  console.log(a);
  console.log(...rest);
}

values(2, 1, 2, 6, 7);
