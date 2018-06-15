// JavaScript Document

$(document).ready(function(e){

/* ---------- Window Scroll --------- */

$(window).scroll(function(){

	var home = $(".home").innerHeight() - 50;
	var analise = $(".analise").innerHeight() + home;
	
	if($(this).scrollTop() > analise){
		$("nav a").css({"color":"#000"});
		$(".logo").fadeOut(300);
		$(".logo2").fadeIn(300);
	}
	
	else{
		$("nav a").css({"color":"#FFF"});
		$(".logo").fadeIn(300);
		$(".logo2").fadeOut(300);
	}

});

/* ---------- Menu ---------- */	

	$("nav a").click(function(e){
		
		$("nav a").removeClass("active");
		
		$(this).addClass("active");	
		
		event.preventDefault();
		
		var element = $(this).attr("href");
		
		$("html, body").animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
		
	});
	
	$(".inic").click(function(){
		window.location.href = "";
	});
	
	
	
});