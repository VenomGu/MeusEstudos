/*
let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
  };
 Object.freeze(obj);
obj["review"] = "bad";
  obj["newProp"] = "Test";
  console.log(obj); */

  /*
  const createPerson = (name, age, gender) => ({ name, age, gender });
  console.log(createPerson)*/

  /*
  // Explicit constructor
class SpaceShuttle {
    constructor(targetPlanet) {
      this.targetPlanet = targetPlanet;}
    takeOff() {
      console.log("To " + this.targetPlanet + "!");
}}
  // Implicit constructor 
  class Rocket {
    lunch() {
      console.log("To the moon!");
}}
  const zeus = new SpaceShuttle('Jupiter');
  // prints To Jupiter! in console
  zeus.takeOff();
  
  const atlas = new Rocket();
  // prints To the moon! in console
  atlas.lunch();
  */

  class Book {
    constructor(author) {
      this._author = author;
    }// getter
    get writer() {
      return this._author;
    }// setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }
  const novel = new Book('anonymous');
  console.log(novel.writer);
  novel.writer = 'newAuthor';
  console.log(novel.writer);
