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
}

var clearQuantity = function(){
	$('#Barbarian_quantity').val(0);
	Set_Barbarian_Values();

	$('#Archer_quantity').val(0);
	Set_Archer_Values();

	$('#Goblin_quantity').val(0);
	Set_Goblin_Values();
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

	if($barb_quantity_num <= 0 && $archer_quantity_num <= 0 && $goblin_quantity_num <= 0){
		total_quantity = "0";
	}
	else{
		total_quantity = $barb_quantity_num + $archer_quantity_num + $goblin_quantity_num;
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

	if($barb_cost_num <= 0 && $archer_cost_num <= 0 && $goblin_cost_num <= 0){
		total_elixir_cost = 0;
	}
	else{
		total_elixir_cost = $barb_cost_num + $archer_cost_num + $goblin_cost_num;
	}

	total_elixir_cost = commaNumber(total_elixir_cost);

	$('#Total_Elixir_Cost').text(total_elixir_cost);
}


















