//DOMロード
$(function(){

	// 緯度・経度
	var lon;
	var lat;


	// GPS
	navigator.geolocation.getCurrentPosition(function(evt){
		// 緯度
		var lon = evt.coords.longitude;
		// 経度
		var lat = evt.coords.longitude;
	},
	function(erro){
		console.log('GPS取れなかったよー');
	});


	// タッチイベント
	$('#ball').on('touchstart',function(){
		$('#touchResult li').eq(0).text('touchstartしたよ');
	});

	$('#ball').on('touchmove',function(){
		$('#touchResult li').eq(1).text('touchmoveしたよ');
	});

	$('#ball').on('touchend',function(){
		$('#touchResult li').eq(2).text('touchendしたよ');

		$('#geo li').eq(0).text('緯度: ' + lon);
		$('#geo li').eq(1).text('経度: ' + lat);
	});








});
