window.addEventListener('load', init);

var stage;

function init() {
	stage = new createjs.Stage('canvasEl');
		console.log('読み込み完了！！！');

	// スプライトシートの設定
	var violinSP = new createjs.SpriteSheet(violin);
	// スプライトの設定
	var animation = new createjs.Sprite(violinSP, 'play');
	stage.addChild(animation);
	animation.x = 300;
	animation.y = 100;
	animation.gotoAndPlay('play');

	// フレームレート
	// createjs.Ticker.setFPS(60);
	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;

	// アニメーションの設定
	createjs.Ticker.addEventListener('tick', function() {
	// ステージの更新
	stage.update();
	});

	stage.update();
}
