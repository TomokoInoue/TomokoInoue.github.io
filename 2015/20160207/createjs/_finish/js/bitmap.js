$(function(){

	// stage
	var stage = new createjs.Stage("canvasEl");

  // 画像を保存する配列
  var manifest = [
    {src:'img/tomato.png'}
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
    addStage();
  });

  function addStage(data){
    var tomato = new createjs.Bitmap(manifest[0].src);
    tomato.x = 100;
    tomato.y = 100;
    stage.addChild(tomato);
  }

	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
	createjs.Ticker.setFPS(30);

  createjs.Ticker.addEventListener('tick',function(){
    stage.update();
  })

});
