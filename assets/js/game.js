// List of possible cards
// Display 10 cards with different value
let baseCards = ['chopsticks', 'iced-tea', 'matcha', 'mochi', 'onigiri', 'ramen', 'rice', 'sushi', 'takoyaki', 'tempura'];

// Duplicate array items to make pairs
let possibleCards = baseCards.concat(baseCards); 

// Global variables
const numCards = possibleCards.length;
const maxMatch = baseCards.length; // Maximum pairs
let opened = [];
let numMatch = 0;
let numMoves = 0;

// Timers
let seconds = 0;
let minutes = 0;
let t;

// Shuffle
// source: http://stackoverflow.com/a/2450976

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Init the game
// Clear deck, init variables, shuffle cards and put them back on

function initGame() {
    document.querySelector('.card-area').innerHTML = '';
    shuffle(possibleCards);
    opened = [];
    numMoves = 0;
    numMatch = 0;
    resetTimer();
    runTimer();
    printMoves();

    for(i=0;i<numCards;i++) 
        document.querySelector('.card-area').innerHTML += `<li class="card"><img src="assets/images/${possibleCards[i]}.svg"/></li>`;
};


