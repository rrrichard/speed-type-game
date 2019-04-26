let time = 5;
let score = 0;
let isPlaying;
let words = ['instrument', 'index', 'hardship',
    'asylum', 'detective'];
let wordInput = document.querySelector('#word-input');
let currentWord = document.querySelector('#current-word');
let message = document.querySelector('#message');
window.addEventListener('load', init);

function init(){

    showWord(words);
    wordInput.addEventListener('input', startMatch);
    setInterval(countdown, 1000);
    setInterval(checkStatus, 50);
}

function showWord(words){
    //fix this bit

    let randIndex = Math.floor(Math.random() * words.length);

    currentWord.innerHTML = words[randIndex];
}

function countdown(){

    let timeDisplay = document.querySelector('#time')
    if (time > 0){
        time--;
    } else if (time === 0){
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

function checkStatus(){


    if (!isPlaying && time === 0){
        message.innerHTML = 'Game Over!';
        score = -1;
    }
}

function startMatch(){

    let scoreDisplay = document.querySelector('#score');
    if (matchWords()){
        isPlaying = true;
        time = 6;
        showWord(words)
        wordInput.value = '';
        score++;
    }

    if (score === -1){
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}