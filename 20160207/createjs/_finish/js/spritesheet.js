
// スプライトシート用のオブジェクト
var calciumSprite = {
	images: ["img/calcium.png"],
	frames:{width:160,height:160},
	animations:{
		stand:34,
		walk:[0,33],
		stop:34
	}
}


$(function(){

	// stage
	var stage = new createjs.Stage("canvasEl");

  // 画像を保存する配列
  var manifest = [
    {src:'img/calcium.png'}
  ];

  // loadQueueクラス
  var loadQueue = new createjs.LoadQueue();

  // 同時に何ファイル読み込むか
  // loadQueue.setMaxConnections(6);

  // 読み込み開始
  loadQueue.loadManifest(manifest);

  // 読み込み状況
  loadQueue.addEventListener('progress',function(evt){
    console.log(evt.progress);
  });

  // ひとつ読み込み終わったら
  loadQueue.addEventListener("fileload", function(evt){
    console.log(evt.result);
  });

  // 全部読み込み終わったら
  loadQueue.addEventListener("complete", function(evt){
    console.log('読み込み完了');
    addSprite();
  });


	// スプライトシート
  function addSprite(){

		// カルシウム
    var casprite = new createjs.SpriteSheet(calciumSprite);
    var calcium = new createjs.Sprite(casprite,'stand');
    stage.addChild(calcium);

    createjs.Tween.get(calcium).wait(2000).call(calciumWalk).to({x: 500}, 4000).call(calciumStop);

    function calciumWalk(){
      calcium.gotoAndPlay('walk');
    }

    function calciumStop(){
      calcium.gotoAndPlay('stop');
    }
    stage.update();
  }


	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
	createjs.Ticker.setFPS(30);

  createjs.Ticker.addEventListener('tick',function(){
    stage.update();
  });

});
