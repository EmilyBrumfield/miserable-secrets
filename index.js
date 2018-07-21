/*------------IMPORTANT--------------
This method assumes that cards are always shuffled after each draw. I can put the non-shuffle option in,
but I'm not sure there's any point.

Need to check for typoes in the charts. Also, there's at least some italics in there, so implement those manually.
*/


function test(){
  //let result = rollChart(table1)
  let result = drawCard();
  outputReplace("output", result)
}

function rollChart(chart){
  let result = chart[Math.floor(Math.random() * chart.length)]
  return result
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