// author @brownbugz - Sonnia Kemmer

// const variables
const  = {
    'seven':
    'cherry':
    'bell':
    'orange':
    'watermelon':
    'grapes':
    'apple':
}

const SLOTS = {
    'seven': 'slots-images/seven.png',
    'cherry': 'slots-images/cherry.png',
    'bell': 'slots-inages/bell.png',
    'orange': 'slots-images/orange.png',
    'watermelon': 'slots-images/watermelon.png',
    'grapes': 'slots-images/grapes.png',
    'apple': 'slots-images/apple.png'
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


/*----- app's state (variables) -----*/ 
let board, player, wins, losses;

/*----- cached element references -----*/ 


/*----- event listeners -----*/ 
document.querySelector().addEventListener('click', handleClick);

/*----- functions -----*/

// initialize the game
init();

// there should be three columns for reels
// inside the reels are different photos/squares
// photos need to match in three

function init() {
    board = [null, null, null];
    player = null;
    render();
}

// pushing button to spin starts the game / animates the reel
function render() {

}


// there should be a starting $50 amount for the player to use
// dollar amount will decrease upon spin
// dollar amount will increase upon win

// win combination to be checked


// every push of the button spends $5 
// the game resets when there's no more dollars to spend


