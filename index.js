let message = document.querySelector('#message')
console.log('hello world')
function addMovie(event) {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector('ul').appendChild(movie)
    inputField.value = ''
}
function deleteMovie(event) {
    message.textContent = event.target.parentNode.children[0].textContent + ' deleted!'
    event.target.parentNode.remove()
    revealMessage()
}
function crossOffMovie(event) {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')) {
        message.textContent = event.target.textContent + ' watched!'
    } else {
        message.textContent = event.target.textContent + ' added back!'
    }
    revealMessage()
}
function revealMessage() {
    message.classList.remove('hide')
    setTimeout(function() {
        message.classList.add('hide')
    }, 1000)
}
document.querySelector('form').addEventListener('submit', addMovie)