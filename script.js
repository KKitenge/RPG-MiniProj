
// Things we need
// Need to track: 

//User input
var userInput;
//Wins - set to 0
var wins=0;
//Losses - set to 0
var losses=0;
//Ties - set to 0
var ties=0;
//Computer choice List - Array bracket [R, P, S]
var computerChoiceList = ["R", "P", "S"]
//Global variable called Computer choice
var computerChoice;

//Things we need to do - actions
function generateComputerChoice(){
    var randomIndex = Math.floor(Math.random()*computerChoiceList.length);
    computerChoice =computerChoiceList[randomIndex];
    alert("Computer choice was "+computerChoice);
}
//Prompt user to enter R, P or S characters
function promptUser(){
    userInput=prompt("Please enter R, P or S");
    //If output is not null  
    if (userInput !== null){   
        userInput = userInput.toUpperCase();
        if (!(userInput === "R" || userInput === "P" || userInput === "S")){
            promptUser();
        }
    }
}

function compareUserComputerChoice(){
    if (userInput == computerChoice){
        ties++;
        alert("It's a tie!")
    }   
    else if((userInput == "P" && computerChoice == "R") ||
            (userInput == "R" && computerChoice == "S") ||
            (userInput == "S" && computerChoice == "P")) {
            wins++;
            alert("You've won!")
            }
    else {
         losses++;
         alert("Computer won!")
    }
    //alert("Wins ") 
        alert("Total Wins: " + wins + " Losses: " + losses + " Ties: " + ties);
}

//Start the game
function startGame(){
    promptUser();
    generateComputerChoice();
    compareUserComputerChoice();
    promptUser();
}

startGame();

      
            //Generate computer choice

                //should radomly choose a character, R, P or S 
            //Alert the user to what the computer has chosen
            //Compare user and computer choices
                //Conditions on wins, losses and ties.
                    //If User P 
                               
                            //If computer S then
                                //User loss +1
                    //If User R 
                            //If Computer P then
                                //User loss +1

                    //If User S 

                            //If computer R then
                                //User Loss +1

   //Show an alert of wins, losses and ties 
   //Ask the user if they want to continue the game or not - confirm
        //If yes, jump to line 15. This provides a loop.


        //If no, alert the game is over                      

