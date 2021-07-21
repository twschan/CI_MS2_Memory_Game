// Card data
// Display 10 cards with different value
const cardsArray = [
    { name: "tea", img: "./assets/images/iced-tea.png", },
    { name: "matcha", img: "./assets/images/matcha.png", },
    { name: "mochi", img: "./assets/images/mochi.png", },
    { name: "onigiri", img: "./assets/images/onigiri.png", },
    { name: "ramen", img: "./assets/images/ramen.png", },
    { name: "rice", img: "./assets/images/rice.png", },
    { name: "chopsticks", img: "./assets/images/sticks.png", },
    { name: "sushi", img: "./assets/images/sushi.png", },
    { name: "takoyaki", img: "./assets/images/takoyaki.png", },
    { name: "tempura", img: "./assets/images/tempura.png", },
];

// Grab the div with an id of root
const game = document.getElementById('game')
// Create a section with a class of grid
const grid = document.createElement('section') 
grid.setAttribute('class', 'grid')
// Apend the grid section to the game div
game.appendChild(grid)