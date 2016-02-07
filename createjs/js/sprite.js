// 先読みするリスト
var manifest = [
  {src:'img/calcium.png'},
  {src:'img/iron.png'},
  {src:'img/vitaminC.png'},
  {src:'img/header.png'},
  {src:'img/ground.png'},
  {src:'img/logo.png'},
];

// DOMを読み込んだら
$(function(){
  // ステージ（canvas）の設定
  var stage = new createjs.Stage('canvasEl');
  // loadQueue　ローディング
  var loadQueue = new createjs.LoadQueue();
  loadQueue.loadManifest(manifest); // 読み込み開始

  loadQueue.addEventListener('complete',function(){
    console.log('読み込み完了！！！！');
    showVege();
  });


  function showVege(){

    var ground = new createjs.Bitmap(manifest[4].src);
    stage.addChild(ground);
    ground.scaleX = 0.5;
    ground.scaleY = 0.5;
    ground.y = 700;

    var header = new createjs.Bitmap(manifest[3].src);
    stage.addChild(header);
    header.scaleX = 0.5;
    header.scaleY = 0.5;
    header.y = 0;



    // スプライトシートの設定
    var vcSprite = new createjs.SpriteSheet(vitaminCSprite);
    // スプライトの設定
    var vitaminC = new createjs.Sprite(vcSprite,'stand');
    stage.addChild(vitaminC);
    vitaminC.x = 150;
    vitaminC.y = 480;
    vitaminC.alpha = 0;
    // アニメーション
    createjs.Tween.get(vitaminC).to({alpha:1},500).wait(1000).call(vitaminCWalk).to({x:400},4000).call(vitaminCStand);
    // ビタミンCが歩く
    function vitaminCWalk(){
      vitaminC.gotoAndPlay('walk');
    }
    // ビタミンCが止まる
    function vitaminCStand(){
      vitaminC.gotoAndPlay('stand');
    }

    // スプライトシートの設定
    var irSprite = new createjs.SpriteSheet(ironSprite);
    // スプライトの設定
    var iron = new createjs.Sprite(irSprite,'stand');
    stage.addChild(iron);
    iron.x = 30;
    iron.y = 480;
    iron.alpha = 0;
    // アニメーション
    createjs.Tween.get(iron).wait(500).to({alpha:1},500).wait(1000).call(ironWalk).to({x:600},4000).call(ironStand);
    // ビタミンCが歩く
    function ironWalk(){
      iron.gotoAndPlay('walk');
    }
    // ビタミンCが止まる
    function ironStand(){
      iron.gotoAndPlay('stand');
    }






    stage.update();
  };


  // フレームレート
  createjs.Ticker.setFPS(30);
  createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;

  // アニメーションの設定
  createjs.Ticker.addEventListener('tick',function(){
    // ステージの更新
    stage.update();
  });

});
