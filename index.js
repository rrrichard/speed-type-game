let time = 5;
let score = 0;
let isPlaying;
let words = ['instrument', 'index', 'hardship',
    'asylum', 'detective'];

window.addEventListener('load', init);

function init(){
    console.log(init)
    showWord(words);
    setInterval(countdown, 1000);
    setInterval(checkStatus, 50);
}

function showWord(words){
    //fix this bit
    let currentWord = document.querySelector('#current-word')
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

    let message = document.querySelector('#message')
    if (!isPlaying && time === 0){
        message.innerHTML = 'Game Over!';
    }
}