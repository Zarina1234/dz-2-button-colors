let red = document.querySelector('.red')
let yellow = document.querySelector('.yellow')
let green = document.querySelector('.green')
let reset = document.querySelector('.btn-reset')

let body = document.body

red.addEventListener('click', () => {
    setTimeout(() => {
        body.style.backgroundColor = "red"
    },1000)
    console.log(red);
})
yellow.addEventListener('click', () => {
    setTimeout(() => {
        body.style.backgroundColor = "yellow"
    },1000)
    console.log(yellow);
})
green.addEventListener('click', () => {
    setTimeout(() => {
        body.style.backgroundColor = "green"
    },1000)
    console.log(green);
})
reset.addEventListener('click', () => {
    setTimeout(() => {
        body.style.backgroundColor = "white"
    },500)
    console.log(reset);
})



