/* eslint-disable for-direction */
// Create a request variable and assign a new XMLHttpRequest object to it.
// eslint-disable-next-line getter-return
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function () {
  // Begin accessing JSON data here

// Begin accessing JSON data here
var data = JSON.parse(this.response)

// basically, if the request isn't 404 Not found, and is successful, then for each item in 
// the JSON, put that item into a 'card' element, and display it in the container
if (request.status >= 200 && request.status < 400 ){
data.forEach(movie => {
    const card = document.createElement('div')
    card.setAttribute('class', 'card')

    const h1 = document.createElement('h1')
    h1.textContent = movie.title

    const p = document.createElement('p')
    movie.description = movie.description.substring(0, 300) // limit to 300 chars
    p.textContent = `${movie.description}...` //end with an ellpisis

    //append the cards to the container element
    container.appendChild(card)

    //each card will contain an h1 and a p
    card.appendChild(h1)
    card.appendChild(p)

})
} else {
    console.log('error')
}
}

request.send()

const app = document.getElementById('root') // this is a div in the body of the index.html
const logo = document.createElement('img') // this creates img element space in the DOM
logo.src = 'logo.png' //this sets the source of the image to be the pic we have on file
const container = document.createElement('div') // this creates another div, container, to which we ascribe a class
container.setAttribute('class', 'container') // we set the div's class as container
app.appendChild(logo)  // this is how we place the logo and container into the app 'root'
app.appendChild(container)
