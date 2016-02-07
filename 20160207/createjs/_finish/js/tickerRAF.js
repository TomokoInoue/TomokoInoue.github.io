$(function(){

	// stage
	var stage = new createjs.Stage("canvasEl");
	var stageWidth = $("#canvasEl").width();
	var stageHeight = $("#canvasEl").height();

	// 星の配置
	var shape = new createjs.Shape();
	shape.graphics.beginFill("cyan");
	shape.graphics.drawPolyStar(0, 0, 40, 5, 0.6, -90);
	shape.x = stageWidth/2;
	shape.y = stageHeight/2;
	stage.addChild(shape);

	// アニメーション
	var fps = 30;
	createjs.Ticker.timingMode = createjs.Ticker.RAF;
	createjs.Ticker.on("tick",rotate,shape);

	function rotate(evt){
		this.rotation += 5*evt.delta*fps/1000;
		stage.update();
	}
});
