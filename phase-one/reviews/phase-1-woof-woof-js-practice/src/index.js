// find the div with the id of dog-bar
// to fetch all the dog data from the server (http://localhost:3000/pups)
// once we have the dog data
//    iterate through the array of dogs
//    for each dog we need to create a span
//    add the dogs name as text content to the span
//    add the span to the dog-bar div

// listen for click on the span with the dog's name
// when the click happens
//      display dog info
//      - find div with the id of "dog-info"
//       - create an img tag with the pup's image url
//       - add the src to img with image from the dog object (we got from the fetch)
//       - create an h2
//       - add textcontent to the h2 with the dogs name
//       - create button
//       - add textcontent to the button
//            - "Good Dog!" if isGoodDog is true
//            - "Bad Dog!" if isGoodDog is false
//       - remove current elements
//       - add the img, h2, and button to the dog-info div

// listen for click on Good Dog/Bad Dog button
// when click happens:
//       we need to change the text from good to bad or bad to good


// find div with id dog-bar
const dogBar = document.getElementById("dog-bar") 
const dogInfo = document.getElementById("dog-info")

function removeOldDogInfo() {
    // dogInfo.innerHTML = ''
    while(dogInfo.firstChild) {
        dogInfo.removeChild(dogInfo.lastChild)
    }
}

function updateDogButtonText(dogObj, button) {
    const text = dogObj.isGoodDog ? "Good Dog!" : "Bad Dog!"
    button.textContent = text
    // if (button.textContent === "Good Dog!") {
    //     button.textContent = "Bad Dog!"
    // } else {
    //     button.textContent = "Good Dog!"
    // }
}

function listenForButtonClick(button, dogObj) {
    button.addEventListener('click', () => {
        dogObj.isGoodDog = !dogObj.isGoodDog
        updateDogButtonText(dogObj, button)
    })
}

function displayDogInfo(dogObj) {
    const image = document.createElement('img')
    image.src = dogObj.image

    const h2 = document.createElement('h2')
    h2.textContent = dogObj.name

    const button = document.createElement('button')
    updateDogButtonText(dogObj, button)

    listenForButtonClick(button, dogObj) 

    removeOldDogInfo()
    dogInfo.append(image, h2, button)
}

function listenForSpanClick(spanClickOn, dogObj) {
    spanClickOn.addEventListener('click', () => displayDogInfo(dogObj))
}

function addDogToDogBar(dog) {
    // create new span
    const span = document.createElement('span')
    // add the dog's name as textcontent to the new span
    span.textContent = dog.name
    // add the new span with the dog's name to the dogBar
    dogBar.appendChild(span)
    listenForSpanClick(span, dog)
}

function displayDogs(dogs) {
    dogs.forEach(addDogToDogBar)
}

function getDogs() {
    fetch('http://localhost:3000/pups')
    .then((response) => response.json())
    .then(displayDogs)
}

function main() {
    getDogs()
}

document.addEventListener('DOMContentLoaded', () => {
    // all code would need to run here
    main()
})

// const dogBar = document.getElementById("dog-bar") 
// fetch('http://localhost:3000/pups')
// .then((response) => response.json())
// .then((dogs) => dogs.forEach((dog) => {
//     // create new span
//     const span = document.createElement('span')
//     // add the dog's name as textcontent to the new span
//     span.textContent = dog.name
//     // add the new span with the dog's name to the dogBar
//     dogBar.appendChild(span)
// }))
