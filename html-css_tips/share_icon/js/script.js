// 即時関数：宣言した変数などの有効範囲（スコープ）を関数内に制限する
// → 直接変数を書いてしまった場合、他のファイルでも変数が参照されてしまうのを防ぐ
    (function() {

        $(function() {

            // Facebookシェアボタン
            $('.js-fb').on('click', function(evt){
                // バブリングを制御する
                evt.preventDefault();

                // ポップアップを表示する処理へ引数を渡す
                popupSns(this.href, 700, 450, 'fbwindow');
            });


            // ツイートボタンクリック
            $('.js-tw').on('click', function(evt){
                // バブリングを制御する
                evt.preventDefault();

                // ポップアップを表示する処理へ引数を渡す
                popupSns(this.href, 550, 420, 'tweetwindow');
            });


            // SNSのポップアップを表示するための処理
            function popupSns(href, w, h, winName, aIndex){
                var x = (screen.width - w) / 2;
                var y = (screen.height - h) / 2;
                var url = encodeURI(decodeURI(href));

                // window.openメソッドで小窓のウィンドウを生成する
                window.open(url, winName, 'left=' + x +', top=' + y + ', width=' + w + ', height=' + h + ', personalbar=0, toolbar=0, scrollbars=1, sizable=1');
            }
        });

})();
