let studentsAndGrades=[
    {names:"Sofie", grades: [56,95]},
    {names:"Don", grades: [35,77]},
    {names:"Joseph", grades: [100,87]},
    {names:"Sara", grades: [67,88]}
];

/*1. Add a boolean property called approved to each object. map()*/
let approved = true;
let addProperty= studentsAndGrades.map((studentsAndGrades)=>{
    return {
        ...studentsAndGrades, 
        approved: approved //Method to make the approved an property, the map() will do the rest adding in each iteration. 
    };
});
console.log(addProperty)
studentsAndGrades=addProperty

//2. Replace the "grades" property for "gpa", calculate and assign each student's gpa.(média das notas) 

let replaceGrades=studentsAndGrades.map((obj)=>{
        return {
            names:obj.names,
            gpa:obj.grades,
            approved: true//Dessa maneira, eu posso substituir os objetos, abrindo um objeto como retorno e fazendo as mudanças. 
        }
});
console.log(replaceGrades)
studentsAndGrades=replaceGrades; // Grades trocado por gpa ()

//3. Set approved value to true if the student gpa is greater than 70. Aprovado com 70. 
//4. Print the students with their respective gpas and wheter they were approved or not. 

let approvedOrnot = studentsAndGrades.map((notaAtual)=>{
    media = []
    media = (notaAtual.gpa[0]+notaAtual.gpa[1])/2
    if(media>=70){
        return {
            names:notaAtual.names,
            gpa:media,
            approved:"Approved"
        } //Fiz a 3 e 4 num só, somando a média de cada aluno e printei se foi aprovado ou não.
    }else{
        return {
        names:notaAtual.names,
        gpa:media,
        approved:"Repproved"
        }
    };
})
console.log(approvedOrnot)
console.log(studentsAndGrades)
//5. Print only the approved students.
let approvedStudentsOnly = approvedOrnot.filter((students=> students.approved=="Approved")) //Filtrei os alunos aprovados
console.log(approvedStudentsOnly) 