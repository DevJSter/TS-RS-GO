"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = void 0;
function name(person) {
    return "Hi from " + person.name + " I'm " + person.age + "years old";
}
exports.name = name;
console.log(name({
    name: "Shubham",
    age: 25
}));
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var personobj = new Person("SHubham", 21);
console.log(personobj);
