const range = (start,end) => {
    if(start ==0 || end == 0 ){
      console.log('Missing parameter')
    }
    for (let index = start;index <=end; index++)
    console.log(index)    
}

range(15,20)

const print = message => console.log(message)

print("Hello")
