// 即時関数
(function() {
	console.log('はじまるよ');

	// DOMの読み込み
	$(function() {

		// #back_to_topを消す
		$('#back_to_top').hide();

		// 一定の位置までスクロールされた時にボタンを表示、非表示
		$(window).scroll(function() {

			// 左下に取得したスクロールの垂直位置の数字をテキストで表示
			$('#pos').text($(this).scrollTop());

			// 取得したスクロールの垂直位置が60より大きかった場合
			if ($(this).scrollTop() > 60) {
				$('#back_to_top').fadeIn(); // フェードして表示
			} else {
				$('#back_to_top').fadeOut(); // フェードして非表示
			}
		});


		// ページトップボタンがクリックされたら上に戻る処理
		$('#back_to_top a').click(function() {
			// スクロールの垂直位置が0にくるようアニメーション
			$('body').animate({
				scrollTop:0
			}, 500);
			return false;
		})
	});
});
