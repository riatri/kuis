//Gaia Java Document
//Developed by Towfiq I.
// www.towfiqi.com

	$(function(){
		$('.t1').hover(function(){
			$(this).stop().animate({"opacity":"0"}, "slow");
		}, function(){
			$(this).stop().animate({"opacity":"1"}, "slow");
		});
		
		$('.fb1').hover(function(){
			$(this).stop().animate({"opacity":"0"}, "slow");
		}, function(){
			$(this).stop().animate({"opacity":"1"}, "slow");
		});
		
		$('.rss1').hover(function(){
			$(this).stop().animate({"opacity":"0"}, "slow");
		}, function(){
			$(this).stop().animate({"opacity":"1"}, "slow");
		});
		
		$("#menu ul li a").hover(function(){
			$(this).stop().animate({"color":"#E0F3B0"},"slow");
		}, function(){
			$(this).stop().animate({"color":"#84a532"},"slow");
		});
		
		$("a.active").hover(function(){
			$(this).stop().animate({"color":"#E0F3B0"},"slow");
		}, function(){
			$(this).stop().animate({"color":"#E0F3B0"},"slow");
		});
		
		
		$('li.submenu').hoverIntent(function(){
			$(this).find('ul').slideDown('medium');
		}, function(){
			$(this).find('ul').slideUp('medium');
			});
		
	});
	
$(document).ready(function(){	
	$("#slider").easySlider({
		auto: true,
		continuous: true 
	});
});

      jQuery(document).ready(function($) {
        $(".tweet").tweet({
          join_text: "auto",
          username: "towfiqi",
          count: 1,
          auto_join_text_default: "we said,", 
          auto_join_text_ed: "we",
          auto_join_text_ing: "we were",
          auto_join_text_reply: "we replied",
          auto_join_text_url: "we were checking out",
          loading_text: "loading tweets..."
        });
	});
	
    $(document).ready(function(){ 
        $(document).pngFix(); 
    }); 	
