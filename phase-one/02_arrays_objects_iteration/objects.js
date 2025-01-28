// ✅ Creating & Accessing Objects
const person = {
    name: 'Emiley',
    age: 30,
    speak: () => { console.log('hello')},
    'first name': 'Emiley',
    hello5: '10'
}
// const people = [person, { name: 'Bruno'}]
// console.log(person['age'])
// console.log(person.hello5)
// creating object literals
//   empty object (no key / value pairs)

//   object with single property (one key / value pair)
   
//   object with multiple properties of different data types (multiple key / value pairs)
    
// accessing object properties
//   bracket notation (in what situations would we need to use this?)

//   dot notation (better for readability)

//   convert object properties and values into an array
// console.log(Object.entries(person))

// ✅ Modifying Objects

    // destructively
    const dog = {
        name: 'Apollo'
    }

    dog.age = 2.5
    dog['tricks'] = [] 
        //   adding a property
        //   changing a property value
    dog.age = 3
        //   removing a property
    delete dog.age   

    // nondestructively
    const dogCopy = {...dog}
    dogCopy.age = 3
        // use the spread operator {...} to create a clone of the original object...
        //   ...that you can then modify without altering the original object
        // dogCopy.age = 2


// ✅ Iterating Over Objects vs. Arrays

//   for...in (iterate over keys of an object)
for (let key in dog) {
    console.log(dog[key])
}

//   for...of (iterate over values of an iterable object (e.g., array, string, etc.))
for (let property of Object.entries(dog)) {
    console.log(property)
}


