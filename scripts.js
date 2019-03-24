// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function () {
  // Begin accessing JSON data here

// Begin accessing JSON data here
var data = JSON.parse(this.response)

if (request.status >= 200 && request.status < 400 ){
data.forEach(movie => {
  console.log(movie.title)
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
