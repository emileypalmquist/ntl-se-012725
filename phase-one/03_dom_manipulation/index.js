// ✅ What is the DOM?

	// Chrome Dev Tools

// ✅ Creating / Reading DOM Elements
console.log(document)
// CSS selectors
// id - #poke-container
// classname - .form-label
// tag name - h1
const pokeContainer = document.querySelector('div#poke-container')
// const pokeContainer = document.getElementById('poke-container')
// const formLabels = document.querySelectorAll('.form-label')
const formLabels = document.getElementsByClassName('form-label')
const divs = document.getElementsByTagName('div')
const newDiv = document.createElement('div')
const h2 = document.createElement('h2')
h2.textContent = "Pikachu"

const p = document.createElement('p')
p.innerText = "Mouse Pokemon"

newDiv.append(h2, p)
pokeContainer.appendChild(newDiv)
newDiv.remove()

    // .createElement() => creates one DOM element

	// .querySelector() => returns the first matching DOM element

	// .querySelectorAll() => returns an array of matching DOM elements

	// .getElementById() => returns the DOM element with matching Id

	// .getElementsByClassName() => returns an array of DOM elements with matching Class

	// .getElementsByTagName() => when is this especially useful?
        
// ✅ Updating / Deleting DOM Elements
        
	// .append

	// .remove()

// ✅ .innerHTML vs. .innerText vs. .textContent

  	// .innerHTML => if you want to insert HTML within a DOM element

	// .innerText => if you only want to insert text, shows only human-readable elements

	// .textContent => if you only want to insert text, shows formatting of elements

// -------------------------------------------

console.log("------------------------");
console.log("⬇️ Break Out Activites ⬇️");
console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
console.log("💡 Use console.log() To Check Answers 💡");
console.log("------------------------");

// 🚧 Break Out Activity 1: Creating / Reading / Updating DOM Elements

  // 🚨 Comment out any conflicting code above before proceeding.

		// array of pokemon objects
		
		// container to store DOM element with ID of "poke-container" => <div id="poke-container"></div>
		
		// 1️⃣ Given "pokemon" and "pokemonContainer" above, create a function (renderPokemon) that:
		
		//  ✔️ Accepts a single "pokemon" object
		
		//  ✔️ Creates a "div" element to contain information about each Pokemon and stores the "div" in a variable (pokeCard)
		//	Assign pokeCard a unique ID with the Pokemon's "id" prepended by "poke-" (i.e., "poke-1" for Bulbasaur)
		//	Assign pokeCard a className of "poke-card"
		
		//  ✔️ Creates an "img" element for each Pokemon and stores the "img" in a variable (pokeImg)
		//	Assign pokeImg a source (src) linking to the Pokemon's image
		// 	Assign pokeImg a unique alt with the Pokemon's name followed by " image" (i.e., "bulbasaur image")
		
		//	✔️ Creates an "h3" element for each Pokemon and stores the element in a variable (pokeName)
		// 	Use textContent to fill in the heading with the Pokemon's name
		
		//	✔️ Appends all variables to "pokeCard" before appending "pokeCard" to "pokeContainer"
		// 	Use append() as necessary
		
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

const pokemonContainer = document.getElementById("poke-container");

function renderPokemon(onePokemon) {
	const pokeCard = document.createElement('div')
	pokeCard.id = `poke-${onePokemon.id}`
	pokeCard.classList.add('poke-card')
	
	const pokeImg = document.createElement('img')
	pokeImg.src = onePokemon.img
	pokeImg.alt = `${onePokemon.name} image`
	// onePokemon.name + " image"

	const pokeName = document.createElement('h3')
	pokeName.textContent = onePokemon.name

	pokeCard.append(pokeImg, pokeName)
	pokeContainer.appendChild(pokeCard)
}

pokemon.forEach(renderPokemon)
// forEach grabs each element from the array and calls renderPokemon passing the element as an argument
// renderPokemon(pokemon[0])
// renderPokemon(pokemon[1])

	// 	💡 Use Chrome Dev Tools to view changes being made to the DOM

	// 	💡 Take a look at "styles.css" to see how the DOM Elements we're building out correspond to CSS class and ID selectors.

	// 	✨ BONUS: Try to reduce redudancy (DRY Principle) in your code through the use of JS functions and variables.





	// ✅ Check Answer: 
	// function init() {
	// 	pokemon.forEach(renderPokemon);
	// }

	// init();

// 🚧 Break Out Activity 2: Creating / Reading / Updating Elements

  // 🚨 Comment out any conflicting code above before proceeding.

  // 1️⃣ Add the following capabilities to renderPokemon:

	//  ✔️ Creates an "h3" element for each Pokemon and stores the element in a variable (pokeLikes)
		// 	Use textContent() to fill in the heading with "Likes: "
	
	//  ✔️ Creates an "h5" element for each Pokemon and stores the element in a variable (likesNum)
		// 	Assign likesNum a className of "likes-num"
		// 	Use textContent() to fill in the heading with the Pokemon's number of likes

	//  ✔️ Creates a "button" element for each Pokemon and stores the element in a variable (likesBttn)
		// 	Assign likesBttn a className of "likes-bttn"
		// 	Use textContent() to fill in the button with a label, "♥"

	//  ✔️ Creates a "button" element for each Pokemon and stores the element in a variable (deleteBttn)
		// 	Assign deleteBttn a className of "delete-bttn"
		// 	Use textContent() to fill in the button with a label, "Delete"

	//	✔️ Appends all variables to "pokeCard" before appending "pokeCard" to "pokeContainer"
		// 	Use append() as necessary

	// 	💡 Use Chrome Dev Tools to view changes being made to the DOM
	
	// 	💡 Take a look at "styles.css" to see how the DOM Elements we're building out correspond to CSS class and ID selectors.

	// 	✨ BONUS: Try to reduce redudancy (DRY Principle) in your code through the use of JS functions and variables.





	// ✅ Check Answer: 
	// function init() {
	// 	pokemon.forEach(renderPokemon);
	// }

	// init();