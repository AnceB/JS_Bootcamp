let count = document.getElementById('number')

function increment() {
    count++
    number.innerHTML = count
}

function decrement() {
    count--
    number.innerHTML = count
}

function reset() {
    count = 0
    number.innerHTML = 0
}