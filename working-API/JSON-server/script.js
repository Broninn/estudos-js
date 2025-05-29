// Utilizando o fetch e then
/*fetch("http://localhost:3333/products")
  .then((response) => {
    response.json().then((data) => {
      console.log(data[0]);
      console.log(data[1]);
      console.log(data[2]);
    });
  })
  .catch()
  .finally();
*/

// utilizando o fetch com async await
// retornando todos
async function fetchProducts() {
  const response = await fetch("http://localhost:3333/products");
  const data = await response.json();
  console.log(data);
}
//fetchProducts();

// retornando por parametro id
async function fetchProductById(id) {
  const response = await fetch(`http://localhost:3333/products/${id}`);
  const data = await response.json();
  console.log(data);
}

// fetchProductById(1);

const productName = document.getElementById("name");
const productPrice = document.getElementById("price");
const form = document.getElementsByName("form");

addEventListener("submit", async (e) => {
  e.preventDefault();

  await fetch("http://localhost:3333/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: new Date().getTime().toString(),
      productName: productName.value,
      productPrice: Number(productPrice.value),
    }),
  });
});
