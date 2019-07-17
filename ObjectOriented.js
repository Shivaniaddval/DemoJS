//Constructor function

function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    
}

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}


// Instantiate Object

const person1 = new Person('shivani','sethi','05-11-1992');
const person2 = new Person('abc','dev','04-11-1992');
console.log(person1)
console.log(person2.dob.getFullYear())
console.log(person2.getFullName())

////// Class     

class PersonCl{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
        
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }

    
    
}
const person1Obj = new PersonCl('shivi','sethi','05-11-1990');
const person2Obj = new PersonCl('abcdef','devdf','04-11-1991');
console.log(person1Obj)
console.log(person2Obj.dob.getFullYear())
console.log(person2Obj.getFullName())