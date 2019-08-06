// author @brownbugz - Sonnia Kemmer 2019 (C)
//console.log('in javascript');

// const variables
const spinCost = 5;

const startImage = "images/bigwin.jpg";

const reels = [0, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 3, 4, 5, 6, 4, 5, 6, 5, 6, 6];

const payouts = [150, 120, 90, 60, 30, 15, 5];

const grapes = 6;

// variables
var startCredits = 50;

var PHOTOS = [
    "images/seven.png",         //0
    "images/apple.png",         //1
    "images/cherry.png",        //2
    "images/bell.png",          //3
    "images/orange.png",        //4
    "images/watermelon.png",    //5
    "images/grapes.png"         //6
];


var wins = 0;

var reel0, reel1, reel2;

var maxValue = reels.length;


/*----- functions -----*/

// initialize the game

function reset() {
    console.log("reset begins");
    wins = 0;
    startCredits = 50;
    resetReels();
}

    //change the reel images to startImage
function resetReels() {
    console.log('resetReels'); 
    // to-do: make it to a for loop
    document.getElementById('photo0').src = startImage;
    document.getElementById('photo1').src = startImage;
    document.getElementById('photo2').src = startImage;
}

function randomNum() {
    let reelValue = Math.floor(Math.random() * maxValue);
    reelValue = reels[reelValue];
    console.log(reelValue);
    return reelValue;
}

// // pushing button to spin starts the game / animates the reel
function spinBtn() {
    console.log('this spins the reels');
    //to-do: write a for loop
   reel0 = randomNum();
   reel1 = randomNum();
   reel2 = randomNum();
}

function changePhotos() {
    document.getElementById('photo0').src = PHOTOS[randomNum()];
    document.getElementById('photo1').src = PHOTOS[randomNum()];
    document.getElementById('photo2').src = PHOTOS[randomNum()];
}

function spinEffect() {
    
}


// there should be a starting $50 amount for the player to use
// dollar amount will decrease upon spin
// dollar amount will increase upon win

// win combination to be checked


// every push of the button spends $5 
// the game resets when there's no more dollars to spend


