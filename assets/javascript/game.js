
function myguess(id){ 
//this function takes the id of the button pressed and adds that amount to the user total
//then it compares the user total and the computer number to see if user has won or lost
	$("#message").html(""); //the wins/losses is erased until the end of the game
	switch (id)
            {
               case 'blue': //if blue button is pressed, total user score is increased by blue amount
               	total += blue;
               break;
            
               case 'red': //if red button is pressed, total user score is increased by red amount
               	total += red;
               break;
            
               case 'white': //if white button is pressed, total user score is increased by white amount
               	total += white;
               break;
            
               case 'yellow': //if yellow button is pressed, total user score is increased by yellow amount
               	total += yellow;
               break;
            }

            $("#total").html(total); //the user's total score is placed into HTML

    if(total == compNum){ //if user score is equal to the computer number
    	wins += 1;
    	$("#wins").html(wins);
    	$("#message").html("You win!");
    	updateRandom(); //calls the function that updates the computer number and crystal with new values
    }
    else if (total > compNum) { //if user score becomes greater than the computer number
    	losses += 1;
    	$("#losses").html(losses);
    	$("#message").html("You lose!");
    	updateRandom(); //calls the function that updates the computer number and crystal with new values
    }
}

function getRandom(min, max) {
//this function is called to randomize the computer number and the crystal values
//it is called in the start and within the updateRandom function
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function updateRandom(){
//this function is called after a game ends in order to randomize the computer number and crystal values
//also resets the user total to 0
	 compNum = getRandom(19,120); //new computer generated number
	 total = 0; //user total goes back to 0
   blue = getRandom(1,12); //new value for blue crystal
   red = getRandom(1,12); //new value for red crystal
   white = getRandom(1,12); //new value for white crystal
   yellow = getRandom(1,12); //new value for yellow crystal

   $("#total").html(total); //total of 0 is inserted into HTML
   $("#compRandom").html(compNum); //new computer number is inserted into HTML
}
