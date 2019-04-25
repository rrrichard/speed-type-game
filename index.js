let time = 5;
let score = 0;
let isPlaying;
let words = ['instrument', 'index', 'hardship',
    'asylum', 'detective'];

window.addEventListener('load', init);

function init(){
    console.log(init)
    showWord(words);
}

function showWord(words){
    //fix this bit
    let randIndex = Math.floor(Math.random() * words.length);
    console.log(randIndex);
}