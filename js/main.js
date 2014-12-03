///////   main.js - Main JavaScript File  ///////

var main = function(){

	Set_Barbarian_Values();
	Set_Archer_Values();
	Set_Goblin_Values();

	totalTroopsSelected();
	totalElixirCost();
}



$(document).ready(main);