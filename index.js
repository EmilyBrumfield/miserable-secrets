//CARD FUNCTIONS
//Removed deck shuffling from the actual UI because it complicated the user experience too much.


let deck = []; //the current deck to be drawn from
let alwaysShuffle = true; //setting to true forces cards to shuffle before and after each draw


/*
function toggleShuffle(){
    alwaysShuffle = !alwaysShuffle;
    let oldLabel = document.getElementById("toggle-shuffle").innerHTML;
    let newLabel = (oldLabel === "Manual") ? "Auto" : "Manual" ;
    outputReplace("toggle-shuffle", newLabel);
};
*/

function shuffleCards() { //returns all drawn cards to the deck
    deck = [  //full deck of 24 cards; C is clubs, S is spades, D is diamonds, H is hearts, A is ace, Q is queen
        "CA", "C2", "C3", "C4", "C5", "CQ",
        "SA", "S2", "S3", "S4", "S5", "SQ",
        "DA", "D2", "D3", "D4", "D5", "DQ",
        "HA", "H2", "H3", "H4", "H5", "HQ"
    ];

    /* updateDeck(); //updates the card count on the UI */
};

function drawCard() {

    if (deck.length < 1) {  //makes sure there are cards left to draw from, shuffles if not
        //deck = ["Bob"];
        shuffleCards();
    };

    if (alwaysShuffle) {  //shuffles cards if Always Shuffle is active
        shuffleCards();
    };

    let cardIndex = Math.floor(Math.random() * deck.length);
    let card = deck[cardIndex];
    deck.splice(cardIndex, 1);

    if (alwaysShuffle) {  //shuffles cards again if Always Shuffle is active
        shuffleCards();
    };

    /* updateDeck(); //updates the card count on the UI */
    return card;
}

function cardDisplay(card) { //converts a Suit Letter + Number format card to custom output format
    let oldSuit = card.slice(0, 1);
    let newSuit = "";
    let newNumber = card.slice(1);

    switch(oldSuit) {
        case "C" :
            newSuit = "<font color='000000'>\u2663</font>";
            break;

        case "S" :
            newSuit = "<font color='000000'>\u2660</font>";
            break;

        case "D" :
            newSuit = "<font color='FF0000'>\u2666</font>";
            break;

        case "H" :
            newSuit = "<font color='FF0000'>\u2665</font>";
            break;

        default : 
            newSuit = "?";
    };

    return newNumber + newSuit;

}

function consultChart(chart) {
    let card = drawCard(); //draws a card
    let cardKey = card;

    if (Object.keys(chart).length === 6) { //removes suit if comparing to a only-numbers-matter chart, such as NOBLESSE
        cardKey = cardKey.slice(1)
    };

    return cardDisplay(card) + ": " + chart[cardKey];
}

function generateAspect(aspect, chart2) {  //aspect is the id for the slot to be filled, chart is the table to draw from
    let result = consultChart(chart2);
    outputReplace(aspect, result);
    fillSummary();
};

/*

function updateDeck() {
    outputReplace("cards-left", "Deck " + deck.length);
};

*/

function generateTown() {
    clearEverything();

    generateAspect('region', REGION);
    generateAspect('theme1', THEME);
    generateAspect('theme2', THEME);
    generateAspect('theme3', THEME);

    let landmarkRoll = Math.floor(Math.random() * 6) + 1;
    for (let i = 1; i <= landmarkRoll; i++) {
        generateAspect('landmark' + i, LANDMARK);
    }

    for (let i = 1; i <= 4; i++) {
        generateAspect('person' + i + "-family", FAMILY);
        generateAspect('person' + i + "-occupation", OCCUPATION);
        generateAspect('person' + i + "-quirk1", QUIRK);
        generateAspect('person' + i + "-quirk2", QUIRK);
        generateAspect('person' + i + "-trouble", PERSONALTROUBLE);
    }

    generateAspect('noblesse', NOBLESSE);
    generateAspect('church', CHURCH);
    generateAspect('health', HEALTH);
    generateAspect('prosperity', PROSPERITY);
    generateAspect('harmony', HARMONY);
    generateAspect('justice', JUSTICE);

    let troubleIndex = Math.floor(Math.random() * 6);
    let troubleDie = [1, 2, 3, 4, 5, 3];
    for (let i = 1; i <= troubleDie[troubleIndex]; i++) {
        generateAspect('trouble' + i, TROUBLE);
    }

}

