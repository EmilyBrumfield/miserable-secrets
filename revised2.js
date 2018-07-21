let deck = []; //the current deck to be drawn from
let alwaysShuffle = false; //setting that forces cards to shuffle before each draw

function shuffleCards() { //returns all drawn cards to the deck
    deck = [  //full deck of 24 cards; C is clubs, S is spades, D is diamonds, H is hearts, A is ace, Q is queen
        "CA", "C2", "C3", "C4", "C5", "CQ",
        "SA", "S2", "S3", "S4", "S5", "SQ",
        "DA", "D2", "D3", "D4", "D5", "DQ",
        "HA", "H2", "H3", "H4", "H5", "HQ"
    ]
}

function drawCard() {

    if (deck.length < 1) {  //makes sure there are cards left to draw from, shuffles if not
        //deck = ["Bob"];
        shuffleCards();
    }

    if (alwaysShuffle) {  //shuffles cards if Always Shuffle is active
        shuffleCards();
    }

    let cardIndex = Math.floor(Math.random() * deck.length)
    let card = deck[cardIndex];
    deck.splice(cardIndex, 1);
    return card;
}