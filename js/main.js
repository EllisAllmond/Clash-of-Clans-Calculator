///////   main.js Main JavaScript File  ///////

var main = function(){

	set_barb_lvl();
	//calculate_barb_cost();
	//$('#Barbarian_trainingTime').text()
	calculate_barb_training_time();
}

var calculate_barb_training_time = function(){
	var barb_training_time_per = 20;
	var $barb_quantity = $('#Barbarian_quantity').val();
	var barb_training_time_total_secs = barb_training_time_per * $barb_quantity;
	
	//calculate the secs
	var seconds = '00';
	//if total secs - total secs rounded down does not equal zero 
	if(  ( barb_training_time_total_secs -= (( Math.floor(barb_training_time_total_secs/60)*60))  ) != 0 && $barb_quantity > 0  ){
		//seconds = total secs - total secs rounded down
		seconds = ( barb_training_time_total_secs -=(( Math.floor(barb_training_time_total_secs/60)*60) )  );		
	}
	//else seconds either equals 0 or seconds totals to minutes evenly so seconds are displayed as '00'
	else{
		seconds = '00';
	}

	//need to calculate hours before minutes for displaying minutes above 59
	var hours = '00';
	var barb3_training_time_per = 20;
	var barb_training_time_total_secs_for_hours = barb3_training_time_per * $barb_quantity;
	if(  ((barb_training_time_total_secs_for_hours/60)/60) >= 1 ){
		hours = '0' + Math.floor( (barb_training_time_total_secs_for_hours/60)/60 )
	}
	else{
		hours = '00';
	}

	//calculate the minutes
	var minutes = '00';
	var barb2_training_time_per = 20;
	var barb_training_time_total_secs_for_min = barb2_training_time_per * $barb_quantity;

	if(barb_training_time_total_secs_for_min <= 0){
		minutes = '00';
	}
	else if( Math.floor(barb_training_time_total_secs_for_min/60) < 10){
		minutes = '0' + (Math.floor(barb_training_time_total_secs_for_min/60));
	}
	else if(Math.floor(barb_training_time_total_secs_for_min/60) < 60){
		minutes = Math.floor(barb_training_time_total_secs_for_min/60);
	}
	else if(Math.floor(barb_training_time_total_secs_for_min/60) >= 60){
		minutes = (  ( Math.floor(barb_training_time_total_secs_for_min/60)) - (hours*60) );
		if(minutes < 10){
			minutes = '0' + (  ( Math.floor(barb_training_time_total_secs_for_min/60)) - (hours*60) );
		}
		else{
			minutes = (  ( Math.floor(barb_training_time_total_secs_for_min/60)) - (hours*60) );
		}
	}

	// $('#Barbarian_trainingTime').text(barb_training_time_total);
	$('#Barbarian_trainingTime').text(hours + ':' + minutes + ':' + seconds);
	//$('#Barbarian_trainingTime').text(barb_training_time_total_secs_for_min);
}

var calculate_barb_cost = function(){
	var $barb_amount = $('#Barbarian_quantity').val();
	var $barb_level = $('#Barbarian_level').val();
	if($barb_amount > 0){
		if($barb_level == "1"){
			var barb_cost_per = 25;
			var barb_cost_total = $barb_amount * barb_cost_per;
			$('#Barbarian_elixirCost').text(barb_cost_total);
		}
		else if($barb_level == "2"){
			var barb_cost_per = 40;
			var barb_cost_total = $barb_amount * barb_cost_per;
			$('#Barbarian_elixirCost').text(barb_cost_total);
		}
		else if($barb_level == "3"){
			var barb_cost_per = 60;
			var barb_cost_total = $barb_amount * barb_cost_per;
			$('#Barbarian_elixirCost').text(barb_cost_total);
		}
		else if($barb_level == "4"){
			var barb_cost_per = 80;
			var barb_cost_total = $barb_amount * barb_cost_per;
			$('#Barbarian_elixirCost').text(barb_cost_total);
		}
		else if($barb_level == "5"){
			var barb_cost_per = 100;
			var barb_cost_total = $barb_amount * barb_cost_per;
			$('#Barbarian_elixirCost').text(barb_cost_total);
		}
		else if($barb_level == "6"){
			var barb_cost_per = 150;
			var barb_cost_total = $barb_amount * barb_cost_per;
			$('#Barbarian_elixirCost').text(barb_cost_total);
		}
		else if($barb_level == "7"){
			var barb_cost_per = 200;
			var barb_cost_total = $barb_amount * barb_cost_per;
			$('#Barbarian_elixirCost').text(barb_cost_total);
		}
	}
	else{
		$('#Barbarian_elixirCost').text('0');
	}
}

var set_barb_lvl = function(){
	var $barb_lvl = $('#Barbarian_level').val();

	if( $barb_lvl == "1" ){
		$('#Barbarian_image').attr('src', 'img/barbarian1.png');
	}
	else if( $barb_lvl == "2" ) {
		$('#Barbarian_image').attr('src', 'img/barbarian2.png');
	}
	else if( $barb_lvl == "3" ) {
		$('#Barbarian_image').attr('src', 'img/barbarian3.png');
	}
	else if( $barb_lvl == "4" ) {
		$('#Barbarian_image').attr('src', 'img/barbarian4.png');
	}
	else if( $barb_lvl == "5" ) {
		$('#Barbarian_image').attr('src', 'img/barbarian5.png');
	}
	else if( $barb_lvl == "6" ) {
		$('#Barbarian_image').attr('src', 'img/barbarian6.png');
	}
	else if( $barb_lvl == "7" ) {
		$('#Barbarian_image').attr('src', 'img/barbarian7.png');
	}
}

$(document).ready(main);