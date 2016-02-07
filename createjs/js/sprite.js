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
		// スプライトシートの設定
		var vcSprite = new createjs.SpriteSheet(vitaminCSprite);
		var ironSprite = new createjs.SpriteSheet(ironSprite);

		// スプライトの設定
		var vitaminC = new createjs.Sprite(vcSprite, 'stand');
		stage.addChild(vitaminC);
		vitaminC.x = 150;
		vitaminC.y = 480;
		vitaminC.alpha = 0;

		var iron = new createjs.Sprite(ironSprite, 'stand');
		stage.addChild(iron);
		iron.x = 150;
		iron.y = 1000;
		iron.alpha = 0;

		// アニメーション
		createjs.Tween.get(vitaminC).to({alpha:1},500).wait(1000).call(vitaminCWalk).to({x:500},4000).call(vitaminCStand);
			// call = functionを呼び出す
		createjs.Tween.get(iron).to({alpha:1},500).wait(2000).call(ironWalk).to({x:500},4000).call(ironStand);

		// ビタミンCが歩く
		function vitaminCWalk(){
			vitaminC.gotoAndPlay('walk');
			// gotoAndPlay = スプライトを走らせる命令
		}
		// ビタミンCが止まる
		function vitaminCStand(){
			vitaminC.gotoAndPlay('stand');
		}


		function ironWalk(){
			iron.gotoAndPlay('walk');
		}
		function ironStand(){
			iron.gotoAndPlay('stand');
		}


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
