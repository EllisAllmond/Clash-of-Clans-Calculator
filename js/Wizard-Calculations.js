//////Wizard Calculations

var Set_Wizard_Values = function(){

	set_wizard_lvl();
	calculate_wizard_cost();
	calculate_wizard_training_time();
}

var calculate_wizard_training_time = function(){

	////wizard training time per in seconds
	var time_per = 480;
	////number of wizard user has inputed 
	var $quantity = $('#Wizard_quantity').val();
	
	///////////
	//calculate the secs
	var seconds = '00';
	////wizard training time total secs equals training time per multiplied by amount user inputs
	var total_secs = time_per * $quantity;
	//if wizard training time in total secs - total secs rounded down does not equal zero AND is not lower than 0
	if(  (total_secs -= (Math.floor(total_secs/60)*60)) != 0 && ($quantity > 0)  && (total_secs -= (Math.floor(total_secs/60)*60)) < 10  ){
		//seconds = total secs - total secs rounded down
		seconds = '0' + ( total_secs -= (Math.floor(total_secs/60)*60)  );		
	}
	else if(  (total_secs -= (Math.floor(total_secs/60)*60)) != 0 && ($quantity > 0)  ){
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
	////wizard training time in total seconds for hours variable
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
	////wizard training time in total seconds for minutes variable
	var min_total_secs = time_per * $quantity;
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

	$('#Wizard_trainingTime').text(hours + ':' + minutes + ':' + seconds);
}

/////function to add commas to our elixir cost number
function commaNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
}

var calculate_wizard_cost = function(){
	/////wizard_amount
	var $amount = $('#Wizard_quantity').val();
	/////wizard_level
	var $level = $('#Wizard_level').val();
	////wizards elixer cost display element
	var $elixir_cost = $('#Wizard_elixirCost');
	////wizard cost per unit
	var cost_per;
	////wizards cost total which is the amount multiplied by cost per unit
	var cost_total;
	////total_with_commas takes cost_total and adds the commas for thousands, millions, etc.
	var total_with_commas;
	if($amount > 0){
		if($level == "1"){
			cost_per = 1500;
			cost_total = $amount * cost_per;
			total_with_commas = commaNumber(cost_total);
			$elixir_cost.text(total_with_commas);
		}
		else if($level == "2"){
			cost_per = 2000;
			cost_total = $amount * cost_per;
			total_with_commas = commaNumber(cost_total);
			$elixir_cost.text(total_with_commas);
		}
		else if($level == "3"){
			cost_per = 2500;
			cost_total = $amount * cost_per;
			total_with_commas = commaNumber(cost_total);
			$elixir_cost.text(total_with_commas);
		}
		else if($level == "4"){
			cost_per = 3000;
			cost_total = $amount * cost_per;
			total_with_commas = commaNumber(cost_total);
			$elixir_cost.text(total_with_commas);
		}
		else if($level == "5"){
			cost_per = 3500;
			cost_total = $amount * cost_per;
			total_with_commas = commaNumber(cost_total);
			$elixir_cost.text(total_with_commas);
		}
		else if($level == "6"){
			cost_per = 4000;
			cost_total = $amount * cost_per;
			total_with_commas = commaNumber(cost_total);
			$elixir_cost.text(total_with_commas);
		}
	}
	else{
		$elixir_cost.text('0');
	}
}

var set_wizard_lvl = function(){
	////wizard_lvl
	var $lvl = $('#Wizard_level').val();
	////wizards image element
	var $image = $('#Wizard_image');

	if( $lvl == "1" ){
		$image.attr('src', 'img/wizard1.png');
	}
	else if( $lvl == "2" ) {
		$image.attr('src', 'img/wizard2.png');
	}
	else if( $lvl == "3" ) {
		$image.attr('src', 'img/wizard3.png');
	}
	else if( $lvl == "4" ) {
		$image.attr('src', 'img/wizard4.png');
	}
	else if( $lvl == "5" ) {
		$image.attr('src', 'img/wizard5.png');
	}
	else if( $lvl == "6" ) {
		$image.attr('src', 'img/wizard6.png');
	}
}

function wizardHandleChange(input) {
    if (input.value <= 0) input.value = 0;
    if (input.value >= 60) input.value = 60;
}
