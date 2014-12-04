//////Barbarian Calculations

var Set_Barbarian_Values = function(){

	set_barb_lvl();
	calculate_barb_cost();
	calculate_barb_training_time();
}

var calculate_barb_training_time = function(){

	////barbarian training time per in seconds
	var time_per = 20;
	////number of barbarians user has inputed 
	var $quantity = $('#Barbarian_quantity').val();
	
	///////////
	//calculate the secs
	var seconds = '00';
	////barb training time total secs equals training time per multiplied by amount user inputs
	var total_secs = time_per * $quantity;
	//if barbarian training time in total secs - total secs rounded down does not equal zero AND is not lower than 0
	if(  ( total_secs -= (Math.floor(total_secs/60)*60)  ) != 0 && $quantity > 0  ){
		//seconds = total secs - total secs rounded down
		seconds = ( total_secs -= (Math.floor(total_secs/60)*60)  );		
	}
	//else seconds either equals 0 or seconds totals to minutes evenly so seconds are displayed as '00'
	else{
		seconds = '00';
	}

	///////////
	//need to calculate hours before minutes for displaying minutes above 59
	var hours = '00';
	////barbarian training time in total seconds for hours variable
	var hours_total_secs = time_per * $quantity;
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
	////barbarian training time in total seconds for minutes variable
	var min_total_secs = time_per * $quantity;
	//IF total seconds is less than or equal to 0 display 00
	//ELSE IF total minutes is less than 10 display a 0 in front of minutes number
	//ELSE IF total minutes is less than 60 just display minutes number
	//ELSE IF minutes are more than 60 we need to minus total hours to get our minute and
	//add a 0 if front if number is less than 10 
	if(min_total_secs <= 0){
		minutes = '00';
	}
	else if( Math.floor(min_total_secs/60) < 10){
		minutes = '0' + (Math.floor(min_total_secs/60));
	}
	else if(Math.floor(min_total_secs/60) < 60){
		minutes = Math.floor(min_total_secs/60);
	}
	else if(Math.floor(min_total_secs/60) >= 60){
		minutes = (  ( Math.floor(min_total_secs/60)) - (hours*60) );
		if(minutes < 10){
			minutes = '0' + (  ( Math.floor(min_total_secs/60)) - (hours*60) );
		}
		else{
			minutes = (  ( Math.floor(min_total_secs/60)) - (hours*60) );
		}
	}

	$('#Barbarian_trainingTime').text(hours + ':' + minutes + ':' + seconds);
}

/////function to add commas to our elixir cost number
function commaNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
}

var calculate_barb_cost = function(){
	////barbarian_amount number of barbs inputed by user
	var $amount = $('#Barbarian_quantity').val();
	////barbarian_level selected by user
	var $level = $('#Barbarian_level').val();
	////barbarians elixer cost display element
	var $elixir_cost = $('#Barbarian_elixirCost');
	////archer cost per unit
	var cost_per;
	////archers cost total which is the amount multiplied by cost per unit
	var cost_total;
	////total_with_commas takes cost_total and adds the commas for thousands, millions, etc.
	var total_with_commas;

	if($amount > 0){
		if($level == "1"){
			cost_per = 25;
			cost_total = $amount * cost_per;
			total_with_commas = commaNumber(cost_total);
			$elixir_cost.text(total_with_commas);
		}
		else if($level == "2"){
			cost_per = 40;
			cost_total = $amount * cost_per;
			total_with_commas = commaNumber(cost_total);
			$elixir_cost.text(total_with_commas);
		}
		else if($level == "3"){
			cost_per = 60;
			cost_total = $amount * cost_per;
			total_with_commas = commaNumber(cost_total);
			$elixir_cost.text(total_with_commas);
		}
		else if($level == "4"){
			cost_per = 80;
			cost_total = $amount * cost_per;
			total_with_commas = commaNumber(cost_total);
			$elixir_cost.text(total_with_commas);
		}
		else if($level == "5"){
			cost_per = 100;
			cost_total = $amount * cost_per;
			total_with_commas = commaNumber(cost_total);
			$elixir_cost.text(total_with_commas);
		}
		else if($level == "6"){
			cost_per = 150;
			cost_total = $amount * cost_per;
			total_with_commas = commaNumber(cost_total);
			$elixir_cost.text(total_with_commas);
		}
		else if($level == "7"){
			cost_per = 200;
			cost_total = $amount * cost_per;
			total_with_commas = commaNumber(cost_total);
			$elixir_cost.text(total_with_commas);
		}
	}
	else{
		$elixir_cost.text('0');
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

function barbHandleChange(input) {
    if (input.value <= 0) input.value = 0;
    if (input.value >= 240) input.value = 240;
}







