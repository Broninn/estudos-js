// método filter cria um novo array com todos os elementos que passaram na condição

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

// Filtrando palavres que tenham mais de 6 caracteres
const result = words.filter((word) => word.length > 6);
console.log(result);

const produtcs = [
  {
    description: "Teclado",
    price: 150,
    promotion: true,
  },
  {
    description: "Mouse",
    price: 450,
    promotion: false,
  },
  {
    description: "Monitor",
    price: 1250,
    promotion: true,
  },
];

// Exemplo de um filtro de produtos na promoção
const promotion = produtcs.filter((product) => product.promotion === true);
console.log(promotion);
