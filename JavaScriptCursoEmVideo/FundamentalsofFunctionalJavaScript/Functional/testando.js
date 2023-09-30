const studentsAndGrades = [
    {name: "Sofia", grades: [56,95]},
    {name: "Don", grades: [35,77]},
    {name: "Joseph", grades: [100,87]},
    {name: "Sara", grades: [67,88]}
]
const getNames=(students)=>(students.name)
const getGrades=(students)=>(students.grades)

const getNamesOnly= studentsAndGrades.map(getNames)
const getGradesOnly= studentsAndGrades.map(getGrades)
let sum = 0

console.log(getNamesOnly)
console.log(getGradesOnly)
console.log(sum)
