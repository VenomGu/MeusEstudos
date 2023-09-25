function greet(name="John",lastname="Doe",suffix = "III"){
    console.log(`Hello ${name} ${lastname} ${suffix} `)
}

greet("", "","")
greet("Mark")
greet("Mark", "Smith")
greet("Mark", "Smith", "Jr")

function getAverageGrade(...grades){
        var sum = 0
        for(const grade of grades){
            sum += grade 
        }
        console.log(sum)
        console.log(typeof(sum))
        console.log(Array.isArray(grades));
        console.log(sum/grades.length)
}
getAverageGrade(6,7,9,4,2)
