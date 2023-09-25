const studentsAndGrades = [
    {name: "Sofia", grades: [56,95]},
    {name: "Don", grades: [35,77]},
    {name: "Joseph", grades: [100,87]},
    {name: "Sara", grades: [67,88]}
]

const studentsWithSofiaName = studentsAndGrades.filter(student=> student.name === "Sofia");
//Usando filter() para encontrar todos os objetos com o nome "Sofia" (caso haja vários):

console.log(studentsWithSofiaName)