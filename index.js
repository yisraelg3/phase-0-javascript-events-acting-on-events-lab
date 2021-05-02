// Your code here

const dodger = document.getElementById("dodger"); 
const game = document.getElementById("game"); 

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace('px','');
const left = parseInt(leftNumbers, 10)

if (left > 0) {
dodger.style.left = `${left-1}px`}}

document.addEventListener('keydown', function(event) {if (event.key === 'ArrowLeft') {
moveDodgerLeft()}
})

function moveDodgerRight() {
const leftNumbers = dodger.style.left.replace('px','');
const left = parseInt(leftNumbers, 10)
const rightNumbers = game.style.width.replace('px','')
const right = parseInt(rightNumbers,10)
const widthNumbers = dodger.style.width.replace('px','')
const width = parseInt(widthNumbers, 10)

if (left <  right - width) {
    
dodger.style.left = `${left+1}px`}
}

document.addEventListener('keydown', function(event) {if (event.key === 'ArrowRight') {
    moveDodgerRight()}
    })