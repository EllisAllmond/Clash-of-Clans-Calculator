///////   main.js - Main JavaScript File  ///////

var main = function(){

	Set_Barbarian_Values();
	Set_Archer_Values();
	Set_Goblin_Values();
	Set_Giant_Values();
	Set_Wall_Breaker_Values();
	Set_Balloon_Values();
	Set_Wizard_Values();
	Set_Healer_Values();
	Set_Dragon_Values();
	Set_Pekka_Values();

	totalTroopsSelected();
	totalElixirCost();
}



$(document).ready(main);