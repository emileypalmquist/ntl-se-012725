// ✅ Array Iteration Methods
    // What are callback functions?
    // a function that is passed as an argument to another function and that function calls it
    function callback() {
        console.log('I am a callback function')
    }

    // takes in another function or returns a function
    function higherOrderFunction(someFunction) {
        someFunction()
    }

    higherOrderFunction(callback)


    // .forEach()
    function getsCalledForEachElement(element) {
        console.log(element)
    }
    // perform some action for each element in the array
    // dogs.forEach(getsCalledForEachElement)
    
const dogs = [
    {id: 1, name: 'Bailey', breed: 'Yorkie'},
    {id: 2, name: 'Daisy', breed: 'Golden Retriever'}, 
    {id: 3, name: 'Apollo', breed: 'Golden Retriever'}
]
    // .map()
const names = dogs.map((dog) => {
    console.log(dog.name)
    // console.log(dog['name'])
    return dog.names
})
console.log(names)
// console.log(dogs[1].name)
    // .filter()
        // Shallow copy

    // .find()



// 🚧 Break Out Activity 1:
const strings = ['hello', 'hi', 'world', 'potato']
/* 
    create a function that accepts an array of strings
    and prints out each element in the array if
    the string has more than 5 characters
*/



// 🚧 Break Out Activity 2:
const nums = [2, 3, 4]
/*  
    create a function that accepts an array of numbers 
    it will create a new array of the numbers squared 
    returns the new array of squared numbers
*/



// 🚧 Break Out Activity 3:
const numbers = [2, 7, 5, 3, 10, 4]
/* 
    create a function that accepts an array of numbers 
    it will return a new array with the numbers 
    from the array that are greater than 4
*/



