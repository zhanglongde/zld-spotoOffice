// JavaScript Document
$(document).ready(function(){
	$('li .menu-title h3').toggle(function(){
		$(this).children('button').fadeIn(1000).removeClass('hidden').end()
		        .parent().parent().siblings().children('div.menu-title').children('h3').children('button').fadeOut(500).addClass('hidden');
				
		$(this).parent().next().slideDown('slow');
		$(this).parent().parent().siblings().children('div.menu-title').next().slideUp('slow');
				
	},function(){
		$(this).children('button').fadeOut(1000).removeClass('hidden');
				
		$(this).parent().next().slideUp('slow');
		});
	
	$('.menu2 li').bind('mouseenter',function(){
		var $curr = $(this).attr('class');
		if($curr=='curr'){
			return ;
		}else if($curr==''){
			$(this).addClass('curr')
		}
	});
	$('.menu2 li').mouseleave(function(){
		var $curr = $(this).attr('class');
		if($curr==''){
			return ;
		}else if($curr=='curr'){
			$(this).removeClass('curr')
		}
	});
	$('.menu2 li').click(function(){
		var $curr = $(this).attr('class');
		if($curr=='click curr'){
			return ;
		}else if($curr=='curr'){
			$(this).parent().children().removeClass('click curr');
			$(this).addClass('click curr');
		}
	});
});