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

// Clear deck, init variables, shuffle cards and put them back on

function showCards(baseCards) {
    var el = document.getElementById("cards");
    el.innerHTML = "";
    var imagesArray = [];

    getCards(baseCards, function (data) {
        data = data.message;

        var backCard = '<div class = "back-side card-side"><img src="assets/images/back.svg"></div>';

        data.forEach(function (item) {
            var frontCard = '<div class = "front-side card-side " ><img src="' + item + '"></div>';
            imagesArray.push(frontCard);
            imagesArray.push(frontCard);
        });

        imagesArray = shuffle(imagesArray);

        var row = "";
        for (var i = 0; i < imagesArray.length; i++) {
            row += backCard + imagesArray[i];
            var row_counter = parseInt(i) + 1;
            if (row_counter % 4 == 0) {
                el.innerHTML += "<div>" + row + "</div>";
                row = "";
            }
        }
    });
}

/*Clicking level buttons*/

$(".btn-level").click(function () {
    $(".menu-page").removeClass("d-block");
    $(".menu-page").addClass("d-none");
    $(".game-window").removeClass("d-none");
    $(".game-window").addClass("d-block");
    $("#playWindow").modal("hide");
    amount = $(this).attr("data-difficulty");
    showCards(amount);
    amountFlips = 0;
    openedCardCount = 0;
    steps.innerHTML = " Steps: " + amountFlips;
    level.innerHTML = " Level: " + $(this).text();
});

$(".btn-restart").click(function () {
    clearTimeout(wrongGuessTimeout);
    clearTimeout(timerTimeout);
    $(".menu-page").removeClass("d-none");
    $(".menu-page").addClass("d-block");
    $(".game-window").removeClass("d-block");
    $(".game-window").addClass("d-none");
    $("#gameEnd").modal("hide");
    $("#playWindow").modal("show");
    timer.innerHTML = "Time: 00:00";
    stopTimer();
});

$(".btn-mainmenu").click(function () {
    clearTimeout(wrongGuessTimeout);
    clearTimeout(timerTimeout);
    $(".menu-page").removeClass("d-none");
    $(".menu-page").addClass("d-block");
    $(".game-window").removeClass("d-block");
    $(".game-window").addClass("d-none");
    $("#gameEnd").modal("hide");
    timer.innerHTML = "Time: 00:00";
    stopTimer();
});
