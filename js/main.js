// author @br0wnbugz - Sonnia Kemmer 2019 (C)

// const variables
const spinCost = 5;

const startImage = "images/bigwin.jpg";

const reels = [
    0, 1, 2, 3, 4, 5, 6, 
    1, 2, 3, 4, 5, 6, 
    2, 3, 4, 5, 6, 
    3, 4, 5, 6, 
    4, 5, 6, 
    5, 6, 
    6, 
    6, 
    6, 5, 
    6, 5, 4, 
    6, 5, 4, 3, 
    6, 5, 4, 3, 2, 
    6, 5, 4, 3, 2, 1, 
    6, 5, 4, 3, 2, 1, 0
];

const payouts = [
    1000, //0
    500,  //1
    250,  //2
    150,  //3
    100,  //4
    50,   //5
    5     //6
];

// variables
var spinAudio = new Audio("audio/spin.mp3");

var winAudio = new Audio("audio/loudwin.mp3");

var bankTotal = 50;

var PHOTOS = [
    "images/seven.png",         //0
    "images/apple.png",         //1
    "images/cherry.png",        //2
    "images/bell.png",          //3
    "images/orange.png",        //4
    "images/watermelon.png",    //5
    "images/grapes.png"         //6
];

var pays = 0;

var wins = 0;

var reel0, reel1, reel2;

var maxValue = reels.length;

// event listeners
document.getElementById('spinner').addEventListener('click', spinBtn);

// functions
function reset() {
    wins = 0;
    bankTotal = 50;
    resetReels();
    showBankTotal();
}

function resetReels() {
    document.getElementById('photo0').src = startImage;
    document.getElementById('photo1').src = startImage;
    document.getElementById('photo2').src = startImage;
}

function randomNum() {
    let reelValue = Math.floor(Math.random() * maxValue);
        reelValue = reels[reelValue];
        return reelValue;
}

function spinBtn() {
    if (bankTotal > 0) {
        reel0 = randomNum();
        reel1 = randomNum();
        reel2 = randomNum();
        changePhotos();
        earnings(reel0, reel1, reel2);
        showBankTotal();
        showMeMyWins();
        spinDeducts();
        playSpinAudio();
    } else {
        reset();
    }
}

function changePhotos() {
    document.getElementById('photo0').src = PHOTOS[reel0];
    document.getElementById('photo1').src = PHOTOS[reel1];
    document.getElementById('photo2').src = PHOTOS[reel2];
}

function earnings(value1, value2, value3) {
    if (value1 == value2 && value2 == value3) {
        pays = payouts[value1];
        bankTotal = bankTotal + pays;
    }
    showBankTotal();
}
    
function showBankTotal() {
    document.getElementById('bank').innerHTML = ("Credits: " + bankTotal);
}

function spinDeducts() {
    bankTotal = bankTotal - spinCost;
    document.getElementById('bank').innerHTML = ("Credits: " + bankTotal);
}

function showMeMyWins(){
    document.getElementById('winnings').innerHTML = ("Won: " + pays);
    playWinAudio();
}

function playSpinAudio() {
    return spinAudio.play();
}

function playWinAudio() {
    if (pays > 0) return winAudio.play();
}

