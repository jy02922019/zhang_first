define(["text!./shopping.html","css!./shopping.css"],function(shoppingPage){

	return{
		init:function(){
				$(".shopping").html(shoppingPage).show().siblings("div").hide();
		},
	}
})