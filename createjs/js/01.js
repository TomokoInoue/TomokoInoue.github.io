// DOMを読み込んだら
$(function(){

	// ステージの設定
	var stage = new createjs.Stage('canvasEl');

	// 円
	var ball = new createjs.Shape();
	ball.graphics.beginFill('#0000FF').drawCircle(0, 0, 40);
	ball.x = 100;
	ball.y = 100;
	ball.alpha = 0;
	stage.addChild(ball);

	// 四角形 drawRect(x座標、y座標、横幅、縦幅)
	var box = new createjs.Shape();
	box.graphics.beginFill('#FF0000').drawRect(200, 200, 50, 50);
	box.x = 100;
	box.y = 100;
	stage.addChild(box);
	box.addEventListener('click', function(){

		// アニメーション
		createjs.Tween.get(ball).to({alpha:1}, 1000).wait(1000).to({x:500}, 1000, createjs.Ease.bounceOut);

	})

	// フレームレート
	createjs.Ticker.setFPS(30);
	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;

	// アニメーションの設定
	createjs.Ticker.addEventListener('tick', function(){

	// ステージの更新
	stage.update();
	});


});
