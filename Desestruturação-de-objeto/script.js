const product = {
  description: "teclado",
  price: 150,
};

const { description, price } = product;
// console.log(description);
// console.log(description);

function newProduct({ description, price }) {
  console.log(description);
  console.log(price);
}

newProduct({ description: "Mouse", price: 100 });


