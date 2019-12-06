let person={
    name:"Hamza"
}
person.age=19

console.log(person)
//primitive values always get passed by value whereas non primitve values get passed by
//reference all the time
let someArray=[]
someArray.name="hamza"
console.log(someArray)

console.log(typeof someArray)
//arrays are just objects with just some cool methods
console.log(typeof someArray==='object')//will evaluate to true
console.log(typeof person==='object')//same here
//we can use a dot operator to access properties if they are identified by a string literal
//like:
console.log(person.name)
//but not when we have numbers
const someOtherArray=[]
someOtherArray.push(34)
console.log(someOtherArray[0])
console.log(someOtherArray.length)
//someOtherArray[catchphrase]='Exception handlers love catchphrases'//this will give an error
someOtherArray["catchphrase"]='Exception handlers love catchphrases'//this won't
console.log(someOtherArray)
console.log(someOtherArray.length)//notice that it's length stays the same
//this is because when we do stuff with someOtherArray.something or someOtherArray["something"]
//then we are working with the array's properties and not its values


const someObject={
    rollno:'17103008',
    name:'John Doe',
    say:()=>{console.log('I am some object')}
}
someObject.say()

//KEYS AND FOREACH
const someOtherObject={
    name:'Bruce Wayne',
    age:19
}
const someOtherKeys=Object.keys(someOtherObject)
console.log(someOtherKeys)

someOtherKeys.forEach((element,index)=>{
    console.log(`key: ${index} - ${element}`)
    console.log(`value- ${someOtherObject[element]}`)
})

//Destructuring