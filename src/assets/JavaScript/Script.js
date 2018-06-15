// JavaScript Document

//Descrição: Função de carregamento da página, ao carregar a página tudo o que estiver dentro desta função sera carregado
//Autor: Lucas Santos
//Entrada: Nenhum dado
//Saida: Execução das demais funções dentro da mesma
$(document).ready(function(e){

/* ---------- Window Scroll --------- */

	
//Descrição: Função de rolagem da página, ao rolar a pagina as seguintes função serão executadas
//Autor: Lucas Santos
//Entrada: Nenhum dado
//Saida: Execução das demais funções dentro da mesma
$(window).scroll(function(){

	var home = $(".home").innerHeight() - 50;
	var analise = $(".analise").innerHeight() + home;
	
	//Descrição: A função tem como objetivo mudar as propriedades das cores da tag 'a' e mudar a logo caso a rolagem 
	// da tela seja maior que o tamanho da seção de 'analise'.
	// Autor: Lucas Santos
	// Entrada: Nenhum dado
	// Saida: Propriedades CSS da tag 'a' mudadas, e logo alterada
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
	
	//Descrição: A função tem como intuito remover a classe 'active' da tag 'a' que esta dentro da tag 'nav'
	//Atribuir o valor 'href' da mesma para a execução da função de animação para que a pagina seja rolada automaticamente para a
	//localização da id referente ao valor href no tempo de 1 segundo.
	//Autor: Lucas Santos
	//Entrada: Valor do atributo 'href'
	//Saida: Execução da animação de rolagem automatica da página	
	$("nav a").click(function(e){
		
		$("nav a").removeClass("active");
		
		$(this).addClass("active");	
		
		event.preventDefault();
	
		$("html, body").animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
		
	});
	
	//Descrição: Esta função serve apenas para não redirecionar a página a lugar nenhum quando a classe '.inic' for criada
	//Autor:Lucas Santos
	//Entrada: Nenhum dado
	//Saida: Não redirecionar
	$(".inic").click(function(){
		window.location.href = "";
	});
	
	
	
});
