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
    protected material : string = "harinaam";
    constructor(public name : string) {}
}

class dadBottle extends Botlle {
    constructor( name : string) {
        super(name);
    }

    getValue (string1 : string) {
        console.log(this.material);
        
        this.material = string1

        console.log(this.material);
        
    }
}

let Bottttt = new dadBottle("Daddy")
Bottttt.name = "Keshava"
console.log(Bottttt.name);
