//Anonymous function
const greeter =function greet(name, surname){
    return`Hello, ${name}`
}

const greetMessage = greeter('Mark', 'Smith')

console.log(greetMessage)

 const greeterReference = greeter

 console.log(greeterReference("Arthur"))
 