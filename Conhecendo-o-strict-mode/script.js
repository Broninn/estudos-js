// O sctrict mode: ativando esse modo, os erros que eram silenciosos passa a gerar exceções no JS
"use strict";

function showMessage() {
  let personName = "Bruno Mosko";
  console.log("Olá", personName);
}

showMessage();

class Student {
  get point() {
    return 7;
  }
}

let student = new Student();
// tentando mudar uma propriedade somente leitura
// student.point = 10

console.log(student.point);

// tentando deletar uma propriedade de um objeto que nao pode deletar
// delete window.document

// tentando passar 2 parametros duplicados
function sum(a,a,c){

}