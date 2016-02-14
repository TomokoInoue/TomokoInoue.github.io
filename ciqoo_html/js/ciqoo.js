window.addEventListener('load', init);
// htmlの<body onload="init()">の新しい書き方
// jQueryは$(function(){
//		ここに書く
// });

var stage;
var violinBtn;
var congaBtn;
var woodbassBtn;
var bassBtn;

var target01;
var target02;
var target03;
var target04;

var manifest = [
	{src:'img/ciqoo_stage.png'},
	{src:'img/violinBtn.png'},
	{src:'img/congaBtn.png'},
	{src:'img/woodbassBtn.png'},
	{src:'img/bassBtn.png'},
	{src:'img/guitarBtn.png'},
];



// DOMを読み込んだら
function init() {
	// stageの設定
	stage = new createjs.Stage('canvasEl');
	// stage.scaleX = 0.5;
	// stage.scaleY = 0.5;

	// manifestのプリロード
	var loader = new createjs.LoadQueue(false);
	loader.loadManifest(manifest);
	loader.addEventListener('complete', function() {
		console.log('読み込み完了！！！');
		showGround();
	});

	function showGround() {
		// 背景の描画
		var background = new createjs.Bitmap(manifest[0].src);
		stage.addChild(background);
		console.log('背景できたよ');

		// 配置位置の描画
		target01 = new createjs.Shape();
		target01.graphics.beginFill('green').drawRect(0, 0, 600, 800);
		target01.x = 150;
		target01.y = 350;
		target01.alpha = 0;
		stage.addChild(target01);

		target02 = new createjs.Shape();
		target02.graphics.beginFill('green').drawRect(0, 0, 600, 800);
		target02.x = 800;
		target02.y = 350;
		target02.alpha = 0;
		stage.addChild(target02);

		target03 = new createjs.Shape();
		target03.graphics.beginFill('green').drawRect(0, 0, 700, 500);
		target03.x = 50;
		target03.y = 1200;
		target03.alpha = 0;
		stage.addChild(target03);

		target04 = new createjs.Shape();
		target04.graphics.beginFill('green').drawRect(0, 0, 700, 500);
		target04.x = 800;
		target04.y = 1200;
		target04.alpha = 0;
		stage.addChild(target04);

		// 各ボタンの描画
		// バイオリン
		violinBtn = new createjs.Bitmap(manifest[1].src);
		violinBtn.x = 30;
		violinBtn.y = 1765;
		stage.addChild(violinBtn);
		violinBtn.addEventListener('mousedown', startDrag);

		// コンガ
		congaBtn = new createjs.Bitmap(manifest[2].src);
		congaBtn.x = 320;
		congaBtn.y = 1765;
		stage.addChild(congaBtn);
		congaBtn.addEventListener('mousedown', startDrag);

		// ウッドベース
		woodbassBtn = new createjs.Bitmap(manifest[3].src);
		woodbassBtn.x = 610;
		woodbassBtn.y = 1765;
		stage.addChild(woodbassBtn);
		woodbassBtn.addEventListener('mousedown', startDrag);

		bassBtn = new createjs.Bitmap(manifest[4].src);
		bassBtn.x = 900;
		bassBtn.y = 1765;
		stage.addChild(bassBtn);
		bassBtn.addEventListener('mousedown', startDrag);

		var guitarBtn = new createjs.Bitmap(manifest[5].src);
		guitarBtn.x = 1190;
		guitarBtn.y = 1765;
		stage.addChild(guitarBtn);


		stage.update();
	}

	// クリックした時
	function startDrag(evt) {
		var instance = evt.target;
		instance.addEventListener('pressmove', drag);
		instance.offset = {x:instance.x - evt.stageX, y:instance.y - evt.stageY};
		stage.update();
	}

	// ドラッグしてる時
	function drag(evt) {
		var instance = evt.target;
		var offset = instance.offset;
		instance.x = evt.stageX + offset.x;
		instance.y = evt.stageY + offset.y;
		instance.addEventListener('pressup', playAnime);
		stage.update();
	}

	// ドロップした時
	function playAnime(evt) {
		// バイオリン演奏
		var point01 = violinBtn.localToLocal(0, 0, target01);
		var isHit01 = target01.hitTest(point01.x, point01.y);

		// コンガ演奏
		var point02 = congaBtn.localToLocal(0, 0, target02);
		var isHit02 = target02.hitTest(point02.x, point02.y);

		// ウッドベース演奏
		var point03 = woodbassBtn.localToLocal(0, 0, target03);
		var isHit03 = target03.hitTest(point03.x, point03.y);

		var point04 = bassBtn.localToLocal(0, 0, target04);
		var isHit04 = target04.hitTest(point04.x, point04.y);


		// バイオリンアニメーション
		if(isHit01 == true) {
			console.log('入ったよ');
			violinBtn.alpha = 0;

			var violin = {
				images:['img/violinSP.png'],
				frames:{width:450, height:650},
				animations:{
					play:[0,29]
				}
			}

			var violinSP = new createjs.SpriteSheet(violin);

			var animation = new createjs.Sprite(violinSP, 'play');
			stage.addChild(animation);
			animation.x = 350;
			animation.y = 500;
			animation.gotoAndPlay('play');

			violinBtn.x = 30;
			violinBtn.y = 1765;
			violinBtn.alpha =1;
		} else {
			violinBtn.x = 30;
			violinBtn.y = 1765;
		}


		// コンガアニメーション
		if(isHit02 == true) {
			violinBtn.alpha = 0;

			var conga = {
				images:['img/congaSP.png'],
				frames:{width:450, height:650},
				animations:{
					play:[0,14]
				}
			}

			var congaSP = new createjs.SpriteSheet(conga);

			var animation = new createjs.Sprite(congaSP, 'play');
			stage.addChild(animation);
			animation.x = 730;
			animation.y = 500;
			animation.gotoAndPlay('play');

			congaBtn.x = 320;
			congaBtn.y = 1765;
			congaBtn.alpha = 1;
			violinBtn.alpha = 1;
		} else {
			congaBtn.x = 320;
			congaBtn.y = 1765;
		}


		// ウッドベースアニメーション
		if(isHit03 == true) {
			console.log('入ったよ');
			woodbassBtn.alpha = 0;

			var woodbass = {
				images:['img/woodbassSP.png'],
				frames:{width:450, height:800},
				animations:{
					play:[0,29]
				}
			}

			var woodbassSP = new createjs.SpriteSheet(woodbass);

			var animation = new createjs.Sprite(woodbassSP, 'play');
			stage.addChild(animation);
			animation.x = 100;
			animation.y = 600;
			animation.gotoAndPlay('play');

			woodbassBtn.x = 610;
			woodbassBtn.y = 1765;
			woodbassBtn.alpha = 1;
			violinBtn.alpha = 1;
			congaBtn.alpha = 1;
		} else {
			woodbassBtn.x = 610;
			woodbassBtn.y = 1765;
		}


		// ベースアニメーション
		if(isHit04 == true) {
			console.log('入ったよ');
			bassBtn.alpha = 0;

			var bass = {
				images:['img/bassSP.png'],
				frames:{width:450, height:650},
				animations:{
					play:[0,15]
				}
			}

			var bassSP = new createjs.SpriteSheet(bass);

			var animation = new createjs.Sprite(bassSP, 'play');
			stage.addChild(animation);
			animation.x = 1000;
			animation.y = 700;
			animation.gotoAndPlay('play');

			bassBtn.x = 900;
			bassBtn.y = 1765;
			bassBtn.alpha = 1;
			violinBtn.alpha = 1;
			congaBtn.alpha = 1;
			woodbassBtn.alpha = 1;
		} else {
			bassBtn.x = 900;
			bassBtn.y = 1765;
		}

		stage.update();
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
