const studentsAndGrades = [
    { name: 'Sofia', approved: true, firstPeriodsGrades: [ 56, 95 ] },
    { name: 'Don', approved: false, firstPeriodsGrades: [ 35, 77 ] },
    { name: 'Joseph', approved: true, firstPeriodsGrades: [ 100, 87 ] },
    { name: 'Sara', approved: true, firstPeriodsGrades: [ 67, 88 ] }
]
const approvedStudentsOnly = (student)=>student.approved==true
const starWithSOnly = (student)=>student.name[0] =="S"  

const approvedStudents = studentsAndGrades.filter(approvedStudentsOnly)
const starWithS = studentsAndGrades.filter(starWithSOnly) /*Usando o filter */ 

console.log(approvedStudents)
console.log(starWithS)
