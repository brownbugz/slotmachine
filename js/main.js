// author @brownbugz - Sonnia Kemmer

// variables
var SLOTS = {
    'null': 'slotmachine/slots-images/bigwin.jpg',
    '0': 'slotmachine/slots-images/seven.png',
    '1': 'slotmachine/slots-images/cherry.png',
    '2': 'slotmachine/slots-images/bell.png',
    '3': 'slotmachine/slots-images/orange.png',
    '4': 'slotmachine/slots-images/watermelon.png',
    '5': 'slotmachine/slots-images/grapes.png',
    '6': 'slotmachine/slots-images/apple.png'
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
    ['0', '0', '0'],
    ['1', '1', '1'],
    ['2', '2', '2'],
    ['3', '3', '3'],
    ['4', '4', '4'],
    ['5', '5', '5'],
    ['6', '6', '6']
]

var board, reels, wins, losses; 

/*----- cached element references -----*/ 
let squares = document.querySelector('#box');

/*----- event listeners -----*/ 
document.querySelector('#spinner').addEventListener('click', spnBtn);

/*----- functions -----*/

// initialize the game
init();
// there should be three columns and one row for reels
// inside the reels are different photos/squares
// photos need to match in three

function init() {
    board = [null, null, null];

    render();
}

function render() {
    console.log("do you render?");

    board.forEach(function(reel, idx) {
        document.getElementById("photo"+idx).src = SLOTS[reel];
    });
}
    // if (sqrLeft === null && sqrMiddle === null && sqrRight === null) {
    //     document.getElementById("photo"+idx).src = SLOTS[reel];
    //     console.log('start');


//     if (winCombos === )
// }

// // pushing button to spin starts the game / animates the reel
function spinBtn(evt) {
    console.log('start spin');

    let idx = parseInt(evt.target.id.replace('photo', ''));

}

// there should be a starting $50 amount for the player to use
// dollar amount will decrease upon spin
// dollar amount will increase upon win

// win combination to be checked


// every push of the button spends $5 
// the game resets when there's no more dollars to spend
