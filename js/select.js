// JavaScript Document
$(document).ready(function(){
	$('#admin-inf .t-hd .username input').click(function(){
		if($('#admin-inf .t-hd .username input').attr('checked')==true){
			$('#admin-inf .t-bd .username input').attr('checked','true');
		}else{
			$('#admin-inf .t-bd .username input').removeAttr('checked','true');
		}
	});
	$('#admin-inf .t-bd .username input').click(function(){
		if($('#admin-inf .t-bd .username input').attr('checked')==false){
			$('#admin-inf .t-hd .username input').removeAttr('checked',true);
		}												 
	});
});