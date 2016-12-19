define(["text!./home.html","css!./home.css"],function(homePage){
	return{
		init:function(){
			$(".home").html(homePage).show().siblings("div").hide();
		},

		ajax:function(){
			$.ajax({
				type:"get",
				url:"json/homePage.json",
				async:true,
				success:function(responseDate){
					$("#mybox").load("table.html",function(){
						var htmlStr = baidu.template("firstTmp",responseDate);
						$(".home").html(htmlStr).show().siblings("div").hide();
						$(this).find("#firstTmp").remove();

							var mySwiper = new Swiper(".swiper-container", {
							autoplay: 2000,//可选选项，自动滑动(时间:毫秒)
							speed:500,//滑块滑动的速度(从开始到结束经历的时间)
							loop : true,//循环
							pagination :".swiper-pagination",//分页器

					// initialSlide :2,//初始显示第几张页面
					// direction : 'vertical', 设置滑动的方向
					// effect:"cube",  切换效果

					// 适合3.30版本以上使用
					// paginationType:"bullets"  圆点（默认）
					// paginationType:'fraction',  分数 页码/总页码
					// paginationType : 'progress',		进度条
					//paginationType : 'custom',
   						});


							$(".num").hide();
							var count = 0;
							$(".box1_main1").on("click","div",function(e){
								e= e||window.event;
								e.preventDefault();
								
								var imgSrc = $(this).parent().siblings("img").attr("src");
								var x = e.clientX-100,
									y = e.clientY-170;
									// console.log(x,y)
								// console.log(imgSrc);
								$(this).parent().siblings("img").after("<div class='myimg'><img src='"+imgSrc+"' style='position:fixed;left:"+x+"px;top:"+y+"px'/><div>");
								var myimg1 = $(".myimg").find("img");
								setTimeout(function(){
									myimg1.remove();
								},2000);

								$(".num").show();
								$(".num").html(++count);
							});

					});

					
				}
			})
		}
	}
})