function clearEverything() {
    outputReplace('region', "");
    outputReplace('theme1', "");
    outputReplace('theme2', "");
    outputReplace('theme3', "");

    for (let i = 1; i <= 6; i++) {
        outputReplace('landmark' + i, "");
    }

    for (let i = 1; i <= 4; i++) {
        outputReplace('person' + i + "-family", "");
        outputReplace('person' + i + "-occupation", "");
        outputReplace('person' + i + "-quirk1", "");
        outputReplace('person' + i + "-quirk2", "");
        outputReplace('person' + i + "-trouble", "");
    }

    outputReplace('noblesse', "");
    outputReplace('church', "");
    outputReplace('health', "");
    outputReplace('prosperity', "");
    outputReplace('harmony', "");
    outputReplace('justice', "");

    for (let i = 1; i <= 5; i++) {
        outputReplace('trouble' + i, "");
    }

    document.getElementById("summary").value = "";

}

function addSummary(target, title){
    let spanContents = document.getElementById(target).innerHTML;
    spanContents = spanContents.replace('<font color="000000">', "")
    spanContents = spanContents.replace('<font color="FF0000">', "")
    spanContents = spanContents.replace("</font>", "")

    if (spanContents.length > 0) {
        document.getElementById("summary").value += title + spanContents + "\n\n";
    }
}

function addSummaryLine(line){
        document.getElementById("summary").value += line;
}

function fillSummary(){
    
    document.getElementById("summary").value = "";

    addSummary('region', "Region ");
    addSummary('theme1', "Theme ");
    addSummary('theme2', "Theme ");
    addSummary('theme3', "Theme ");
    addSummary('theme4', "Theme ");
    addSummary('landmark1', "Landmark ");
    addSummary('landmark2', "Landmark ");
    addSummary('landmark3', "Landmark ");
    addSummary('landmark4', "Landmark ");
    addSummary('landmark5', "Landmark ");
    addSummary('landmark6', "Landmark ");
    
    addSummaryLine("\n")
    addSummary('person1-family', "Family ");
    addSummary('person1-occupation', "Occupation ");
    addSummary('person1-quirk1', "Quirk ");
    addSummary('person1-quirk2', "Quirk ");
    addSummary('person1-trouble', "Trouble ");

    addSummaryLine("\n")
    addSummary('person2-family', "Family ");
    addSummary('person2-occupation', "Occupation ");
    addSummary('person2-quirk1', "Quirk ");
    addSummary('person2-quirk2', "Quirk ");
    addSummary('person2-trouble', "Trouble ");

    addSummaryLine("\n")
    addSummary('person3-family', "Family ");
    addSummary('person3-occupation', "Occupation ");
    addSummary('person3-quirk1', "Quirk ");
    addSummary('person3-quirk2', "Quirk ");
    addSummary('person3-trouble', "Trouble ");
    
    addSummaryLine("\n")
    addSummary('person4-family', "Family ");
    addSummary('person4-occupation', "Occupation ");
    addSummary('person4-quirk1', "Quirk ");
    addSummary('person4-quirk2', "Quirk ");
    addSummary('person4-trouble', "Trouble ");

    addSummaryLine("\n")
    addSummary('person5-family', "Family ");
    addSummary('person5-occupation', "Occupation ");
    addSummary('person5-quirk1', "Quirk ");
    addSummary('person5-quirk2', "Quirk ");
    addSummary('person5-trouble', "Trouble ");

    addSummaryLine("\n")
    addSummary('person6-family', "Family ");
    addSummary('person6-occupation', "Occupation ");
    addSummary('person6-quirk1', "Quirk ");
    addSummary('person6-quirk2', "Quirk ");
    addSummary('person6-trouble', "Trouble ");

    addSummary('noblesse', "Noblesse ");
    addSummary('church', "Church ");
    addSummary('health', "Health ");
    addSummary('prosperity', "Prosperity ");
    addSummary('harmony', "Harmony ");
    addSummary('justice', "Justice ");
    
    addSummary('trouble1', "Local Troubles ");
    addSummary('trouble2', "Local Troubles ");
    addSummary('trouble3', "Local Troubles ");
    addSummary('trouble4', "Local Troubles ");
    addSummary('trouble5', "Local Troubles ");
    
}

//OUTPUT FUNCTIONS
//Outputs data stored in "content" to HTML element with id matching "target."

function outputReplace (target, content) {  //Replaces existing target content with new content
  document.getElementById(target).innerHTML = content;
};

function outputAdd (target, content) {  //Adds new content to existing target content
  document.getElementById(target).innerHTML += content;
};

function outputAddLine (target, content) {  //Adds new content to existing target content, in a new line
  document.getElementById(target).innerHTML += "<br \>" + content;
};