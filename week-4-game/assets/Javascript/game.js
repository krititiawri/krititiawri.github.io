$(document).ready(function () {
// to move the character to next div on click of character image
	$("#character1").click(function()
	{
		$("#empty").html("<h1>Your character</h1>");
		var newDiv = $("<img>");
		newDiv.attr("src","assets/images/character1.gif");
		console.log('just before posting');
		$("#empty").append(newDiv);	
		if(empty!=""){
		 console.log("empty");
			var newDiv1 = $("<img>");
			var newDiv2 = $("<img>");
			var newDiv3 =$("<img>");
			$("#character1").hide();
			console.log(newDiv1);
			$("#character2").hide();
            $("#character3").hide();
            $("#character4").hide();
			newDiv1.attr("src","assets/images/character2.gif");
			newDiv2.attr("src","assets/images/character3.gif");
			newDiv3.attr("src","assets/images/character4.gif");
	    	$("#enemy").append(newDiv1);
	        $("#enemy").append(newDiv2);
	        $("#enemy").append(newDiv3);	

		}
		
		{
		  $("#defender").html("<h1>Defender</h1>");
		  var newDiv2 = $("<img>") ;
		  newDiv.attr("src","assets/images/character1.gif");

		}
	});
	$("#character2").click(function()
	{
		$("#empty").html("<h1>Your character</h1>");
		var newDiv = $("<img>");
		newDiv.attr("src","assets/images/character2.gif");
		$("#empty").append(newDiv);	
			if(empty!=""){
		 	console.log("empty");
			var newDiv1 = $("<img>");
			var newDiv2 = $("<img>");
			var newDiv3 =$("<img>");
			console.log(newDiv1);
			$("#character1").hide();
            $("#character3").hide();
            $("#character4").hide();
			newDiv1.attr("src","assets/images/character1.gif");
			newDiv2.attr("src","assets/images/character3.gif");
			newDiv3.attr("src","assets/images/character4.gif");
	    	$("#enemy").append(newDiv1);
	        $("#enemy").append(newDiv2);
	        $("#enemy").append(newDiv3);		
		}
	});

 	 $("#character3").click(function()
	{
		$("#empty").html("<h1>Your character</h1>");
		var newDiv = $("<img>");
		newDiv.attr("src","assets/images/character3.gif");
		console.log('just before posting');
		$("#empty").append(newDiv);	
		console.log('after posting');

		if(empty!=""){
		 	console.log("empty");
			var newDiv1 = $("<img>");
			var newDiv2 = $("<img>");
			var newDiv3 =$("<img>");
			console.log(newDiv1);
			$("#character1").hide();
            $("#character2").hide();
            $("#character4").hide();
			newDiv1.attr("src","assets/images/character1.gif");
			newDiv2.attr("src","assets/images/character2.gif");
			newDiv3.attr("src","assets/images/character4.gif");
	    	$("#enemy").append(newDiv1);
	        $("#enemy").append(newDiv2);
	        $("#enemy").append(newDiv3);		
		}
	});
	$("#character4").click(function()
	{
		$("#empty").html("<h1>Your character</h1>");
		var newDiv = $("<img>");
		newDiv.attr("src","assets/images/character4.gif");
		console.log('just before posting');
		$("#empty").append(newDiv);	
		console.log('after posting');
        
        if(empty!=""){
		 	console.log("empty");
			var newDiv1 = $("<img>");
			var newDiv2 = $("<img>");
			var newDiv3 =$("<img>");
			console.log(newDiv1);
			$("#character1").hide();
            $("#character2").hide();
            $("#character3").hide();
			newDiv1.attr("src","assets/images/character1.gif");
			newDiv2.attr("src","assets/images/character2.gif");
			newDiv3.attr("src","assets/images/character3.gif");
	    	$("#enemy").append(newDiv1);
	        $("#enemy").append(newDiv2);
	        $("#enemy").append(newDiv3);
	    }

	});	

});
