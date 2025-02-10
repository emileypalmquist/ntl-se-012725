let addToy = false;
const BASE_URL = "http://localhost:3000/toys"
const toyCollection = document.getElementById('toy-collection')

document.addEventListener("DOMContentLoaded", () => {
  const toyFormContainer = document.querySelector(".container");
  const addBtn = document.querySelector("#new-toy-btn");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

function listenForToyLikes(likebttn, toy, likesP) {
  likebttn.addEventListener('click', () => {
    toy.likes++

    const config = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        likes: toy.likes
      })
    }

    fetch(`${BASE_URL}/${toy.id}`, config)
    .then((resp) => resp.json())
    .then((updatedToy) => likesP.textContent = `${updatedToy.likes} Likes`)
    .catch(console.log)
  })
}

function displayToy(toy) {
  const toyCard = document.createElement('div')
  toyCard.className = 'card'
  // toyCard.classList.add('card')

  const h2 = document.createElement('h2')
  h2.textContent = toy.name

  const image = document.createElement('img')
  image.className = 'toy-avatar'
  image.src = toy.image
  image.alt = `${toy.name} image`

  const p = document.createElement('p')
  p.textContent = `${toy.likes} Likes`

  const button = document.createElement('button')
  button.textContent = "Like ❤️"
  button.className = 'like-btn'
  button.id = toy.id

  const deleteBttn = document.createElement('button')
  deleteBttn.textContent = "🗑️"

  deleteBttn.addEventListener('click', () => {
    const config = {
      method: 'DELETE'
    }
    fetch(`${BASE_URL}/${toy.id}`, config)
    .then((resp) => resp.ok)
    .then(() => toyCard.remove())
    .catch(console.log)
  })

  listenForToyLikes(button, toy, p)

  toyCard.append(h2, image, p, button, deleteBttn)
  toyCollection.appendChild(toyCard)
}

function getToys() {
  // get all toys 
  fetch(BASE_URL)
  .then((resp) => resp.json())
  .then((toys) => toys.forEach(displayToy))
}

function listenForNewToy() {
  // find the form and add a submit event listener
  const toyForm = document.querySelector('form.add-toy-form')
  toyForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const newToyObj = {
      name: event.target.name.value,
      image: event.target.image.value,
      likes: 0
    }

    const fetchConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(newToyObj)
    }
    
    fetch(BASE_URL, fetchConfig) 
    .then((resp) => resp.json())
    .then((newToy) => {
      event.target.reset() 
      displayToy(newToy)
    })
    .catch((error) => console.log(error))
  })
}

function init() {
  // anything that needs to run when the page loads gets called here
  getToys()
  listenForNewToy()
}

init()