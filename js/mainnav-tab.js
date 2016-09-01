// JavaScript Document
$(document).ready(function(){
	$('.mainnav li').bind('mouseenter',function(){
		var $curr = $(this).attr('class');
		if($curr=='curr'){
			return ;
		}else if($curr==''){
			$(this).addClass('curr')
		}
	});
	$('.mainnav li').mouseleave(function(){
		var $curr = $(this).attr('class');
		if($curr==''){
			return ;
		}else if($curr=='curr'){
			$(this).removeClass('curr')
		}
	});					   
});