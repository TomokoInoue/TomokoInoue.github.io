$(function(){

  var color;
  var shape;

  // 開始座標　経過座標
  var startX, startY;

  var stage = new createjs.Stage("canvasEl");

  //画面サイズにcanvasサイズを合わせる
  stage.canvas.width = window.innerWidth;
  stage.canvas.height = window.innerHeight;

  // touchに対応
  createjs.Touch.enable(stage);

  var isDrawing = false;

  // イベント
  stage.addEventListener("stagemousedown", mouseDown);
  stage.addEventListener("stagemouseup",mouseUp);

  function mouseDown(evt) {
    console.log('stagemousedown');
    shape = new createjs.Shape();
    color = createjs.Graphics.getHSL(Math.random()*360, 100, 50);
    shape.graphics.beginFill(color);
    shape.graphics.drawCircle(0,0,150);

    stage.addChild(shape);

    isDrawing = true;

    startX = evt.stageX;
    startY = evt.stageY;
    shape.x = startX;
    shape.y = startY;
    shape.alpha = 0;

    createjs.Tween.get(shape).to({alpha: 1}, 500, createjs.Ease.getPowInOut(2));

    stage.addEventListener("stagemousemove",mouseMove);

  };


  function mouseMove(evt){
    if(isDrawing == true){
      startX = evt.stageX;
      startY = evt.stageY;
      shape.x = startX;
      shape.y = startY;
    }
    console.log("stagemousemove");
  }

  function mouseUp(){
    isDrawing = false;

    createjs.Tween.get(shape).to({ alpha:0 }, 500).to({alpha: 0}, 1000, createjs.Ease.getPowInOut(2),function(){
      stage.removeChild(shape);
    });

    console.log("stagemouseup");
  }

  createjs.Ticker.setFPS(24);
  createjs.Ticker.on("tick", updateStage);

  function updateStage(){
    stage.update();
  }
});
