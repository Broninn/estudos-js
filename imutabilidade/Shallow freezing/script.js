const book = {
  title: "teste",
  category: "Javascript",
  author: {
    name: "Bruno",
    email: "bruno-hs@outlook.com",
  },
};

// O Javascript em si não impõe restrições a modificação dos objetos
// book.category = "HTML"

// Congelar o objeto e impede a modificação

// Object.freeze(book);
// book.category = "HTML"; // Não modifica
// book.author.name = "Joao"; // Modifica

// console.log(book);
console.log("=============================");

//Deep freeze

function deepFreeze(obj) {
  //obtem um array com todas as propriedades do objeto de primeiro nivel
  const props = Reflect.ownKeys(obj);

  // Itera sobre todas as propriedades do objetos
  for (const prop of props) {
    // Obtém o valor associado à propriedade atual
    const value = obj[prop];

    // Verifica se o valor é um objeto ou função pra continuar aplicando o deep freeze em objetos aninhados
    if ((value && typeof value === "object") || typeof value === "function") {
      deepFreeze(value);
    }
  }

  // retorna objeto congelado
  return Object.freeze(obj);
}
// Chama a função para congelar objeto com Deep Freeze
deepFreeze(book);

book.category = "HTML"; // Não modifica
book.author.name = "Joao"; // Não modifica"

console.log(book);
