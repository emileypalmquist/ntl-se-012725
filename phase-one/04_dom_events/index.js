// ✅ Understand Static vs. Dynamic Web Applications

  // Static => Fixed, display the same content for each user
  // Dynamic => Display different content for each user, allow for user interaction

// ✅ Handling Click and Submit Events
     
  // addEventListener(event, callbackFunction);

    // when would we define callbackFunction as an anonymous function instead
    // of as a function reference?

      // addEventListener("click", () => console.log("Test"));
        // vs. 
      // addEventListener("click", doSomething);

// ✅ .preventDefault()

// event.preventDefault => prevents default event behavior (i.e., page reload upon form submission)

// ✅ HTML Forms

// .reset() => clears all values of HTML form elements

// -------------------------------------------

console.log("------------------------");
console.log("⬇️ Break Out Activites ⬇️");
console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
console.log("💡 Use console.log() To Check Answers 💡");
console.log("------------------------");

// 🚧 Break Out Activity 1: Handling Click Events

// 🚨 Comment out any conflicting code above before proceeding.

// array of pokemon objects (pokemons)
const pokemon = [
  {
    id: 1,
    name: "Bulbasaur",
    img: "./images/bulbasaur.png",
    likes: 4,
  },
  {
    id: 2,
    name: "Ivysaur",
    img: "./images/ivysaur.png",
    likes: 21,
  },
  {
    id: 3,
    name: "Venusaur",
    img: "./images/venasaur.png",
    likes: 7,
  },
  {
    id: 4,
    name: "Charmander",
    img: "./images/charmander.png",
    likes: 20,
  },
  {
    id: 5,
    name: "Charmeleon",
    img: "./images/charmeleon.png",
    likes: 11,
  },
];

const pokeContainer = document.getElementById("poke-container");
const pokeForm = document.getElementById("poke-form");
// pokeForm = DOM element with ID of "poke-form" => <div id="poke-form"></div>

function createNewElement(element, className, text) {
  const newElement = document.createElement(element)
  newElement.className = className
  newElement.textContent = text
  return newElement
}
// 1️⃣ Create a function (addLike) that:

//  ✔️ Accepts a single Pokemon object (pokemon) and likesNum (h5 displaying number of likes) as parameters

//  ✔️ Increments the Pokemon's number of likes by +1

//  ✔️ Updates the textContent of likesNum to reflect the Pokemon's updated number of likes

// 	💡 In renderPokemon(), add an event listener to likeBttn, making sure to specify the event as well as the 
//  callback function (addLike).

// 	💡 Use Chrome Dev Tools to view changes being made to the DOM

// 2️⃣ Create a function (deletePokemon) that:

//  ✔️ Accepts a single pokeCard as a parameter

//  ✔️ Removes the pokeCard from the DOM

// 	💡 In renderPokemon(), add an event listener to deleteBttn, making sure to specify the event as well as the 
//  callback function (deletePokemon).

// 	💡 Use Chrome Dev Tools to view changes being made to the DOM
function renderPokemon(pokemon) {
  const pokeCard = document.createElement('div')
  pokeCard.id = `poke-${pokemon.id}`
  pokeCard.className = 'poke-card'
  
  const pokeImg = document.createElement('img')
  pokeImg.src = pokemon.img
  pokeImg.alt = `${pokemon.name} image`
  
  const pokeName = document.createElement('h3')
  pokeName.textContent = pokemon.name
  
  const pokeLikes = document.createElement('h3')
  pokeLikes.textContent = "Likes: "
  
  const likesNum = createNewElement('h5', "likes-num", pokemon.likes)
  const likesBttn = createNewElement('button', "likes-bttn", "♥")
  const deleteBttn = createNewElement('button', "delete-bttn", "Delete")
  
  // ❗ add likeBttn event listener ❗
  let liked = false
  likesBttn.addEventListener('click', () => {
    // pokemon.likes = pokemon.likes + 1
    if (liked) {
      pokemon.likes--
    } else {
      pokemon.likes++
    }
    likesNum.textContent = pokemon.likes
    liked = !liked
  })
 
  // ❗ add deleteBttn event listener ❗
  
  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likesBttn, deleteBttn)
  pokeContainer.append(pokeCard)
}


pokeForm.addEventListener('submit', (event) => {
  // prevent form default behavior (refresh)
  event.preventDefault()
  // get last pokemon in pokemon array
  const lastPokemon = pokemon[pokemon.length - 1]

  // create new pokemon object with values from form and last pokemon id from pokemon array to add 1 for the id
  const onePokemon = {
    id: lastPokemon.id + 1,
    name: event.target['name-input'].value,
    img: event.target['img-input'].value,
    likes: 0
  }

  // add new pokemon to the DOM
  renderPokemon(onePokemon)

  // add new pokemon object to the end of the pokemon array so when a new pokemon so every pokemon will have a different id
  pokemon.push(onePokemon)

  // reset the form/ clear the inputs
  event.target.reset() 
})

// ✅ Check Answer: 
function init() {
  pokemon.forEach(renderPokemon);
}
  
init();


  


// 🚧 Break Out Activity 2: Handling Submit Events

  // 1️⃣ Create a function (createPokemon) that:

    //  ✔️ Accepts a single submit event as a parameter

    //  ✔️ Prevents default form submission behavior (i.e., page refresh)

    //  ✔️ Creates a new Pokemon object and adds it to the "pokemons" Array

      //  Use .querySelector() to select and retrieve the value of '#name-input',
      //  setting it as the "name" for the new Pokemon object 

      //  Use .slice() to pull the final Pokemon's id from "pokemons," incrementing
      //  by one and setting the new value as the "id" for the new Pokemon object

      //  Each new Pokemon object should have an "img" of './images/whos_that_pokemon.png'
      //  as well as 0 "likes" initially

    //  ✔️ Creates a pokeCard for the new Pokemon using renderPokemon()

    //  ✔️ Resets pokeForm using .reset() 

	// 	💡 Use Chrome Dev Tools to view changes being made to the DOM
  
    // function createPokemon(){
    //   // ❗ your code here
    // }

  // ✅ Check Answer: 
  // function init() {
  //   pokemons.forEach(renderPokemon);
  //   pokeForm.addEventListener('submit', createPokemon)
  // }
  
  // init()