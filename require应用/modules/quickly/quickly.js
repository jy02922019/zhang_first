define(["text!./quickly.html","css!./quickly.css","js/jquery.lazyload"],function(quicklyPage){

	return{
		init:function(){
				$(".quickly").html(quicklyPage).show().siblings("div").hide();
				// $("img.lazy").lazyload({container: $("#mylazy")
				// 				});	
		},
		ajax:function(){
			$.ajax({
				type:"get",
				url:"json/market.json",
				async:true,
				success:function(responseDate){
					$("#myboxtwo").load("table2.html",function(){
						var htmlStr = baidu.template("secondTmp",responseDate);

					$(".quickly").html(htmlStr).show().siblings("div").hide();

						
					


					$(".box1").on("click",function(){
						var id = this.id;
						console.log(id);
						$("#myboxthree").load("table3.html",function(){
						var myhtml = baidu.template("thiredTmp",{Date:responseDate.data.products[id]});
						$(".center").html(myhtml).show().siblings(".div").hide();
						$("img.lazy").lazyload({container: $("#mylazy")
								});	
						});
						
					})

					$("img.lazy").lazyload({container: $("#mylazy")
								});	

			})


					
		
	}
	})
}
}
})