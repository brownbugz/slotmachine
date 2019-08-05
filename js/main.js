// author @brownbugz - Sonnia Kemmer

// variables
var SLOTS = {
    'null': 'slots-images/bigwin.jpg',
    '0': 'slots-images/seven.png',
    '1': 'slots-images/cherry.png',
    '2': 'slots-images/bell.png',
    '3': 'slots-images/orange.png',
    '4': 'slots-images/watermelon.png',
    '5': 'slots-images/grapes.png',
    '6': 'slots-images/apple.png'
}

var IMAGES = {
    'null': 'bigwin',
    '0': 'seven',
    '1': 'cherry',
    '2': 'bell',
    '3': 'orange',
    '4': 'watermelon',
    '5': 'grapes',
    '6': 'apple'
}


const winCombos = [
    ['seven', 'seven', 'seven'],
    ['cherry', 'cherry', 'cherry'],
    ['bell', 'bell', 'bell'],
    ['orange', 'orange', 'orange'],
    ['watermelon', 'watermelon', 'watermelon'],
    ['grapes', 'grapes', 'grapes'],
    ['apple', 'apple', 'apple']
]

let board, reels, player, wins, losses;

/*----- cached element references -----*/ 
let squares = document.querySelector('#box', idx);

/*----- event listeners -----*/ 
document.querySelector('#spinner').addEventListener('click', spnBtn);

/*----- functions -----*/

// initialize the game
init();

// there should be three columns for reels
// inside the reels are different photos/squares
// photos need to match in three

function init() {
    board = [null, null, null];
    player = null;
    console.log("start");
    render();
}

function render() {
    console.log("do you render?");

    board.forEach(function(reel, idx) {
        document.getElementById("photo"+idx).src = SLOTS[reel];
    });

    if (winCombos === )
}

// pushing button to spin starts the game / animates the reel
function spinBtn(evt) {

}

// there should be a starting $50 amount for the player to use
// dollar amount will decrease upon spin
// dollar amount will increase upon win

// win combination to be checked


// every push of the button spends $5 
// the game resets when there's no more dollars to spend


