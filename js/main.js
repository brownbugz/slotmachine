// author @brownbugz - Sonnia Kemmer
//console.log('in javascript');

var startCredits = 50;

const spinCost = 5;

const startImage = "images/bigwin.jpg";

// variables
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

const reels = [0, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 3, 4, 5, 6, 4, 5, 6, 5, 6, 6];

var reel0, reel1, reel2;

var maxValue = reels.length;

// /*----- cached element references -----*/ 

/*----- functions -----*/

// initialize the game

function reset() {
    console.log("reset begins");
    wins = 0;
    startCredits = 50;
    resetReels();
    //change the reel images to bigwin
}

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

function spinBtn() {
    console.log('this spins the reels');
    //to-do: write a for loop
   reel0 = randomNum();
   reel1 = randomNum();
   reel2 = randomNum();
}

function changePhotos() {


}


// }
    // if (sqrLeft === null && sqrMiddle === null && sqrRight === null) {
    //     document.getElementById("photo"+idx).src = SLOTS[reel];
    //     console.log('start');


//     if (winCombos === )
// }

// // pushing button to spin starts the game / animates the reel


// }

// there should be a starting $50 amount for the player to use
// dollar amount will decrease upon spin
// dollar amount will increase upon win

// win combination to be checked


// every push of the button spends $5 
// the game resets when there's no more dollars to spend


