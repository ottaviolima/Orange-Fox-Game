let score = 0; 

function startCounting() {
    const scoreDisplay = document.getElementById('score');
    scoreInterval = setInterval(() => {
        score++;
        scoreDisplay.textContent = score;
    }, 1000); 
}

function jump() {
    const fox = document.getElementById('fox-running');
    fox.className = "jump"
    fox.src = 'images/fox-jumping.gif'

    setTimeout(() => {
        fox.className = "fox"
        fox.src = 'images/fox-running.gif'
    }, 500)
}

function reset() {
    location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
    startCounting();

    document.addEventListener('keydown', jump)

    loop = setInterval(() => {
        const tree = document.getElementById('tree');
        const fox = document.getElementById('fox-running');
        const howToPlay = document.getElementById('how-to-play');
        const gameOver = document.getElementById('game-over');
        const resetButton = document.getElementById('reset');
        const treePosition = tree.offsetLeft;
        const foxPosition = +window.getComputedStyle(fox).bottom.replace('px', '');

        if (treePosition < 120 && treePosition > 0 && foxPosition < 80) {
            tree.style.animation = 'none';
            tree.style.left = `${treePosition}px`;
            fox.style.animation = 'none';
            fox.style.bottom = `${foxPosition}px`;
            gameOver.className = "game-over-visible";
            resetButton.className = "reset-visible";
            howToPlay.className = "how-to-play-visible";

            clearInterval(loop);
            clearInterval(scoreInterval); // Parando a contagem do score
        }
    }, 10);
});
