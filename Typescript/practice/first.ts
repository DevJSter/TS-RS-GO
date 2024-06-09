// interface Me {
//     name:string
//     age:number
// }

// export function name(person:Me) {
//     return "Hi from " + person.name + " I'm "+ person.age + "years old"    
// }

// console.log(name({
//     name:"Shubham",
//     age:25
// }))



// interface PersonClass{
//     name:string
//     age :number
//     // genderProps :PersonGender
// }

// class Person implements PersonClass{
//     name:string;
//     age:number;
//     // genderProps: PersonGender

//     constructor(name:string,age:number){
//         this.name= name;
//         this.age =age;
//     }
// }

// const personobj = new Person("SHubham",21);
// console.log(personobj);

// interface PersonGender {
//     gender:string;
//     orientation:string;
//     pronouns:string
// }

// function greet(person : PersonClass):string{
//     return "Hello there Mr." + this.name + "of age and gender " + this.age  +
// } 

interface Circle {
    radius:number
}

interface Reactangle {
    width:number
    length:number
}

interface Square {
    side:number
}

type shape = Reactangle | Square | Circle

// | with this the OR/Intersection property of the ts and & Union property of ts


enum Arithmetic {
    Add,
    Mul,
    Sub,
    Div
}

function calculate(a:number,b:number,type:Arithmetic){
    console.log(type) //  Arithmetic[Arithmetic["Div"] = 3] = "Div";
    return 1;
}

const ans = calculate(1,2, Arithmetic.Div )
console.log(ans)