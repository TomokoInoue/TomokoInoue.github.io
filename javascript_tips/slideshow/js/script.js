(function () {
    // DOMの読み込み
    $(function () {
        /* =================================
         スライドショーの表示 やり方その①
         ================================ */
        var $slideshow = $('.js-slideshow');
        var $imgItems = $slideshow.find('li'); // find:すべての子要素を取得する
        var slideLen = $imgItems.length; // li要素の数
        var slideTimer;

        // スライドが切り替わる間隔
        var waitTime = 4000;
        // フェードアニメーションの時間
        var animTime = 1500;
        // 現在のスライド番号をリセット
        var currentNum = 0;


        // 最初の要素以外を非表示に
        $imgItems.not(':first-child').hide(); // not:指定した条件式に合致する要素を削除する

        // 「setTimerFunc」を「waitTime（4秒間隔で）」呼び出す
        setInterval(setTimerFunc, waitTime); // setInterval(関数名, 実行間隔):一定時間毎に特定の関数を繰り返す


        /*---------------------------
        setIntervalで処理を繰り返す
        ---------------------------*/
        function setTimerFunc(){
            $imgItems.stop(); // stop:windowの読み込みを停止する

            // 次のスライドを手前に置くために現在のスライドを奥に配置
            $imgItems.eq(currentNum).css('z-index', 0); // eq(i):指定したポジション(i)の要素だけを取得する

            // 次のスライド番号を格納
            currentNum = (currentNum + 1) % slideLen;

            // 指定のスライドをフェードイン
            $imgItems.eq(currentNum).css('z-index', 1).fadeIn(animTime, function(){ // fadeIn(スピード, 効果完了後の処理)
                // 指定のスライド以外を非表示に
                $imgItems.not(this).hide();
            });
        }


        /* =================================
         スライドショーの表示 やり方その②
         ================================ */
        // var $interval = 3000; // 切り替わりの間隔（ミリ秒）
        // var $fade_speed = 1000; // フェード処理の早さ（ミリ秒）
        // $(".slideshow ul li").css({"position":"relative","overflow":"hidden"});
        // $(".slideshow ul li").hide().css({"position":"absolute","top":0,"left":0});
        // $(".slideshow ul li:first").addClass("active").show();
        // setInterval(function(){
        // 	var $active = $(".slideshow ul li.active");
        // 	var $next = $active.next("li").length?$active.next("li"):$(".slideshow ul li:first");
        // 	$active.fadeOut($fade_speed).removeClass("active");
        // 	$next.fadeIn($fade_speed).addClass("active");
        // },$interval);
    });
})();
