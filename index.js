/*---TO DO------------------------
--Implement fill all
--Install special fonts
--Need to check for typoes in the charts. Also, there's at least some italics in there, so implement those manually.
--Add output format for copy/paste or summary.
--Remove obsolete files.
--IMPORTANT: Fix text spans going overlong and adding a big line break.
*/

//CARD FUNCTIONS

let deck = []; //the current deck to be drawn from
let alwaysShuffle = true; //setting that forces cards to shuffle before each draw

function toggleShuffle(){
    alwaysShuffle = !alwaysShuffle;
    let oldLabel = document.getElementById("toggle-shuffle").innerHTML;
    let newLabel = (oldLabel === "Manual Shuffle") ? "Automatic Shuffle" : "Manual Shuffle" ;
    outputReplace("toggle-shuffle", newLabel)
}

function shuffleCards() { //returns all drawn cards to the deck
    deck = [  //full deck of 24 cards; C is clubs, S is spades, D is diamonds, H is hearts, A is ace, Q is queen
        "CA", "C2", "C3", "C4", "C5", "CQ",
        "SA", "S2", "S3", "S4", "S5", "SQ",
        "DA", "D2", "D3", "D4", "D5", "DQ",
        "HA", "H2", "H3", "H4", "H5", "HQ"
    ]

    updateDeck(); //updates the card count on the UI
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

    if (alwaysShuffle) {  //shuffles cards again if Always Shuffle is active
        shuffleCards();
    }

    updateDeck(); //updates the card count on the UI
    return card;
}

function cardDisplay(card) { //converts a Suit Letter + Number format card to custom output format
    let oldSuit = card.slice(0, 1);
    let newSuit = "";
    let newNumber = card.slice(1);

    switch(oldSuit) {
        case "C" :
            newSuit = "\&#9827";
            break;

        case "S" :
            newSuit = "\&#9824";
            break;

        case "D" :
            newSuit = "\&#9830";
            break;

        case "H" :
            newSuit = "\&#9829";
            break;

        default : 
            newSuit = "?";
    }

    return newNumber + newSuit;

}

function consultChart(chart) {
    let card = drawCard(); //draws a card
    let cardKey = card;

    if (Object.keys(chart).length === 6) { //removes suit if comparing to a only-numbers-matter chart, such as NOBLESSE
        cardKey = cardKey.slice(1)
    }

    return cardDisplay(card) + ": " + chart[cardKey]
}

function generateAspect(aspect, chart2) {  //aspect is the id for the slot to be filled, chart is the table to draw from
    let result = consultChart(chart2)
    outputReplace(aspect, result)
}

function updateDeck() {
    outputReplace("cards-left", deck.length)
    outputReplace("cards-drawn", 24 - deck.length)
}

//OUTPUT FUNCTIONS
//Outputs data stored in "content" to HTML element with id matching "target."

function outputReplace (target, content) {  //Replaces existing target content with new content
  document.getElementById(target).innerHTML = content;
}

function outputAdd (target, content) {  //Adds new content to existing target content
  document.getElementById(target).innerHTML += content;
}

function outputAddLine (target, content) {  //Adds new content to existing target content, in a new line
  document.getElementById(target).innerHTML += "<br \>" + content;
}