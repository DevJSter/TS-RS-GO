"use strict";
// Primitives and references
// [] {} () -> ismei changes huye toh references mein bi changes honge
const a = 12;
const b = a;
// Basic Types
// Primitive Tyes ()
// Arrays
// Tuples
// Enumes
// Any Unknown Value Null undefined never
class Botlle {
    constructor(name) {
        this.name = name;
        this.material = "harinaam";
    }
}
class dadBottle extends Botlle {
    constructor(name) {
        super(name);
    }
    getValue(string1) {
        console.log(this.material);
        this.material = string1;
        console.log(this.material);
    }
}
let Bottttt = new dadBottle("Daddy");
Bottttt.name = "Keshava"; //readonly helps to catch bugs but ts will compile anyways -> hmmmmmmmmmmmmmmmmm
console.log(Bottttt.name);
// Functions
// callbacks in fn calls
function meow(name, cb) {
    cb("JAi Shree ram");
}
meow("SHUBHAM", (value) => {
    console.log(value);
});
// -? Rest / Spread Parameter
function sum(...arr) {
    console.log(...arr);
}
sum(1, 2, 3, 4, 5);
