////Reg-Troops-Window

var clearLevel = function(){
	$('#Barbarian_level').val(1);
	$('#Barbarian_image').attr('src', 'img/barbarian1.png');
	Set_Barbarian_Values();

	$('#Archer_level').val(1);
	$('#Archer_image').attr('src', 'img/archer1.png');
	Set_Archer_Values();

	$('#Goblin_level').val(1);
	$('#Goblin_image').attr('src', 'img/goblin1.png');
	Set_Goblin_Values();

	$('#Giant_level').val(1);
	$('#Giant_image').attr('src', 'img/giant1.png');
	Set_Giant_Values();

	$('#Wall_Breaker_level').val(1);
	$('#Wall_Breaker_image').attr('src', 'img/wallBreaker1.png');
	Set_Wall_Breaker_Values();

	$('#Balloon_level').val(1);
	$('#Balloon_image').attr('src', 'img/balloon1.png');
	Set_Balloon_Values();

	$('#Wizard_level').val(1);
	$('#Wizard_image').attr('src', 'img/wizard1.png');
	Set_Wizard_Values();

	$('#Healer_level').val(1);
	$('#Healer_image').attr('src', 'img/healer1.png');
	Set_Healer_Values();

	$('#Dragon_level').val(1);
	$('#Dragon_image').attr('src', 'img/dragon1.png');
	Set_Dragon_Values();

	$('#Pekka_level').val(1);
	$('#Pekka_image').attr('src', 'img/pekka1.png');
	Set_Pekka_Values();
}

var clearQuantity = function(){
	$('#Barbarian_quantity').val(0);
	Set_Barbarian_Values();

	$('#Archer_quantity').val(0);
	Set_Archer_Values();

	$('#Goblin_quantity').val(0);
	Set_Goblin_Values();

	$('#Giant_quantity').val(0);
	Set_Giant_Values();

	$('#Wall_Breaker_quantity').val(0);
	Set_Wall_Breaker_Values();

	$('#Balloon_quantity').val(0);
	Set_Balloon_Values();

	$('#Wizard_quantity').val(0);
	Set_Wizard_Values();

	$('#Healer_quantity').val(0);
	Set_Healer_Values();

	$('#Dragon_quantity').val(0);
	Set_Dragon_Values();

	$('#Pekka_quantity').val(0);
	Set_Pekka_Values();
}

var clearAll = function(){
	clearLevel();
	clearQuantity();
}

var totalTroopsSelected = function(){
	var total_quantity;
	var $barb_quantity = $('#Barbarian_quantity').val();
	var $barb_quantity_num = Number($barb_quantity);

	var $archer_quantity = $('#Archer_quantity').val();
	var $archer_quantity_num = Number($archer_quantity);

	var $goblin_quantity = $('#Goblin_quantity').val();
	var $goblin_quantity_num = Number($goblin_quantity);

	var $giant_quantity = $('#Giant_quantity').val();
	var $spaces_per_unit = 5;
	var $giant_quantity_num = Number($giant_quantity * $spaces_per_unit);

	var $wall_breaker_quantity = $('#Wall_Breaker_quantity').val();
	var $spaces_per_unit = 2;
	var $wall_breaker_quantity_num = Number($wall_breaker_quantity * $spaces_per_unit);

	var $balloon_quantity = $('#Balloon_quantity').val();
	var $spaces_per_unit = 5;
	var $balloon_quantity_num = Number($balloon_quantity * $spaces_per_unit);

	var $wizard_quantity = $('#Wizard_quantity').val();
	var $spaces_per_unit = 4;
	var $wizard_quantity_num = Number($wizard_quantity * $spaces_per_unit);

	var $healer_quantity = $('#Healer_quantity').val();
	var $spaces_per_unit = 14;
	var $healer_quantity_num = Number($healer_quantity * $spaces_per_unit);

	var $dragon_quantity = $('#Dragon_quantity').val();
	var $spaces_per_unit = 20;
	var $dragon_quantity_num = Number($dragon_quantity * $spaces_per_unit);

	var $pekka_quantity = $('#Pekka_quantity').val();
	var $spaces_per_unit = 25;
	var $pekka_quantity_num = Number($pekka_quantity * $spaces_per_unit);

	if($barb_quantity_num <= 0 && $archer_quantity_num <= 0 && $goblin_quantity_num <= 0 && $giant_quantity_num <= 0 && 
		$wall_breaker_quantity_num <= 0 && $balloon_quantity_num <= 0 && $wizard_quantity_num <= 0 && $healer_quantity_num <= 0 && 
		$dragon_quantity_num <= 0 && $pekka_quantity_num <= 0){
		total_quantity = "0";
	}
	else{
		total_quantity = $barb_quantity_num + $archer_quantity_num + $goblin_quantity_num + $giant_quantity_num + $wall_breaker_quantity_num + 
		$balloon_quantity_num + $wizard_quantity_num + $healer_quantity_num + $dragon_quantity_num + $pekka_quantity_num;
	}


	$('#Total_Troops_Selected').text(total_quantity);

}

