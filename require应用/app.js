require.config({
	paths:{
		"jquery":"./js/jquery-1.11.2",
		"Backbone":"./js/backbone",
		"underscore":"./js/underscore",
		"text":"./js/text",
		"css":"./js/css"
	}
})

//使用backbone路由
require(["jquery","Backbone","router"],function($,Backbone,router,swiper){
	Backbone.history.start();

	$("#footer").on("click",".footerTwo",function(){
 	// // console.log(1);
 	// var myimg = $(this).find("img").attr("src");
 	// console.log(myimg);

 	$(".img2").attr("src","img/quickly4.png");
 	$(".img1").attr("src","img/shopping3.png");
 	$(".img3").attr("src","img/footer3.png");
 	$(".img4").attr("src","img/footer4.png");

 	// $(".img1").replaceWith("<img src='img/shopping3.png'>");
 	});

 	$("#footer").on("click",".footerThree",function(){
	 	$(".img3").attr("src","img/shopping2.png");
	 	$(".img1").attr("src","img/shopping3.png");
	 	$(".img2").attr("src","img/footer2.png");
	 	$(".img4").attr("src","img/footer4.png");
 	});

 	$("#footer").on("click",".footerFour",function(){
		$(".img4").attr("src","img/myself15.png");
	 	$(".img3").attr("src","img/footer3.png");
	 	$(".img2").attr("src","img/footer2.png");
	 	$(".img1").attr("src","img/shopping3.png");
 	
 	});
 	$("#footer").on("click",".footerOne",function(){
		$(".img4").attr("src","img/footer4.png");
	 	$(".img3").attr("src","img/footer3.png");
	 	$(".img2").attr("src","img/footer2.png");
	 	$(".img1").attr("src","img/footer1.png");
 	
 	})

})
 

 