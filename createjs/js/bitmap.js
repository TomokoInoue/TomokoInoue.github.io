// 先読みするリスト
var manifest = [
	{src:'img/tomato.png'},
	{src:'img/pumpkin.png'},
	{src:'img/hourensou.png'}
];



// DOMを読み込んだら
$(function(){

	// ステージの設定
	var stage = new createjs.Stage('canvasEl');

	// loadQueue ローディング
	var loadQueue = new createjs.LoadQueue();
	loadQueue.loadManifest(manifest); // 読み込み開始

	loadQueue.addEventListener('complete', function(){
		console.log('読み込み完了');

		showVege();
	});

	function showVege(){
		var tomato = new createjs.Bitmap(manifest[0].src);
		tomato.x = 100;
		tomato.y = 100;
		stage.addChild(tomato);

		var pumpkin = new createjs.Bitmap(manifest[1].src);
		pumpkin.x = 100;
		pumpkin.y = 300;
		stage.addChild(pumpkin);

		var hourensou = new createjs.Bitmap(manifest[2].src);
		pumpkin.x = 100;
		pumpkin.y = 600;
		stage.addChild(pumpkin);

		stage.update();
	}



	// フレームレート
	createjs.Ticker.setFPS(30);
	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;

	// アニメーションの設定
	createjs.Ticker.addEventListener('tick', function(){

	// ステージの更新
	stage.update();
	});


});
