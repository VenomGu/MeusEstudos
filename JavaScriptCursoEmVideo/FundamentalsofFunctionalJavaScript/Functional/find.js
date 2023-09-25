const studentsAndGrades = [
    {name: "Sofia", grades: [56,95]},
    {name: "Don", grades: [35,77]},
    {name: "Joseph", grades: [100,87]},
    {name: "Sara", grades: [67,88]}
]

const student = studentsAndGrades.find(student=> student.name === "Sofia");
//Usando find() para encontrar um objeto específico:
console.log(student)