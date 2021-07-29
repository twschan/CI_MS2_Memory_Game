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