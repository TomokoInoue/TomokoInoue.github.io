window.addEventListener('load', init);

var stage;

function init() {
	stage = new createjs.Stage('canvasEl');
	console.log('ステージが読まれたよ');

	var finishTarget = new createjs.Shape();
	finishTarget.graphics.beginFill('green').drawCircle(300, 100, 70);
	stage.addChild(finishTarget);

	var circle = new createjs.Shape();
	circle.graphics.beginFill('DeepSkyBlue').drawCircle(100, 100, 50);
	stage.addChild(circle);
	circle.addEventListener('mousedown', startDrag);



	function startDrag(evt) {
		var instance = evt.target;
		instance.addEventListener('pressmove', drag);
		instance.offset = {x:instance.x - evt.stageX, y:instance.y - evt.stageY};
		stage.update();
	}

	function drag(evt) {
		console.log(evt.currentTarget.x);
		var instance = evt.target;
		var offset = instance.offset;
		instance.x = evt.stageX + offset.x;
		instance.y = evt.stageY + offset.y;
		instance.addEventListener('pressup', playAnime);
		stage.update();
	}

	function playAnime(evt) {

		if(evt.currentTarget.x > -290 && evt.currentTarget.x < +380) {
			if(evt.currentTarget.y > -90 && evt.currentTarget.y < +180) {
				console.log('入ったよ');
				circle.alpha = 0;

				var violin = {
					images:['img/violinSP.png'],
					frames:{width:450, height:650},
					animations:{
						play:[0,29]
					}
				}

				// スプライトシートの設定
				var violinSP = new createjs.SpriteSheet(violin);
				// スプライトの設定
				var animation = new createjs.Sprite(violinSP, 'play');
				stage.addChild(animation);
				animation.x = 300;
				animation.y = 100;
				animation.gotoAndPlay('play');

			}
		} else {
			console.log('入ってないよ');

		}
	}

	// フレームレート
	createjs.Ticker.setFPS(30);
	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;

	// アニメーションの設定
	createjs.Ticker.addEventListener('tick', function() {
	// ステージの更新
	stage.update();
	});


}
