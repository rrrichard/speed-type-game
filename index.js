let time = '0';
let score = 0;
let isPlaying;
let words = ['instrument', 'index', 'hardship',
    'asylum', 'detective', 'threshold', 'broken', 'articulate'];
let wordInput = document.querySelector('#wordInput');
let currentWord = document.querySelector('#currentWord');
let message = document.querySelector('#message');
window.addEventListener('load', init);

function init(){
    showWord(words);
    wordInput.addEventListener('input', startMatch);
    setInterval(countdown, 1000);
    setInterval(checkStatus, 50);
}

function showWord(words){
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
        message.style = 'color: red';
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
        message.style = 'color: green';

        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

function preventMessage(){
    if(!startMatch()){
        message.innerHTML = '';
    }
}