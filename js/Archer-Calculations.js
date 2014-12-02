//////Archer Calculations

var Set_Archer_Values = function(){

	set_archer_lvl();
	calculate_archer_cost();
	calculate_archer_training_time();
}

var calculate_archer_training_time = function(){

	////archer training time per
	var time_per = 25;
	////number of archers user has inputed 
	var $archer_quantity = $('#Archer_quantity').val();
	
	///////////
	//calculate the secs
	var seconds = '00';
	////Archer training time total secs equals training time per multiplied by amount user inputs
	var total_secs = time_per * $archer_quantity;
	//if archer training time in total secs - total secs rounded down does not equal zero AND is not lower than 0
	if(  (total_secs -= (Math.floor(total_secs/60)*60)) != 0 && ($archer_quantity > 0)  && (total_secs -= (Math.floor(total_secs/60)*60)) < 10  ){
		//seconds = total secs - total secs rounded down
		seconds = '0' + ( total_secs -= (Math.floor(total_secs/60)*60)  );		
	}
	else if(  (total_secs -= (Math.floor(total_secs/60)*60)) != 0 && ($archer_quantity > 0)  ){
		//seconds = total secs - total secs rounded down
		seconds = (  total_secs -= (Math.floor(total_secs/60)*60)  );		
	}
	//else seconds either equals 0 or seconds totals to minutes evenly so seconds are displayed as '00'
	else{
		seconds = '00';
	}

	///////////
	//need to calculate hours before minutes for displaying minutes above 59
	var hours = '00';
	////archer training time in total seconds for hours variable
	var hours_total_secs = time_per * $archer_quantity;
	//IF hours is less than 10 we want to put a 0 in front of our number
	//ELSE IF hours is greater than 9 we dont want a 0 in front of our number
	//ELSE hours equals 0 so we want 00 diplayed
	if(  (((hours_total_secs/60)/60) <= 9) && (((hours_total_secs/60)/60) > 0)  ){
		hours = '0' + Math.floor( (hours_total_secs/60)/60 )
	}
	else if(  ((hours_total_secs/60)/60) >= 10 ){
		hours = Math.floor( (hours_total_secs/60)/60 )
	}
	else{
		hours = '00';
	}

	////////////
	//calculate the minutes
	var minutes = '00';
	////archer training time in total seconds for minutes variable
	var min_total_secs = time_per * $archer_quantity;
	//IF total seconds is less than or equal to 0 display 00
	//ELSE IF total minutes is less than 10 display a 0 in front of minutes number
	//ELSE IF total minutes is less than 60 just display minutes number
	//ELSE IF minutes are more than 60 we need to minus total hours to get our minute and
	//add a 0 if front if number is less than 10 
	if(min_total_secs <= 0){
		minutes = '00';
	}
	else if(Math.floor(min_total_secs/60) < 10){
		minutes = '0' + (Math.floor(min_total_secs/60));
	}
	else if(Math.floor(min_total_secs/60) < 60){
		minutes = Math.floor(min_total_secs/60);
	}
	else if(Math.floor(min_total_secs/60) >= 60){
		minutes = (  (Math.floor(min_total_secs/60)) - (hours*60) );
		if(minutes < 10){
			minutes = '0' + (  (Math.floor(min_total_secs/60)) - (hours*60) );
		}
		else{
			minutes = (  (Math.floor(min_total_secs/60)) - (hours*60) );
		}
	}

	$('#Archer_trainingTime').text(hours + ':' + minutes + ':' + seconds);
}

var calculate_archer_cost = function(){
	var $archer_amount = $('#Archer_quantity').val();
	var $archer_level = $('#Archer_level').val();
	if($archer_amount > 0){
		if($archer_level == "1"){
			var archer_cost_per = 50;
			var archer_cost_total = $archer_amount * archer_cost_per;
			$('#Archer_elixirCost').text(archer_cost_total);
		}
		else if($archer_level == "2"){
			var archer_cost_per = 80;
			var archer_cost_total = $archer_amount * archer_cost_per;
			$('#Archer_elixirCost').text(archer_cost_total);
		}
		else if($archer_level == "3"){
			var archer_cost_per = 120;
			var archer_cost_total = $archer_amount * archer_cost_per;
			$('#Archer_elixirCost').text(archer_cost_total);
		}
		else if($archer_level == "4"){
			var archer_cost_per = 160;
			var archer_cost_total = $archer_amount * archer_cost_per;
			$('#Archer_elixirCost').text(archer_cost_total);
		}
		else if($archer_level == "5"){
			var archer_cost_per = 200;
			var archer_cost_total = $archer_amount * archer_cost_per;
			$('#Archer_elixirCost').text(archer_cost_total);
		}
		else if($archer_level == "6"){
			var archer_cost_per = 300;
			var archer_cost_total = $archer_amount * archer_cost_per;
			$('#Archer_elixirCost').text(archer_cost_total);
		}
		else if($archer_level == "7"){
			var archer_cost_per = 400;
			var archer_cost_total = $archer_amount * archer_cost_per;
			$('#Archer_elixirCost').text(archer_cost_total);
		}
	}
	else{
		$('#Archer_elixirCost').text('0');
	}
}

var set_archer_lvl = function(){
	var $archer_lvl = $('#Archer_level').val();

	if( $archer_lvl == "1" ){
		$('#Archer_image').attr('src', 'img/archer1.png');
	}
	else if( $archer_lvl == "2" ) {
		$('#Archer_image').attr('src', 'img/archer2.png');
	}
	else if( $archer_lvl == "3" ) {
		$('#Archer_image').attr('src', 'img/archer3.png');
	}
	else if( $archer_lvl == "4" ) {
		$('#Archer_image').attr('src', 'img/archer4.png');
	}
	else if( $archer_lvl == "5" ) {
		$('#Archer_image').attr('src', 'img/archer5.png');
	}
	else if( $archer_lvl == "6" ) {
		$('#Archer_image').attr('src', 'img/archer6.png');
	}
	else if( $archer_lvl == "7" ) {
		$('#Archer_image').attr('src', 'img/archer7.png');
	}
}
