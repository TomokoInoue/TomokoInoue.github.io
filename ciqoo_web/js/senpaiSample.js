<canvas id="demoCanvas" width="600" height="400"></canvas>
  <script src="https://code.createjs.com/createjs-2015.11.26.min.js"></script>
  <script>

  window.onload=function(){
    init();
  };
  function init() {
    // code here.
    var stage = new createjs.Stage("demoCanvas");

    var circle = new createjs.Shape();
    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);


    circle.addEventListener("pressmove", function(evt) {
      evt.currentTarget.x = evt.stageX;
      evt.currentTarget.y = evt.stageY;

      console.log(evt);
      stage.update();
    });

    // circle.on("pressup", function(evt) { console.log("up"); })

    stage.update();
  }
  </script>





  target.addEventListener('pressmove',function(e){

    e.currentTarget.x = e.stageX;
    e.currentTarget.y = e.stageY;

    e.currentTarget.regX = imgWidth/2;
    e.currentTarget.regY = imgHeight/2;

    stage.update();
  });




  // ドラッグを離した時
  target.addEventListener('pressup',function(e){

    if(e.currentTarget.x > targetX-30 && e.currentTarget.x < targetX+30){
      if(e.currentTarget.y > targetY-30 && e.currentTarget.y < targetY+30){

        console.log("あたりにはいったよ");
        e.currentTarget.x = targetX;
        e.currentTarget.y = targetY;

        endAnimation(); //アニメーション

      }
    }
    stage.update();
  });
  }
