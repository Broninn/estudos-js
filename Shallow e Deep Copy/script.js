const htmlCourse = {
  course: "HTML",
  students: [
    {
      name: "Bruno",
      email: "bruno-hs@outlook.com",
    },
  ],
};

// const jsCourse = {
//   ...htmlCourse,
//   course: "JavaScript",
// };

// vai modificar o htmlCourse também porque students é uma referencia e nao uma cópia
// jsCourse.students.push({ name: "Joao", email: "joao@outlook.com" });

// Deep copy (cópia profunda)

/*const jsCourse = {
  ...htmlCourse,
  course: "JavaScript",
  students: [
    ...htmlCourse.students,
    { name: "Joao", email: "joao@outlook.com" },
  ],
};*/

const jsCourse = {
  ...htmlCourse,
  course: "JavaScript",
}

jsCourse.students = [
  ...htmlCourse.students,
  {
    name: "Joao",
    email: "joao@outlook.com",
  }
]

console.log(htmlCourse);
console.log(jsCourse);
