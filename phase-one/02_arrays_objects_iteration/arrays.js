// ✅ Creating / Accessing Arrays

//   what are arrays?
// collection of related data
// can be any data type
// elements are data in an array
// each element has an index (position in array)
// index starts at 0 and increments

//   define an array with several values
function sayHello(){
    return 'hello'
}
const ourFirstArray = [1, 'str', [], sayHello]
// console.log(ourFirstArray[2])
// console.log(ourFirstArray[ourFirstArray.length - 1])

//   can contain a mix of data types
//   what is the technical term for these individual items?
//   count items in an array

// ✅ Modifying Arrays
const dogs = []
// adding elements to an array
//    add element to end of array
dogs[0] = 'Apollo'
dogs.push('Daisy')

// add element to beginning of array
// will overwrite current element at index of 0
// dogs[0] = 'Bailey'
dogs.unshift('Bailey')
// removing elements from an array
//   remove last element and return that element
// dogs.splice(1, 2, 'Deja') // remove n num of elements from the array at any given point, can also add elements
// dogs.pop() // remove the last element
// dogs.shift() // remove the first element
// const newDogsArray = ['Deja', ...dogs]
// newDogsArray.pop()


// ✅ Iterating Through Arrays
// loop - performing some action until a condition is met
// iterate - loop through a data structure and perform some action for each data in the structure

//   for loop
// let i = 0
// i = i + 1
// i += 1
// i++
// ++i
const names = ['Emiley', 'Carisa', 'Kailey', 'Conner']
for(let i = 0; i < names.length; i++) {
    console.log(`Hi ${names[i]}`)
}

//   for...of loop

for (const name of names) {
    console.log(name)
}

//   while loop
let i = 0
while (i < names.length) {
    console.log(names[i])
    i++
} 