/////function to add commas to our elixir cost number
function commaNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
}

var totalElixirCost = function(){
	var total_elixir_cost;

	var $barb_cost = $('#Barbarian_elixirCost').text();
	var $barb_no_commas = $barb_cost.replace(/[^\d\.\-\ ]/g, '');
	var $barb_cost_num = Number($barb_no_commas);

	var $archer_cost = $('#Archer_elixirCost').text();
	var $archer_no_commas = $archer_cost.replace(/[^\d\.\-\ ]/g, '');
	var $archer_cost_num = Number($archer_no_commas);

	var $goblin_cost = $('#Goblin_elixirCost').text();
	var $goblin_no_commas = $goblin_cost.replace(/[^\d\.\-\ ]/g, '');
	var $goblin_cost_num = Number($goblin_no_commas);

	var $giant_cost = $('#Giant_elixirCost').text();
	var $giant_no_commas = $giant_cost.replace(/[^\d\.\-\ ]/g, '');
	var $giant_cost_num = Number($giant_no_commas);

	var $wall_breaker_cost = $('#Wall_Breaker_elixirCost').text();
	var $wall_breaker_no_commas = $wall_breaker_cost.replace(/[^\d\.\-\ ]/g, '');
	var $wall_breaker_cost_num = Number($wall_breaker_no_commas);

	var $balloon_cost = $('#Balloon_elixirCost').text();
	var $balloon_no_commas = $balloon_cost.replace(/[^\d\.\-\ ]/g, '');
	var $balloon_cost_num = Number($balloon_no_commas);

	var $wizard_cost = $('#Wizard_elixirCost').text();
	var $wizard_no_commas = $wizard_cost.replace(/[^\d\.\-\ ]/g, '');
	var $wizard_cost_num = Number($wizard_no_commas);

	var $healer_cost = $('#Healer_elixirCost').text();
	var $healer_no_commas = $healer_cost.replace(/[^\d\.\-\ ]/g, '');
	var $healer_cost_num = Number($healer_no_commas);

	var $dragon_cost = $('#Dragon_elixirCost').text();
	var $dragon_no_commas = $dragon_cost.replace(/[^\d\.\-\ ]/g, '');
	var $dragon_cost_num = Number($dragon_no_commas);

	var $pekka_cost = $('#Pekka_elixirCost').text();
	var $pekka_no_commas = $pekka_cost.replace(/[^\d\.\-\ ]/g, '');
	var $pekka_cost_num = Number($pekka_no_commas);

	if($barb_cost_num <= 0 && $archer_cost_num <= 0 && $goblin_cost_num <= 0 && $giant_cost_num <= 0 && $wall_breaker_cost_num <= 0 && 
		$balloon_cost_num <= 0 && $wizard_cost_num <= 0 && $healer_cost_num <= 0 && $dragon_cost_num <= 0 && $pekka_cost_num <= 0){
		total_elixir_cost = 0;
	}
	else{
		total_elixir_cost = $barb_cost_num + $archer_cost_num + $goblin_cost_num + $giant_cost_num + $wall_breaker_cost_num + 
		$balloon_cost_num + $wizard_cost_num + $healer_cost_num + $dragon_cost_num + $pekka_cost_num;
	}

	total_elixir_cost = commaNumber(total_elixir_cost);

	$('#Total_Elixir_Cost').text(total_elixir_cost);
}


















