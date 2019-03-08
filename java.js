$(document).ready(function(){
	$(".interface1").hide();
	$(".interface2").hide();
	$(".interface3").hide();

	$(".tab0").click(function(){
		$(".interface1").hide();
		$(".interface2").hide();
		$(".interface3").hide();
	});

	$(".tab1").click(function(){
		$(".interface1").show();
		$(".interface2").hide();
		$(".interface3").hide();
	});

	$(".tab2").click(function(){
		$(".interface1").hide();
		$(".interface2").show();
		$(".interface3").hide();
	});

	$(".tab3").click(function(){
		$(".interface1").hide();
		$(".interface2").hide();
		$(".interface3").show();
	});

});