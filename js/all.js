$(document).ready(function(){
	$('.banner').cycle({
		fx: 'fade',
		speed: 3000
	});
	$('.showmenu').on('click',  function(e){
    	e.preventDefault();
    $('body').toggleClass('menu-show');
  	});

});



