const counter = document.getElementById("counter")

function increment(){
    let current = parseInt(counter.innerHTML)
    counter.innerHTML = current + 1
}

function decrement(){
    let current = parseInt(counter.innerHTML)
    counter.innerHTML = current - 1
}

function reset(){
    counter.innerHTML = 0
}