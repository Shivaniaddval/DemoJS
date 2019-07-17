///Object Literal

const person = {
    firstName: 'Shivani',
    lastName: 'Sethi',
    age:30,
    hobbies:['music','movie','sport'],
    address: {
        street: '5 main street',
        city : 'gvg'    
    }
}
console.log(person)
console.log(person.age)
console.log(person.hobbies[1])
console.log(person.address.city)

  

const {firstName, lastName, address:{city}} = person;
console.log(firstName)
console.log(city)

person.email = "shivanisethi@gmail.com"
console.log(person.email)


const todos = [
    {
        id: 1,
        text: 'this is a text 1',
        isCompleted:true
    },
    {
        id:2,
        text: 'this is a text 2',
        isCompleted:false
    }, 
    {
        id: 3,
        text: 'this is a text 3',
        isCompleted:true
    }
];
console.log(todos)
console.log(todos[2].text);



/// JSON

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


/// LOOPS

//FOR LOOP

for(let i = 0; i< todos.length; i++){
    console.log(todos[i].text);
    console.log(`for loop is:${i}`);

}

for (let todo of todos){
    console.log(todo.id);
}

// while loop

let i = 0;
while(i<10){
    i++;
    console.log(`while loop number:,${i}`)
    
}
  
///for each, map,filter (Highr order methods)

todos.forEach(function(todo){
    console.log(todo.text);

});   

const todoText = todos.map(function(todo){
    return todo.text

});  
console.log(todoText);

const todoComp = todos.filter(function(todo){
    return todo.isCompleted == true

}).map(function(todo){
    return todo.text
});  
console.log(todoComp);




///// conditions

const val = 10;
const valY = 15;

if(val ===  11){
    console.log('val is 10');
}else if (val > 12 || valY < 20){
    console.log('val is  gretaer than  10');
}
else{
    console.log('val is  not 10');
}

const val2 = '10';

if(val2 === 10){
    console.log('val2 is 10');
}

//ternary operator

const tempX = 10;
const color = x > 10 ? 'Red' : 'Black'
console.log(color)

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'black':
        console.log('color is black');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
         console.log('no color');
         break;


}


/// Functions

function addNums(num1 = 2, num2 = 3){
    return num1 + num2;
}
console.log(addNums(4,5))

const addNumsCns = (num1 = 2, num2 = 3) =>  num1 + num2
 
console.log(addNumsCns(4,5))
