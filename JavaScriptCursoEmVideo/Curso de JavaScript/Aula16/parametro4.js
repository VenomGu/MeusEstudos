let f = 5
function fatorial(n){ 
    let fat = 1 
   for(var c = n; c>=1 ; c--){ 
        fat *= c // ou fat = c * fat
        console.log(c,fat)
    }
    return fat
}
console.log(`o fatorial de de ${f}! é ${fatorial(f)}`) // Aqui a função é chamada e iniciada.
//cinco com exclamação, fatorial=> 5! = 5 x 4 x 3 x 2 x 1