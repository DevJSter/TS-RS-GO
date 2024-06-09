interface Me {
    name:string
    age:number
}

export function name(person:Me) {
    return "Hi from " + person.name + " I'm "+ person.age + "years old"    
}

console.log(name({
    name:"Shubham",
    age:25
}))

interface PersonClass{
    name:string
    age :number
}

class Person implements PersonClass{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name= name;
        this.age =age;
    }
}

const personobj = new Person("SHubham",21);
console.log(personobj);