// author @brownbugz - Sonnia Kemmer 2019 (C)
//console.log('in javascript');

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


var wins = 0;

var reel0, reel1, reel2;

var maxValue = reels.length;

/*----- functions -----*/

// initialize the game

function reset() {
    // console.log("reset begins");
    wins = 0;
    bankTotal = 50;
    resetReels();
    showBankTotal();
}

    //change the reel images to startImage
function resetReels() {
    // console.log('resetReels'); 
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
    // console.log('this spins the reels');
   reel0 = randomNum();
   reel1 = randomNum();
   reel2 = randomNum();
   changePhotos();
//    spinEffect();
   earnings(reel0, reel1, reel2);
   showBankTotal();
   spinDebits();
}

function changePhotos() {
    // console.log('this changes photos');
    document.getElementById('photo0').src = PHOTOS[reel0];
    document.getElementById('photo1').src = PHOTOS[reel1];
    document.getElementById('photo2').src = PHOTOS[reel2];
}

// function spinEffect() {
//     let x = setInterval(function() {

//         // console.log('Hello!');
//     }, 30);
    
//     setTimeout(function() {
//         clearInterval(x);
//     }, 200);
// }

function earnings(value1, value2, value3) {
    console.log('earnings() begins');
    console.log(value1);
    console.log(value2);
    console.log(value3);

    var pays;
    if (value1 == value2 && value2 == value3) {
        pays = payouts[value1];
        bankTotal = bankTotal + pays;
        console.log('this is pays');
        console.log(pays);
    }
    showBankTotal();
}
    
function showBankTotal() {
    console.log('deposits begins');
    console.log(bankTotal);
    document.getElementById('bank').innerHTML = ("Credits: " + bankTotal);
}



    // if all reels are the same, i want to associate the reels number to payouts index value
    // i want the reels number associated to the photo value also
    // then i can get the number to add to whatever is the amount of credits

    

function spinDeducts() {
    console.log('give me your money');


}

    // document.getElementById('#bank').innerHTML(`Credits: + ${spinDebits}`);


// there should be a starting $50 amount for the player to use
// dollar amount will decrease upon spin
// dollar amount will increase upon win

// win combination to be checked


// every push of the button spends $5 
// the game resets when there's no more dollars to spend


