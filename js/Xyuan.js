$(function(){
	$(".Xshi").click(function(){
		var Hzhuan=$("#Headt ul").height();
		if(Hzhuan<40){
			$("#Headt ul").css("height","auto")
		}else{
			$("#Headt ul").css("height","1.5rem")
		}
		
	})
	$("#Headt a").click(function(){
		$("#Headt a").css("color","rgb(82,87,93)")
		$(this).css("color","black")
	})
})