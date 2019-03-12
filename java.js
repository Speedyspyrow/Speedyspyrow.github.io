$(document).ready(function(){
	$(".softskills").hide();
	$(".hardskills").hide();

	$("#btnsoftskills").click(function(){
		$(".softskills").show();
		$(".hardskills").hide();
	});

	$("#btnhardskills").click(function(){
		$(".softskills").hide();
		$(".hardskills").show();
	});

});