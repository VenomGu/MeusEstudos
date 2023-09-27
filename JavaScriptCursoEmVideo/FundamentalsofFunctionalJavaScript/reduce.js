const numbers = [1,2,3,4,5,6,7] //28

const sum = ()=>{
let total = 0
c=0
for (const c in numbers) {
     total += numbers[c]
     }
     return total
}
var soma = sum()
console.log(soma)
