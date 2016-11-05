$(function(){

	// stage
	var stage = new createjs.Stage("canvasEl");

	var circle = new createjs.Shape();
	circle.graphics.beginFill("red").drawCircle(0, 0, 40);
	circle.y = 50;
	stage.addChild(circle);

	createjs.Ticker.on("tick",tick);
	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
	createjs.Ticker.setFPS(30);

	function tick(ev){
		// console.log(ev);

		circle.x = circle.x + 5;

		if (circle.x > stage.canvas.width){
			circle.x = 0;
		};

		stage.update();
	}
});
