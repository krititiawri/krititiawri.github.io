$(document).ready(function () {
// ==================================
	// INITIAL VARIABLES AND THEIR VALUES
	// ==================================

	// character arrays have four values with the following meanings
	// [0] shows which row the character is currently in
	// [1] shows whether the character is visible
	// [2] shows whether shows the character's health points
	// [3] shows the character's attack power
	// [4] shows the character's counter attack power
	var char1Array = ["1", true, 120, 8, 8, "luke"];
	var char2Array = ["1", true, 100, 5, 5, "yoda"];
	var char3Array = ["1", true, 150, 20, 20, "amee"];
	var char4Array = ["1", true, 180, 25, 25, "ap5"];
	// gameOver is a boolean that shows whether the game is over or begun
	var isGameOver = false;
	var isGameBegun = false;
	// playerName and defenderName record which character is playing which role
	var playerName = "";
	var defenderName = "";
	// characterClicked holds which character is being clicked
	var characterClicked = "";
	// gamePausedForAnotherDefender is when waiting to pick another defender
	var gamePausedForAnotherDefender = false;
	
// function to update the game board
	function updateGameBoard() {
		// go through each row
		// and disply the tile if it is in that row and visible
		// otherwiise make it invisible
		// do this by targeting the id for that particular div
		// row 1:	
		if (char1Array[0] == "1" && char1Array[1] == true) {
			$("#rowOnechar1").css("display", "inline-block")
		} else {
			$("#rowOnechar1").css("display", "none");
		}
		if (char2Array[0] == "1" && char2Array[1] == true) {
			$("#rowOnechar2").css("display", "inline-block")
		} else {
			$("#rowOnechar2").css("display", "none");
		}
		if (char3Array[0] == "1" && char3Array[1] == true) {
			$("#rowOnechar3").css("display", "inline-block")
		} else {
			$("#rowOnechar3").css("display", "none");
		}
		if (char4Array[0] == "1" && char4Array[1] == true) {
			$("#rowOnechar3").css("display", "inline-block")
		} else {
			$("#rowOnechar4").css("display", "none");
		}
		// row 2:
		if (char1Array[0] == "2" && char1Array[1] == true) {
			$("#row2char1").css("display", "inline-block")
		} else {
			$("#row2char1").css("display", "none");
		}
		if (char2Array[0] == "2" && char2Array[1] == true) {
			$("#row2char2").css("display", "inline-block")
		} else {
			$("#row2char2").css("display", "none");
		}
		if (char3Array[0] == "2" && char3Array[1] == true) {
			$("#row2char3").css("display", "inline-block")
		} else {
			$("#row2char3").css("display", "none");
		}
		if (char4Array[0] == "2" && char4Array[1] == true) {
			$("#row2char4").css("display", "inline-block")
		} else {
			$("#row2char4").css("display", "none");
		}
		// row 3:
		if (char1Array[0] == "3" && char1Array[1] == true) {
			$("#row3char1").css("display", "inline-block")
		} else {
			$("#row3char1").css("display", "none");
		}
		if (char2Array[0] == "3" && char2Array[1] == true) {
			$("#row3char2").css("display", "inline-block")
		} else {
			$("#row3char2").css("display", "none");
		}
		if (char3Array[0] == "3" && char3Array[1] == true) {
			$("#row3char3").css("display", "inline-block")
		} else {
			$("#row3char3").css("display", "none");
		}
		if (char4Array[0] == "3" && char4Array[1] == true) {
			$("#row3char4").css("display", "inline-block")
		} else {
			$("#row3char4").css("display", "none");
		}
		// row 4:
		if (char1Array[0] == "4" && char1Array[1] == true) {
			$("#row4char1").css("display", "inline-block")
		} else {
			$("#row4char1").css("display", "none");
		}
		if (char2Array[0] == "4" && char2Array[1] == true) {
			$("#row4char2").css("display", "inline-block")
		} else {
			$("#row4char2").css("display", "none");
		}
		if (char3Array[0] == "4" && char3Array[1] == true) {
			$("#row4char3").css("display", "inline-block")
		} else {
			$("#row4char3").css("display", "none");
		}
		if (char4Array[0] == "4" && char4Array[1] == true) {
			$("#row4char4").css("display", "inline-block")
		} else {
			$("#row4char4").css("display", "none");
		}
		// also update the health by targeting the health div class
		$(".char1Health").html("Health: " + char1Array[2]);
		$(".char2Health").html("Health: " + char2Array[2]);
		$(".char3Health").html("Health: " + char3Array[2]);
		$(".char4Health").html("Health: " + char4Array[2]);
	}
// function to select player when tile is clicked and
	// we don't have a player nor a defender	
function selectPlayer(){
	if(playerName === "" && defenderName === "" && isGameOver === false){
		playerName = characterClicked;
		switch(playerName){
			case "luke": 
			char1Array[0] = "2";
			char2Array[0] = "3";
			char3Array[0] = "3";
			char4Array[0] = "3";
			break;
			case "yoda": 
			char1Array[0] = "3";
			char2Array[0] = "2";
			char3Array[0] = "3";
			char4Array[0] = "3";
			break;
			case "amee": 
			char1Array[0] = "3";
			char2Array[0] = "3";
			char3Array[0] = "2";
			char4Array[0] = "3";
			break;
            case "ap5": 
			char1Array[0] = "3";
			char2Array[0] = "3";
			char3Array[0] = "3";
			char4Array[0] = "2";
			break;
		}
	characterClicked = "";	
	}

}	
// function to select defender when tile is clicked and
	// we already have a player but not a defender
	function selectDefender() {
   if(((playerName!= "" && defenderName === "" )	|| gamePausedForAnotherDefender === true) && isGameOver == false && characterClicked!=playerName) {
			defenderName = characterClicked;
             switch(defenderName){
             	case "luke":
             	char1Array[0] ="4";
             	isGameBegun = true;
             	gamePausedForAnotherDefender = false;
             	break;
             	case "yoda":
             	char2Array[0] ="4";
             	isGameBegun = true;
             	gamePausedForAnotherDefender = false;
             	break;
             	case "amee":
             	char3Array[0] ="4";
             	isGameBegun = true;
             	gamePausedForAnotherDefender = false;
             	break;
             	case "ap5":
             	char4Array[0] ="4";
             	isGameBegun = true;
             	gamePausedForAnotherDefender = false;
             	break;

             };
           characterClicked ="";
           $("#gameMessages").html("");
		}
		updateGameBoard();
	}

// function that keeps track of points during attacks
	function attackTracking() {
		// attack cycle of points adjustment
		// only run if game has begun and it is not over
		if(isGameBegun === true && isGameOver === false && gamePausedForAnotherDefender === false){
			switch(playerName){
				case "luke":
				   if(defenderName === "yoda" ){
				   	// player health decreases by defender's attack
						char1Array[2] -= char2Array[3];
				 	// defender health decreases by player's attack
						char2Array[2] -= char1Array[3];
					    $("#gameMessages").html("You attacked " + defenderName + " for " + char1Array[3] + " damage. <br>"
					     + defenderName + " attacked you back for " + char2Array[3] + " damage");	
					    // player's attack increases by their power level
						char1Array[3] += char1Array[4];

				   }
				   else if(defenderName === "amee"){
				   	// player health decreases by defender's attack
						char1Array[2] -= char3Array[3];
				 	// defender health decreases by player's attack
						char3Array[2] -= char1Array[3];
					    $("#gameMessages").html("You attacked " + defenderName + " for " + char1Array[3] + " damage. <br>"
					     + defenderName + " attacked you back for " + char3Array[3] + " damage");	
					    // player's attack increases by their power level
						char1Array[3] += char1Array[4];

				   }
				   else if (defenderName === "ap5"){
				   	// player health decreases by defender's attack
						char1Array[2] -= char4Array[3];
				 	// defender health decreases by player's attack
						char4Array[2] -= char1Array[3];
					    $("#gameMessages").html("You attacked " + defenderName + " for " + char1Array[3] + " damage. <br>"
					     + defenderName + " attacked you back for " + char4Array[3] + " damage");	
					    // player's attack increases by their power level
						char1Array[3] += char1Array[4];

				   }
				   break;
				   case "yoda" :
				      if(defenderName === "luke"){
				      	// player health decreases by defender's attack
						char2Array[2] -= char1Array[3];
				 		// defender health decreases by player's attack
						char1Array[2] -= char2Array[3];
					    $("#gameMessages").html("You attacked " + defenderName + " for " + char2Array[3] + " damage. <br>"
					     + defenderName + " attacked you back for " + char1Array[3] + " damage");	
					    // player's attack increases by their power level
						char2Array[3] += char2Array[4];

				      }
				      else if (defenderName === "amee"){
				      	// player health decreases by defender's attack
						char2Array[2] -= char3Array[3];
				 		// defender health decreases by player's attack
						char3Array[2] -= char2Array[3];
					    $("#gameMessages").html("You attacked " + defenderName + " for " + char2Array[3] + " damage. <br>"
					     + defenderName + " attacked you back for " + char3Array[3] + " damage");	
					    // player's attack increases by their power level
						char2Array[3] += char2Array[4];
				      }
				      else if (defenderName === "ap5"){
				      	// player health decreases by defender's attack
						char2Array[2] -= char4Array[3];
				 		// defender health decreases by player's attack
						char4Array[2] -= char2Array[3];
					    $("#gameMessages").html("You attacked " + defenderName + " for " + char2Array[3] + " damage. <br>"
					     + defenderName + " attacked you back for " + char4Array[3] + " damage");	
					    // player's attack increases by their power level
						char2Array[3] += char2Array[4];
				      }
				      break;
				    case "char3":
				    	if(defenderName === "luke"){
				    	// player health decreases by defender's attack
						char3Array[2] -= char1Array[3];
				 		// defender health decreases by player's attack
						char1Array[2] -= char3Array[3];
					    $("#gameMessages").html("You attacked " + defenderName + " for " + char3Array[3] + " damage. <br>"
					     + defenderName + " attacked you back for " + char1Array[3] + " damage");	
					    // player's attack increases by their power level
						char3Array[3] += char3Array[4];

				    	}  
				    	else if (defenderName === "yoda"){
				    	// player health decreases by defender's attack
						char3Array[2] -= char2Array[3];
				 		// defender health decreases by player's attack
						char2Array[2] -= char3Array[3];
					    $("#gameMessages").html("You attacked " + defenderName + " for " + char3Array[3] + " damage. <br>"
					     + defenderName + " attacked you back for " + char2Array[3] + " damage");	
					    // player's attack increases by their power level
						char3Array[3] += char3Array[4];

				    	}
				    	else if (defenderName === "ap5"){
				    	// player health decreases by defender's attack
						char3Array[2] -= char4Array[3];
				 		// defender health decreases by player's attack
						char4Array[2] -= char3Array[3];
					    $("#gameMessages").html("You attacked " + defenderName + " for " + char3Array[3] + " damage. <br>"
					     + defenderName + " attacked you back for " + char4Array[3] + " damage");	
					    // player's attack increases by their power level
						char3Array[3] += char3Array[4];

				    	}
				    	break;
				    case "ap5":
				    	if (defenderName === "luke"){
				    	// player health decreases by defender's attack
						char4Array[2] -= char1Array[3];
				 		// defender health decreases by player's attack
						char1Array[2] -= char4Array[3];
					    $("#gameMessages").html("You attacked " + defenderName + " for " + char4Array[3] + " damage. <br>"
					     + defenderName + " attacked you back for " + char1Array[3] + " damage");	
					    // player's attack increases by their power level
						char4Array[3] += char4Array[4];

				    	}
				    	else if (defenderName === "yoda"){
				    	// player health decreases by defender's attack
						char4Array[2] -= char2Array[3];
				 		// defender health decreases by player's attack
						char2Array[2] -= char4Array[3];
					    $("#gameMessages").html("You attacked " + defenderName + " for " + char4Array[3] + " damage. <br>"
					     + defenderName + " attacked you back for " + char2Array[3] + " damage");	
					    // player's attack increases by their power level
						char4Array[3] += char4Array[4];

				    	}
				    	else if (defenderName === "amee"){
				    	// player health decreases by defender's attack
						char4Array[2] -= char3Array[3];
				 		// defender health decreases by player's attack
						char3Array[2] -= char4Array[3];
					    $("#gameMessages").html("You attacked " + defenderName + " for " + char4Array[3] + " damage. <br>"
					     + defenderName + " attacked you back for " + char3Array[3] + " damage");	
					    // player's attack increases by their power level
						char4Array[3] += char4Array[4];

				    	}
				    	break;
				    	updateGameBoard();

			}
			// check if player or defender have lost
			havePlayerOrDefenderLost();
		}
		updateGameBoard();
	}
	// function to see if player or defender have lost
	function havePlayerOrDefenderLost(){
		// check if player or defender have lost
		if(playerName === "luke" && char1Array[2]<=0){
			// the player is po and his health <= 0
			playerLost();
		} 
		else if (playerName === "yoda" && char2Array[2]<=0){
			playerLost();
		}
		 else if (playerName === "amee" && char3Array[2]<=0){
			playerLost();
		}
		else if (playerName === "ap5" && char4Array[2]<=0){
			playerLost();
		}
		else if (defenderName === "luke" && char1Array[2]<=0){
			char1Array[1] = false;
			if (gamePausedForAnotherDefender == false) {
				$("#gameMessages").html("You have defeated " + defenderName + ".<br>You can choose to fight another enemy.");
			}
			gamePausedForAnotherDefender = true;
		}
		else if (defenderName === "yoda" && char2Array[2]<=0){
			char2Array[1] = false;
			if (gamePausedForAnotherDefender == false) {
				$("#gameMessages").html("You have defeated " + defenderName + ".<br>You can choose to fight another enemy.");
			}
			gamePausedForAnotherDefender = true;
		}
		else if (defenderName === "amee" && char3Array[2]<=0){
			char3Array[1] = false;
			if (gamePausedForAnotherDefender == false) {
				$("#gameMessages").html("You have defeated " + defenderName + ".<br>You can choose to fight another enemy.");
			}
			gamePausedForAnotherDefender = true;
		}
		else if (defenderName === "ap5" && char4Array[2]<=0){
			char4Array[1] = false;
			if (gamePausedForAnotherDefender == false) {
				$("#gameMessages").html("You have defeated " + defenderName + ".<br>You can choose to fight another enemy.");
			}
			gamePausedForAnotherDefender = true;
		}
		updateGameBoard();
	}
// function to deal with loss by player
	function playerLost() {
		isGameOver = true;
		$("#gameMessages").html("You have been defeated... GAME OVER!");
		$(".resetButton").css("display", "block");
	
	}
	// function to deal with win by player
	function playerWon() {
		isGameOver = true;
		$("#gameMessages").html("YOU WON!!! GAME OVER!");
		$(".resetButton").css("display", "block");
	
	}

	// function to play attack button sound when game running
	// attack button plays blaster sound when we have player and
	// defender and isGameBegun is true and isGameOver is not false
	function playAttackSound() {
		if (isGameBegun == true && isGameOver == false && gamePausedForAnotherDefender == false) {
			var audio = new Audio("assets/images/Fire.mp3");
			audio.play();
		}		
	}

// function to see if the player has won
	// this will be the case when all defenders have visibility flag set to false
	function hasPlayerWon() {
		if (playerName=="luke" && (char2Array[1]==false && char3Array[1]==false && char4Array[1]==false)) {
			// player has won
			playerWon();
		} else if (playerName=="yoda" && (char1Array[1]==false && char3Array[1]==false && char4Array[1]==false)) {
			// player has won
			playerWon();
		} else if (playerName=="amee" && (char1Array[1]==false && char2Array[1]==false && char4Array[1]==false)) {
			// player has won
			playerWon();
		} else if (playerName=="ap5" && (char1Array[1]==false && char2Array[1]==false && char3Array[1]==false)) {
			// player has won
			playerWon();
		}
	}

//Main game code 
updateGameBoard();
// if player hasn't been picked yet then
	// it must be the start of the game so play
	// the intro music
	if (playerName == "") {
		var audio = new Audio("assets/images/song.mp3");
		audio.play();
	};

$(".gameCharacter").click(function(){
	// record what character tile the user clicked
		console.log("clicked: " + $(this).attr("value"));
	    characterClicked = $(this).attr("value");
	// if we don't have a player yet, get one
		selectPlayer();
	// if we don't have a defender yet, get one
		selectDefender();
    // end always by making sure game board is updated
		updateGameBoard();
	
});

$(".attackButton").click(function(){
    // play attack button sound when game is running
	// and the attack button is clicked
		playAttackSound();
		// function to adjust points during attacks
		// if game is paused for another defender to be picked
		// then say there's no enemy here
		if (gamePausedForAnotherDefender == true) {
			$("#gameMessages").html("No enemy here...");
		}
		attackTracking();
		// check if player has won
		hasPlayerWon();

		// end by  making sure game board is updated
		updateGameBoard();
});
	// listen for reset button click
	$(".resetButton").on("click", function() {
		location.href=location.href;
	});


});
