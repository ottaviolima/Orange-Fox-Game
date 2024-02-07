document.addEventListener('keydown', jump)

function jump() {
    const fox = document.getElementById('fox-running');
    fox.className = "jump"
    fox.src = 'images/fox-jumping.gif'
    

    setTimeout(() => {
        fox.className = "fox"
        fox.src = 'images/fox-running.gif'
    },500)
}  

const loop = setInterval(() => {

    const tree = document.getElementById('tree');
    const fox = document.getElementById('fox-running');
    const gameOver = document.getElementById('game-over');
    const reset = document.getElementById('reset');
    const treePosition = tree.offsetLeft;
    const foxPosition = +window.getComputedStyle(fox).bottom.replace('px', '');

    if (treePosition < 120 && treePosition > 0 && foxPosition < 80) {

        tree.style.animation = 'none'
        tree.style.left = `${treePosition}px`

        fox.style.animation = 'none'
        fox.style.bottom = `${foxPosition}px`
        gameOver.className = "game-over-visible"
        reset.className = "reset-visible"

        clearInterval(loop)
    }

},10)

function reset() {
    location.reload()
}