//discard this because it's easier to just have all the card combinations in an array that represents the card deck

const SUITS = ["C", "S", "D", "H"]
const CARDNUMBERS = ["A", "2", "3", "4", "5", "Q"]
let drawnCards = [];

function getSuit() {  //generates a random suit
    return SUITS[Math.floor(Math.random() * SUITS.length)]
}

function getNumber() {  //generates a random number from Ace, 2-5, or Queen
    return CARDNUMBERS[Math.floor(Math.random() * CARDNUMBERS.length)]
}

function getCard() {  //generates a complete card with suit and number
    let suit = getSuit();
    let cardNumber = getNumber();
    return suit + cardNumber;
}

function drawCard() {  //draws a card from the draw pile, removing it as a future option
    
    if (drawnCards.length > 23) {  //makes sure there are cards left to draw from, shuffles if not
        shuffleCards();
    }
    
    let card = getCard();
    drawnCards.push(card);
    return card;
}

function shuffleCards() {  //returns drawn cards to the draw pile
    drawnCards.length = 0;
}