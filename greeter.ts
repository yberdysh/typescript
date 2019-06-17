
class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string){
    this.fullName = `${firstName} ${middleInitial} ${lastName}`
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person){
  return "Hello, " + person.firstName + " " + person.lastName;
}

function tester(numbers: Array<number>){
  let final = 0
  for (let i = 0; i < numbers.length; i++){
    final += numbers[i]
  }
  return final
}

interface nestedPerson {
  firstName: string;
  lastName: string;
  // optional type with ?
  age?: any;
  properties: {
    eyes: string;
    hair: string
  }
}

let zhoe = {firstName: "Joe", lastName: "Costa", age: "27", properties: {eyes: "brown", hair: "black"}}

function greet(person: nestedPerson){
  return `Name: ${person.firstName} ${person.lastName}, age: ${person.age}, eyes: ${person.properties.eyes}, hair: ${person.properties.hair}`
}

// let user = {firstName: "Jane", lastName: "Costa"}
let user = new Student("Joe", "D", "Costa")


let isDone: boolean = false;
let lines: number = 42;
let someName: string = "Anders";

console.log(isDone)

document.body.innerHTML = greet(zhoe)
// document.body.innerHTML = tester([1,2,3,4,5])
