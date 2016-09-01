// JavaScript Document
$(document).ready(function(){
	   $(".thumil_img img").hover(
	      function(){$(this).animate({marginRight:"20"}),"slow"},
	      function(){$(this).animate({marginRight:"0"}),"slow"}
	                         )
	   $(".thumil_img li a").click(function(){
	     var img_path=$(this).attr("href");
	     var title=$(this).attr("title");
	     $("#largeImages").attr({src:img_path}) ;
	     $("#largeImages").fadeIn("slow")
	     $(".title-pic").html(title);
	     return false;       
	})
});