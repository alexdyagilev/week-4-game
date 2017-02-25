
function myguess(id){
	console.log("id " + id);
	$("#message").html("");
	switch (id)
            {
               case 'blue': 
               	total += blue;
               break;
            
               case 'red': 
               	total += red;
               break;
            
               case 'white': 
               	total += white;
               break;
            
               case 'yellow': 
               	total += yellow;
               break;
            }

            $("#total").html(total);
            console.log("Total " + total);

    if(total == compNum){
    	wins += 1;
    	$("#wins").html(wins);
    	$("#message").html("You win!");
    	updateRandom();
    }
    else if (total > compNum) {
    	losses += 1;
    	$("#losses").html(losses);
    	$("#message").html("You lose!");
    	updateRandom();
    }
}

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function updateRandom(){
	 compNum = getRandom(19,120);
	 total = 0;
     blue = getRandom(1,12);
     red = getRandom(1,12);
     white = getRandom(1,12);
     yellow = getRandom(1,12);
     $("#total").html(total);
     $("#compRandom").html(compNum);
     
     console.log("updated blue " + blue);
     console.log("updated red " + red);
     console.log("updated white " + white);
     console.log("updated yellow " + yellow);
}
