// O método find retorna o valor do primeiro elemento do array que satisfazer a condição. Caso contrário, é undefined

// retorna o primeiro elemento que o valor é maior que 10
const values = [5, 3, 8, 200, 25];
const found = values.find((value) => value > 10);
console.log(found);

// exemplo com objetos

const fruits = [
  { name: "apples", quantity: 23 },
  { name: "bananas", quantity: 25 },
  { name: "banana", quantity: 42 },
  { name: "oranges", quantity: 52 },
];

result = fruits.find((fruit) => (fruit = "banana"));
console.log(result.quantity);
