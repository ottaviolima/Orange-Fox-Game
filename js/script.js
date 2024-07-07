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
    fox.src = 'images/fox-jumping.gif';

    setTimeout(() => {
        fox.className = "fox"
        fox.src = 'images/fox-running.gif'
    }, 500)
}

function reset() {
    clearInterval(scoreInterval);
    clearInterval(loop);

    score = 0;
    document.getElementById('score').textContent = score;

    const tree = document.getElementById('tree');
    const fox = document.getElementById('fox-running');
    const gameOver = document.getElementById('game-over');
    const resetButton = document.getElementById('reset');

    tree.style.animation = '';
    tree.style.left = '';

    fox.style.animation = '';
    fox.style.bottom = '0px';

    gameOver.className = "game-over";
    resetButton.className = "reset";

    startCounting();
    loop = setInterval(() => {
        const treePosition = tree.offsetLeft;
        const foxPosition = +window.getComputedStyle(fox).bottom.replace('px', '');

        if (treePosition < 120 && treePosition > 0 && foxPosition < 80) {
            tree.style.animation = 'none';
            tree.style.left = `${treePosition}px`;
            fox.style.animation = 'none';
            fox.style.bottom = `${foxPosition}px`;
            gameOver.className = "game-over-visible";
            resetButton.className = "reset-visible";

            clearInterval(loop);
            clearInterval(scoreInterval); // Parando a contagem do score
        }
    }, 10);
};

document.addEventListener('DOMContentLoaded', () => {
    startCounting();

    document.addEventListener('keydown', jump)

    loop = setInterval(() => {
        const tree = document.getElementById('tree');
        const fox = document.getElementById('fox-running');
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

            clearInterval(loop);
            clearInterval(scoreInterval); // Parando a contagem do score
        }
    }, 10);
});

function jumpClick() {
    jump();
    const loop = setInterval(() => {
        const tree = document.getElementById('tree');
        const fox = document.getElementById('fox-running');
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

            clearInterval(loop);
            clearInterval(scoreInterval); // Para a contagem dos ponto
        }
    }, 10);
}

