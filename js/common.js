$(function() {

	$('#isolation .main--banner .btn').click(function(e){
		e.preventDefault();
		$('.modal--header').addClass('active');
		$('html').css('overflow', 'hidden');
	});

	$('.modal--header__close').click(function(){
		$('.modal--header').removeClass('active');
		$('html').css('overflow', '');

	});

});
