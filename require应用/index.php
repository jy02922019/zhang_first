<?php
require_once "jssdk.php";
// appId  和 秘钥
$jssdk = new JSSDK("wx73badcb315510649", "43de74474101092caf78dcb50579e0a7");
$signPackage = $jssdk->GetSignPackage();
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>index</title>
	<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no" />
	<link rel="stylesheet" type="text/css" href="css/index.css">
	<link rel="stylesheet" type="text/css" href="css/swiper.min.css">
	<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
	<script data-main = "app.js" type="text/javascript" src = "js/require.js"></script>
	<script type="text/javascript">
			(function (doc, win) {
			  var docEl = doc.documentElement,
			    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
			    recalc = function () {
			      var clientWidth = docEl.clientWidth;
			      if (!clientWidth) return;
			      docEl.style.fontSize = 100 * (clientWidth / 414) + 'px';
			    };
			  if (!doc.addEventListener) return;
			  win.addEventListener(resizeEvt, recalc, false);
			  doc.addEventListener('DOMContentLoaded', recalc, false);
			})(document, window);
	</script>
	
</head>
<body>
	<!-- 头部
	<div id="header">
	<div class="header_left">
			<p>北京市政府<span>▼</span></p>
	</div>
		<figure>
			<a href="search.html"><img src="img/header.png" alt=""></a>
			<figcaption>
				<p>搜索</p>
			</figcaption>
		</figure>
	</div>
	
	容器
	<div id="index_main">
			<div class = "home"></div>
			<div class = "quickly"></div>
			<div class = "shopping"></div>
			<div class = "mine"></div>
	</div>
	
	
	
	脚部
	<div id="footer">
		<figure><a href="#home" class="footerOne">
			<img src="img/footer1.png" alt="" class="img1">
			<figcaption>
				<p>首页</p>
			</figcaption>
		</a></figure>
		<figure><a href="#quickly" class="footerTwo">
			<img src="img/footer2.png" alt="" class="img2">
			<figcaption>
				<p>闪送超市</p>
			</figcaption>
		</a></figure>
		<figure><a href="#shopping" class="footerThree">
			<img src="img/footer3.png" alt="" class="img3">
			<span class="num"></span>
			<figcaption>
				<p>购物车</p>
			</figcaption>
		</a></figure>
		<figure><a href="#mine" class="footerFour">
			<img src="img/footer4.png" alt="" class="img4">
			<figcaption>
				<p>我的</p>
			</figcaption>
		</a></figure>
	</div> -->
	
	<button onclick="f1()">获取地理位置</button>
	
	<script type="text/javascript">
		wx.config({
		    debug: true,
		    appId: '<?php echo $signPackage["appId"];?>',
		    timestamp: <?php echo $signPackage["timestamp"];?>,
		    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
		    signature: '<?php echo $signPackage["signature"];?>',
		     jsApiList: [
		        'checkJsApi',
		        'onMenuShareWeibo',
		        'onMenuShareQZone',
		        'hideMenuItems',
		        'showMenuItems',
		        'hideAllNonBaseMenuItem',
		        'showAllNonBaseMenuItem',
		        'translateVoice',
		        'startRecord',
		        'stopRecord',
		        'onVoiceRecordEnd',
		        'playVoice',
		        'onVoicePlayEnd',
		        'pauseVoice',
		        'stopVoice',
		        'uploadVoice',
		        'downloadVoice',
		        'chooseImage',
		        'previewImage',
		        'uploadImage',
		        'downloadImage',
		        'getNetworkType',
		        'openLocation',
		        'getLocation',
		        'hideOptionMenu',
		        'showOptionMenu',
		        'closeWindow',
		        'scanQRCode',
		        'chooseWXPay',
		        'openProductSpecificView',
		        'addCard',
		        'chooseCard',
		        'openCard'
		      ]
		  });

		function f1(){
			console.log(1);
			wx.getLocation({
		    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
		    success: function (res) {
		        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
		        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
		        var speed = res.speed; // 速度，以米/每秒计
		        var accuracy = res.accuracy; // 位置精度
		    }
			});
		}
		
	</script>
</body>

</html>