function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabetString.split('');
    const randomNumber = Math.random()*25;
    const number = Math.round(randomNumber);
    const alphabets = alphabetArray[number];
    return alphabets;
    
    
}
function setBackGroundColorById(elementId){
   const element = document.getElementById(elementId);
   element.classList.add('bg-orange-400')
    
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function setValueOfScore(elementId){
    const element = document.getElementById(elementId);
    const currentScore = element.innerText;
    const score = parseInt(currentScore);
    const finalScore = score + 1;
    return finalScore;

}

function setValueOfLife(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementResult = parseInt(elementText);
    const finalElement = elementResult - 1;
    return finalElement;
}

function setValueAfterEndTheGame(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}