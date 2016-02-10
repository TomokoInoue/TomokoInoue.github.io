window.addEventListener('load', init);

var stage;

function init() {
	// ステージの作成
	stage = new createjs.Stage('canvasEl');

	var circle = new createjs.Shape();
	circle.graphics.beginFill('DeepSkyBlue').drawCircle(100, 100, 50);
	stage.addChild(circle);

	var target = new createjs.Shape();
	target.graphics.beginFill('green').drawCircle(300, 100, 70);
	stage.addChild(target);

	circle.addEventListener('pressmove', function(evt) {
	this.x = evt.stageX;
	this.y = evt.stageY;

	stage.update();
	});



	stage.update();
}
