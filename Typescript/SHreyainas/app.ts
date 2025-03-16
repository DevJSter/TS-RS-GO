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
    constructor(public readonly name : string) {}
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
Bottttt.name = "Keshava" //readonly helps to catch bugs but ts will compile anyways -> hmmmmmmmmmmmmmmmmm
console.log(Bottttt.name);


// Functions
// callbacks in fn calls
function meow(name : string , cb : (value :string) => void ) {
    cb("JAi Shree ram");
} 

meow("SHUBHAM" , (value : string) => {
    console.log(value);
    
})

// - ? Rest / Spread Parameter


function sum(...arr : number[]) {
    console.log(...arr);
    
}

sum(1,2,3,4,5)


// ts fnc signatures

function abcd(a : string) : void {

}

// define parms types and return type too

function abcd1( s : string , a : number ) : any {
    console.log(s);
    return a; 
}

// Generics

// Generic Function
// Generic intgerfaces
// generix classes

// hum ek fn ko use kart ewakt bata sakte hey ki fn args ko kis type se treat kare

function gege<T>(e: T) {

}

gege<string>("meow") 
gege<number>(45)
gege<boolean>(true)
gege<any>("jdkhvbf")
gege("helloo") // <string> do ya kais bhii do doesnt matteer

// Generiic Interfaces 

interface meowobj <Hello> {
    username : string;
    pass : number;
    key : Hello
}
//  Generics can also be  used | with this 
function meoowmeow(obj : meowobj<string | number>) {

}

meoowmeow({    
    username : "shubham",
    pass : 654,
    key : 44
  }
)


class Bottle<B> {
    constructor(public key : B)
    {}
}

let b12 = new Botlle("Cokeak");
console.log(b12);

// Type assertion 
// Type casting
// NOn null assertion operator

