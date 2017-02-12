// 即時関数：宣言した変数などの有効範囲（スコープ）を関数内に制限する
// → 直接変数を書いてしまった場合、他のファイルでも変数が参照されてしまうのを防ぐ
(function() {
	// ストリクトモードにし、犯しがちなミスをエラーにしたり、予約語の仕様を制限する（ファイルの冒頭か関数の冒頭で宣言することで有効になる）
	'use strict';

	/* --------
	  変数
	-------- */
	var passedTime = 0;
	var intervalId = null;
	var timer = document.getElementById('timer');


	/* ----------------------
	  ボタンを押した時の処理
	----------------------- */
	// スタートボタンを押した時
	function start() {
		if (intervalId !== null) {
			return;
		}
		intervalId = setInterval(function() {
			// 1増やす
			passedTime++;
			render();
			// 1減らす
			// passedTime--;
		}, 1000);

		// setTimeout = 一度だけでいい時に使用する
	}

	// ストップボタンを押した時
	function stop() {
		if (intervalId != null) {
			clearInterval(intervalId);
			intervalId = null;
		}
	}

	// リセットボタンを押した時
	function reset() {
		stop();
		passedTime = 0;
		render();
	}



	// 文字を表示させる処理
	function render() {
		// 分の計算(passedTime : 経過秒の値)
		var minutes = Math.floor(passedTime / 60);
		// 秒の計算(passedTime : 経過秒の値)
		var seconds = passedTime % 60;
		// ドキュメント（HTML文書）からidを取得し、変数にする
		timer.textContent = zeroFill(minutes) + ':' + zeroFill(seconds);
	}

	// 時間、分、秒1桁の数字に"0"をつける処理
	function zeroFill(num) {
		// slice(何番目) = 何番目からの文字列を取得する（マイナスの場合、後ろから数える）
		return ('0' + num).slice(-2);
	}

	// 文字を表示させる
	render();


	document.getElementById('start').addEventListener('click', start);
	document.getElementById('stop').addEventListener('click', stop);
	document.getElementById('reset').addEventListener('click', reset);

	// 現在時刻の表示
	// timer.textContent = new Date();
	// 2015年1月1日の時刻
	// timer.textContent = new Date('2015-01-01');


	// /* ---------------------
	//   1秒ごとにカウントする
	//  ----------------------*/
	// setInterval(function() {
	// 	// 現在時刻の取得
	// 	var date = new Date();
	// 	// 必要な時刻だけ取得
	// 	var hours = date.getHours();
	// 	var minutes = date.getMinutes();
	// 	var seconds = date.getSeconds();
	//
	// 	// 文字を表示する（1桁の場合、"0"をつけて表示）
	// 	timer.textContent = zeroFill(hours)
	// 	+ ':' + zeroFill(minutes)
	// 	+ ':' + zeroFill(seconds);
	// }, 1000); // ms ミリ秒
})();
