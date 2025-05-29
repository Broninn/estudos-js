const book = {
  title: "Aprendendo JS",
  category: "Javascript",
  author: {
    name: "Bruno",
    email: "bruno-hs@outlook.com",
  },
};

const updatedBook = {
  ...book,
  title: "Evoluindo CSS",
  category: "CSS",
  type: "Programação",
};

// Original intacto
console.log(book);
// Modificado
console.log(updatedBook);

// utilizando operador de desestruturação (rest operator) para remover propriedades

const { category, ...bookWithoutCategory } = book;

console.log(bookWithoutCategory);
