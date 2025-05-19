const address1 = {
  street: "Rux x",
  number: 1515,
};

// nao é cópia, É uma referencia
const address2 = address1;

address2.number = 30;

console.log("addrees 1", address1);
console.log("addrees 2", address2);


// Criando um novo objeto utilizando as propriedades e valores de address1
const addrees3 = {...address1}

addrees3.number = 100
console.log("addrees 3", addrees3)