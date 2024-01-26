/*Add your JavaScript here*/

var antagScore = 0 
var protagScore = 0

var numQuestion = 0 // Stores the number of answers clicked on

var result = document.getElementById("result");



var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");


var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");


var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var button = document.getElementById("q1a1");


button.addEventListener("click", result);



q1a1.addEventListener("click", antag);
q1a2.addEventListener("click", protag);

q2a1.addEventListener("click", antag);
q2a2.addEventListener("click", protag);

q3a1.addEventListener("click", antag);
q3a2.addEventListener("click", protag);




 function antag(){
  antagScore += 1;
  numQuestion += 1;

  console.log("numQuestion = " + numQuestion  + " antagScore = " + antagScore);

  if (numQuestion == 3){
  console.log("You've finished the quiz!")
    updateResult();
    
}
}

function protag(){
  protagScore += 1;
  numQuestion += 1;

  console.log("numQuestion = " + numQuestion  + " protagScore = " + protagScore);

  if (numQuestion == 3){
  console.log("You've finished the quiz!")
   updateResult();
   
}
}



function updateResult() {
  if (antagScore >= 2){
    result.innerHTML = "You are the Villain!"
  console.log("You are the Villain!")
 } else if (protagScore >= 2){
    result.innerHTML = "You are the Hero!"
  console.log("You are the Hero!")
}
}



