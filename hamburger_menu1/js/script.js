// 即時関数
(function() {
	console.log('関数の即実行！');

	'use strict';

	var show = document.getElementById('show');
	var main = document.getElementById('main');

	show.addEventListener('click', function() {
		console.log('クリック！');

		// // クラス名にmenu_openが付いていたら
		// if (main.className === 'menu_open') {
		// 	// クラス名を空にする
		// 	main.className = ''
		// } else {
		// 	// クラス名にmenu_openをつけてあげる
		// 	main.className = 'menu_open';
		// }

		/* ---------------
		条件演算子の書き方
		-----------------*/
		// main.className は main.className === 'menu-open' が真だったら空文字、そうではなかったら 'menu-open' にしなさい
		main.className = main.className === 'menu_open' ? '' : 'menu_open';
	})

})();
