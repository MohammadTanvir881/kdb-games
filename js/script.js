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
        const scoreRating = document.getElementById('rating-score');
        // console.log(scoreRating)
        
        
        setValueAfterEndTheGame('game-score', finalScore)
    // if(finalScore > 20 && finalScore <= 50){
    //     scoreRating.innerText = 'You Are Noob At Typing';
    // }
    // else if( finalScore <= 100){
    //     scoreRating.innerText = 'You Are Doing Good';
    // }
    // else if( finalScore <= 150){
    //     scoreRating.innerText = 'You Are On A right Track . Keep it up';
    // }
    // else if( finalScore <= 200){
    //     scoreRating.innerText = 'You Are Doing Excellent Brohh';
    // }
    // else if( finalScore <=300){
    //     scoreRating.innerText = 'Dammm Sigma Exixts';
    // }
    // else if( finalScore <= 500){
    //     scoreRating.innerText = 'Contact To Elon Mask';
    // }
    // else if( finalScore <= 2000){
    //     scoreRating.innerText = 'Are You Gonna Break My Game???';
    // }
    // else if( finalScore <= 5000){
    //     scoreRating.innerText = 'No Comments For You . You Are In Another Level';
    // }
        
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
    setValueAfterEndTheGame('current-score', 0);
    const scoreRating = document.getElementById('rating-score');
    scoreRating.innerText = 'You Are Noob At Typing';
    console.log(scoreRating)
    
    
}