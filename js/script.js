function displayElementFunction() {
    hideElementById('home');
    showElementById('play-ground');
    continueGame()
}

document.addEventListener('keyup', KeyboardButtonPressed);
function KeyboardButtonPressed(event) {
    console.log(event.key)
    const keyPressed = event.key;
    const expectedKeyPressed = document.getElementById('current-alphabet');
    const expectedKey = expectedKeyPressed.innerText.toLowerCase();
    if (keyPressed ==='Escape'){
        gameOver()
    }
    if (keyPressed === expectedKey) {
    
        removeBackgroundColorById(keyPressed)
        const finalScore = setValueOfScore('current-score');
        const score = document.getElementById('current-score');
        score.innerText = finalScore;
        setValueAfterEndTheGame('game-score', finalScore)
        continueGame();

    }
    else {
        const life = setValueOfLife('current-life');
        const gameLife = document.getElementById('current-life');
        gameLife.innerText = life;
        if (life === 0) {
            gameOver()
        }
    }

}


function continueGame() {
    // create a random alphabet
    const alphabets = getRandomAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabets;
    setBackGroundColorById(alphabets)

}

function gameOver() {
    hideElementById('play-ground')
    showElementById('total-score')


}

function play() {
    hideElementById('total-score');
    showElementById('play-ground')
    setValueAfterEndTheGame('current-life', 5);
    setValueAfterEndTheGame('current-score', 0)
}