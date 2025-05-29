// spread ( espalhar) permite que um objeto iteravel, como expressao de array ou uma string seja expandido para ser usado onde zero ou mais argumentos

const numbers = [1, 2, 3];
console.log(numbers);
console.log(...numbers);

const data = [
  {
    name: "Bruno Mosko",
    email: "bruno-hs@outlook.com",
    avatar: "a.jpg",
  },
  {
    name: "Lucio Mosko",
    email: "lucio-sm@outlook.com",
    avatar: "b.jpg",
  },
];

console.log(data);
console.log(...data);
