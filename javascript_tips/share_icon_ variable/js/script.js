// 即時関数：宣言した変数などの有効範囲（スコープ）を関数内に制限する
// → 直接変数を書いてしまった場合、他のファイルでも変数が参照されてしまうのを防ぐ
(function() {

    $(function() {

        // ソーシャルボタンの設定値
        var SITE_URL = $('meta[property="og:url"]').attr('content') || '';
        var SHARE_MSG = document.title;
        var encodeMsg = encodeURIComponent(SHARE_MSG);

        // DOM
        var $btnArea = $('#sns_btns');
        var $fbBtn = $btnArea.find('.js-fb');
        var $twBtn = $btnArea.find('.js-tw');

        // Facebookボタン
        $fbBtn.attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + SITE_URL).on('click', function(evt) {
            // バブリングを制御する
            evt.preventDefault();
            // ポップアップを表示する処理へ引数を渡す
            popupSns($(this).attr('href'), 550, 420, 'fbwindow');
        });

        // Twitterボタン
        $twBtn.attr('href', 'https://twitter.com/share?url=' + SITE_URL + '&text=' + encodeMsg).on('click', function(evt) {
            // バブリングを制御する
            evt.preventDefault();
            // ポップアップを表示する処理へ引数を渡す
            popupSns($(this).attr('href'), 700, 450, 'twwindow');
        });

    });

    // SNSのポップアップを表示する
    function popupSns(href, w, h, winName){
        var x = (screen.width - w) / 2;
        var y = (screen.height - h) / 2;
        // window.openメソッドで小窓のウィンドウを生成する
        window.open(href, winName, 'left=' + x +', top=' + y + ', width=' + w + ', height=' + h + ', personalbar=0, toolbar=0, scrollbars=1, sizable=1');
    }

})();
