(function() {
	'use strict';

	// 変数 -------------------------------------------------------------------
	// (26番)li要素を保存するための空の配列
	var todos = [];
	// (1番)
	var todoForm = document.getElementById('todo_form');
	var todoList = document.getElementById('todo_list');
	var todoInput = document.querySelector('#todo_form input'); // cssのセレクターに書くような形で書く



	// (2番)要素が追加された時の処理 ---------------------------------------------
	var addItem = function(event){
		// (7番)画面遷移するのをキャンセル
		event.preventDefault();
		// (8番)inputの値がなければ、この関数は終了する
		if(!todoInput.value){
			return;
		}

		// (27番)配列に値を追加する
		todos.push({text: todoInput.value, done: false}); // text = inputに入力されたテキストの値 / done = チェックボックスにチェックさせたか(初期値はfalse)

		// (28番)保存した値をHTMLに書き出す関数の呼び出し
		render();

		// (6番)inputの値を空にする
		todoInput.value = '';
	};



	// (29番)配列のデータを元にHTML上に表示する ------------------------------------
	var render = function(){
		// (33番)ul要素の中身を空にする
		todoList.innerHTML = '';

		// (30番)1つ1つの配列データを表示させる(for文でも可能) --- var checkBox〜〜からtodoList.appendChild(listItem);までをforEach関数に入れる
		todos.forEach(function(todo){
			// (9番)チェックボックスの生成 ----------------------------------------
			var checkBox = document.createElement('input');
			// (10番)input要素のtypeを指定
			checkBox.type = 'checkbox'; // <input type="checkbox">
			// (32番)27番のプロパティdoneと紐付ける
			checkBox.checked = todo.done;
			// (38番)チェックボックスがデータに反映される時
			checkBox.addEventListener('change', function(event){
				// (39番)チェックボックスの値が変更された値を代入
				todo.done = event.target.checked;
			});

			// (11番)span要素を生成
			var span = document.createElement('span');
			// (12番)生成されたspan要素に値をコンテンツとして表示
			// span.textContent = todoInput.value;

			// (31番)12番を修正、27番のプロパティtextと紐付ける
			span.textContent = todo.text;

			// (15番)ラベル要素を生成
			var label = document.createElement('label');
			label.appendChild(checkBox);
			label.appendChild(span);
			// (16番)label要素にチェックボックス要素を追加する (HTML上、label要素でチェックボックスとspan要素をくくると、span要素を押してもチェックボックスにチェックが入る)
			label.appendChild(checkBox);
			// (17番)label要素にspan要素を追加する
			label.appendChild(span);


			// (19番)削除ボタンの生成 --------------------------------------------
			var deleteBtn = document.createElement('button');
			// (20番)削除ボタンのテキストを代入
			deleteBtn.textContent = '削除';
			// (22番)削除ボタンがクリックされた時、deleteItem関数を呼び出す // (34番)データとを紐付けるために、直接関数を定義
			deleteBtn.addEventListener('click', function(){
				// (35番)配列の何番目かを代入
				var index = todos.indexOf(todo);
				// (36番)indexから1個分の要素を削除する
				todos.splice(index, 1);
				// (37番)render関数の呼び出し
				render();
			});

			// (3番)li要素の生成
			var listItem = document.createElement('li');
			// // (4番)inputで入力された値をコンテンツとして表示
			// listItem.textContent = todoInput.value;

			// // (13番)li要素にチェックボックス要素を追加する ---> label要素に移動させる(16番へ)
			// listItem.appendChild(checkBox);
			// // (14番)li要素にspan要素を追加する ------------> label要素に移動させる(17番へ)
			// listItem.appendChild(span);

			//(18番)li要素にlabelを追加する
			listItem.appendChild(label);
			// (21番)li要素に削除ボタンを追加する
			listItem.appendChild(deleteBtn);

			// (5番)ul要素にli要素を追加する
			todoList.appendChild(listItem);
		});

	};

	// (23番)削除ボタンがクリックされた時の関数 --------------------------------------
	var deleteItem = function(event){
		// (24番)クリックされた削除ボタンの親要素(li要素)を代入
		var listItem = event.target.parentElement;
		// (25番)ul要素からli要素を削除する
		todoList.removeChild(listItem);
	};

	// submitボタンと紐付ける
	todoForm.addEventListener('submit', addItem);

}());
