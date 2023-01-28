let clickMe = document.getElementById("clicker")
let counter = document.getElementById("display")

display.innerHTML = localStorage.getItem('value')

let count = 0;

clickMe.addEventListener('click', function() {
    localStorage.setItem('value', count++)
    display.innerHTML = localStorage.getItem('value');
})