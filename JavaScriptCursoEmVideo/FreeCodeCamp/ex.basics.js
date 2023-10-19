/*const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[0][0];
  console.log(myArray[3])
  
  */
/*
  function functionWithArgs(param1,param2){
    
   return console.log(param1+param2)
 }
 
 functionWithArgs(1,2)
 */
/*
 function nextInLine(arr, item) {
    // Only change code below this line
    item = arr.push(item)
    item = arr.shift(item)
    return item;
    // Only change code above this line
  }
  var res = nextInLine([5,6,7,8,9], 1)
  console.log(res)
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
 
  //Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));*/
/*
  function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
    case 1:
    answer = "Alpha"
    console.log(answer);
    break;
      case 2:
      answer = "Beta"
    console.log(answer);
    break;
      case 3:
      answer = "Gamma"
    console.log(answer);
    break;
      case 4:
      answer = "Delta"
    console.log(answer);
    break;
    }
    // Only change code above this line
    return answer;
  }
  caseInSwitch(4);*/
  /*
  function chainToSwitch(val) {
    let answer = "";
  switch(val){
      case "bob":
      
      answer = "Marley";
      break;
    case 42: 
      
      answer = "The Answer";
      break;
    case 1: 
      
      answer = "There is no #1";
      break;
    case 99:
      
      answer = "Missed me by this much!";
      break;
    case 7:
      
      answer = "Ate Nine";
      break;
    case "John":
      
      answer = "";
      break;
    case "156":
      
      answer = "";
    break;
      default:
      answer = "ERROR"
    }
    console.log(answer)
    return answer;
  }
  chainToSwitch(7);
  */
/*
  function comp(a,b){
    return a < b
  }
  console.log(comp(10,9))

  function myFun() {
    console.log("Hello");
    return "World";
    console.log("byebye")
  }
  console.log(myFun());
  */
  /*
  let count = 0;
  function cc(card) {
  if (card>= 2 || card<=6){
    count+= +1
     } else if (card>= 7 || card<=9){
       count=count
         } else if (card=10 || card == 'J', 'Q', 'K','A'){
           count+= -1
         }}
         if (count>=1){
           return count + " Bet"
         } else if (count<=0){
           return count + " Hold"
         }
  const res = cc(6); cc(4); cc(4); cc(5); cc(6);
  console.log(res)
*/
/*
const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
  };
  const myDog = "Snoopie";
  const myBreed = dogs[myDog];
  console.log(myDog)
  console.log(dogs)
  console.log(myBreed);
*/
/*
let ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
  console.log(ourDog)
  let happy = "Happy Camper"
  let f = ["a", "b", "c"]
  ourDog.name = happy
  ourDog["friends"] = f
  //ourDog.friends.push(f)
  console.log(ourDog)
  */

  const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
  
  ourDog.bark= "bow-wow";
  console.log(ourDog) 

  // Setup
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  // Only change code below this line
  console.log(myDog)
  delete myDog["tails"];
  console.log(myDog)
  
  /*
  const article = {
    "title": "How to create objects in JavaScript",
    "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
    "author": "Kaashan Hussain",
    "language": "JavaScript",
    "tags": "TECHNOLOGY",
    "createdAt": "NOVEMBER 28, 2018"
  };
  
  const articleAuthor = article["author"];
  const articleLink = article["link"];
  const articleLanguage = article.language
  
  const value = "title";
  const valueLookup = article[value];
  console.log(articleLanguage)*/

  // Setup
  /*
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    switch(val) {
      case "alpha":
        result = "Adams";
        break;
      case "bravo":
        result = "Boston";
        break;
      case "charlie":
        result = "Chicago";
        break;
      case "delta":
        result = "Denver";
        break;
      case "echo":
        result = "Easy";
        break;
      case "foxtrot":
        result = "Frank";
    }
  
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");*/


  // Setup
  /*
function phoneticLookup(val) {
    let result = "";
    // Only change code below this line
  const lookup = {
        "alpha": "Adams",
        "bravo":"Boston",
        "charlie":"Chicago",
        "delta":"Denver",
        "echo":"Easy",
        "foxtrot":"Frank"
    }
    console.log(lookup[val]);
    result = lookup[val]
    // Only change code above this line
    return result;
  }
  phoneticLookup("bravo");*/

/*
  const ourStorage = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
  };
  console.log(ourStorage.cabinet["top drawer"].folder2);
  console.log(ourStorage.desk.drawer);*/

  // Setup
  /*
const myArray = [];

// Only change code below this line
let i = 5 
while(i >= 0){
  myArray.push(i)
  i=i-1
}
console.log(myArray)*/
/*

// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown", 
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  let n = contacts.length -1
  function lookUpProfile(name, prop) {
    // Only change code below this line
  if (n<=-1){
   return "No such contact"
      } else if (contacts[n]["firstName"]==name){
            if (contacts[n].hasOwnProperty(prop)){
              return contacts[n][prop]
            } else for (let i = n; i >= 0; i--){ 
              if (contacts[i].hasOwnProperty(prop)===false){
                 if (contacts[i]["firstName"]===name){  
                   return "No such property"
                 }}}}
      return lookUpProfile(name,prop,n--);
    // Only change code above this line
  }
  const res =lookUpProfile("Kristian","lastName");
  console.log(res); */

/*
  var decimal = 6
  function teste (a){
  
  return Math.random(decimal)
  }
  var res=teste (decimal)

  console.log(res.toFixed(2))

  */

/*
  function randomWholeNum() {
  
    return Math.floor(Math.random() * 200);
  }
  let res = randomWholeNum()
  console.log(res)


   */
/*

  
function randomRange(myMin, myMax) {
  
    return Math.floor(Math.random()*(myMax - myMin + 1)) + myMin
    }
    var res = randomRange(5, 100)
    console.log(res)

    */
/*
    Math.floor; Math.random(); parseInt(); 
    
    
    
    operadores ternários
    a ? b : c é igual isso -> function findGreater(a, b) {
        if(a > b) {
          return "a is greater";
        }
        else {
          return "b is greater or equal";
        }
      }, é praticamente um if else. */
      /*
    
      function checkSign(a) {
        return (a === 0) ? "zero" : (a<0)? "negative" :(a>0)?"positive": "se não der nenhuma anterior, aparece essa mensagem"
       };
       var res = checkSign(10);
       console.log(res)

       */
      /*
       let k= 0
       function countup(n) {
        if (n < 1) {   
            
            console.log(n)         
          return [];
        } else {
            
          const countArray = countup(n - 1);
          countArray.push(n);
          k = 1 + k
          console.log(k)
          return countArray;
        }
      }
      console.log(countup(5));*/