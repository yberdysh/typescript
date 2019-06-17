var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
function tester(numbers) {
    var final = 0;
    for (var i = 0; i < numbers.length; i++) {
        final += numbers[i];
    }
    return final;
}
var zhoe = { firstName: "Joe", lastName: "Costa", age: "27", properties: { eyes: "brown", hair: "black" } };
function greet(person) {
    return "Name: " + person.firstName + " " + person.lastName + ", age: " + person.age + ", eyes: " + person.properties.eyes + ", hair: " + person.properties.hair;
}
// let user = {firstName: "Jane", lastName: "Costa"}
var user = new Student("Joe", "D", "Costa");
var isDone = false;
var lines = 42;
var someName = "Anders";
console.log(isDone);
document.body.innerHTML = greet(zhoe);
// document.body.innerHTML = tester([1,2,3,4,5])
