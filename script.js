console.log("I love Mango")
// Things we need
// Need to track: 

//User input
//Wins - set to 0
//Losses - set to 0
//Ties - set to 0
//Computer choice List - Array bracket [R, P, S]
//Global variable called Computer choice

//Things we need to do - actions

//Start the game
    //Prompt user to enter R, P or S characters
        //If output is not null
            //Generate computer choice
                //should radomly choose a character, R, P or S 
            //Alert the user to what the computer has chosen
            //Compare user and computer choices
                //Conditions on wins, losses and ties.
                    //If User P 
                            //If Computer P then
                                //Tie +1
                            //If computer R then
                                //User Wins +1
                            //If computer S then
                                //User loss +1
                    //If User R 
                            //If Computer P then
                                //User loss +1
                            //If computer R then
                                //Tie +1
                            //If computer S then
                                //User Win +1
                    //If User S 
                            //If Computer P then
                                //User Win +1
                            //If computer R then
                                //User Loss +1
                            //If computer S then
                                //Tie +1
   //Show an alert of wins, losses and ties 
   //Ask the user if they want to continue the game or not - confirm
        //If yes, jump to line 15. This provides a loop.
        //If no, alert the game is over                      

