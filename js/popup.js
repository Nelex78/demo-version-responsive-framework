/*
Responsive framework
author: Developed by Stas Melnikov. http://stas-melnikov.ru
*/


(function($){
	var popup_wrapper = $('#popup_wrapper'),
	popup = popup_wrapper.find('.popup');


	$('.open_popup').on('click', function(event){ 
		event.preventDefault();
		var show_effects = $(this).attr('data-show-effect');
		$(this).Show_Popup(show_effects, popup);
	});

	$('.close_popup').on('click', function(){ 
		var show_effects = $(this).attr('data-show-effect'),
		hide_effects = $(this).attr('data-hide-effect');
		$(this).Close_Popup(show_effects,hide_effects, popup);
	});
	
	$.fn.Show_Popup = function(show_effects, popup){

		popup_wrapper.fadeIn(500, function(){
			popup.addClass(show_effects);
			popup.addClass('animated');
			popup.addClass('active_popup');
		});
	};
	
	$.fn.Close_Popup = function(show_effects, hide_effects, popup){
	
		popup.addClass(hide_effects);
		popup.removeClass(show_effects);
		
		setTimeout(function(){
			popup_wrapper.fadeOut();
			popup.removeClass(hide_effects);
			popup.removeClass('animated ');
		},800) 
		
		
		setTimeout(function(){
			popup.removeClass('active_popup');
		},220) 
	};
	
})(jQuery);
