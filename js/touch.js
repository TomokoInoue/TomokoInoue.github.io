//DOMロード
$(function(){

	// タッチイベント
	$('#ball').on('touchstart',function(){
		$('#touchResult li').eq(0).text('touchstartしたよ');
	});

	$('#ball').on('touchmove',function(){
		$('#touchResult li').eq(1).text('touchmoveしたよ');
	});

	$('#ball').on('touchend',function(){
		$('#touchResult li').eq(2).text('touchendしたよ');
	});

});
