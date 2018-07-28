/*---TO DO------------------------
--Implement fill all
--Install special fonts
--Need to check for typoes in the charts. Also, there's at least some italics in there, so implement those manually.
--Add output format for copy/paste or summary.
*/


function test(){
  outputReplace("output", consultChart(TROUBLES));
  outputAdd("output", " -- " + deck.length);
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