// destruturação permite extrair dados de arrays ou objetos em variaveis distintas

// Desestruturando array
const data = ["Bruno Mosko", "bruno-hs@outlook.com"];

const [username, email] = data;

console.log(username);
console.log(email);

// desestruturando somente o primeiro
const fruits = ["banana", "maça", "uva"];

const [banana] = fruits;
console.log(banana);

const [_, apple] = fruits;
console.log(apple);

const [, , uva] = fruits;
console.log(uva);
