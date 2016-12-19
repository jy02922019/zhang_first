define(["Backbone"],function(Backbone){
	var Router = Backbone.Router.extend({
		  routes:{
		  		"":"home",
		  		home:"home",
				quickly:"quickly",
				shopping:"shopping",
				mine:"mine"
		  },
		  home: function(){
		  	require(["modules/home/home.js","js/swiper.min.js","js/baiduTemplate.js"],function(home){
		  		home.init();
		  		home.ajax();
		  	});
		  },
		  quickly: function(){
		  	require(["modules/quickly/quickly.js","js/baiduTemplate.js"],function(quickly){
		  		quickly.init();
		  		quickly.ajax();
		  	})
		  },
		   shopping: function(){
		  	require(["modules/shopping/shopping.js"],function(shopping){
		  		shopping.init();
		  	})
		  },
		  mine: function(){
		  	require(["modules/mine/mine.js"],function(mine){
		  		mine.init();
		  	})
		  }
		
	});
	return new Router();
});