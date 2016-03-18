//  -------------------------- < アジアステージの時 > ----------------------------
// アジアステージ変数 ------------------------------------------------------------
var tsuzumiInstance;
var tekishiInstance;
var nikoInstance;
var kotoInstance;
var rhythmInstance = null;


// アジアステージへ ---------------------------------------------------------------
function playAsia() {
	// 二度クリックできないようにする
	bitmapArr[8].removeAllEventListeners('click'); // アメリカの雲のクリックイベントを削除
	bitmapArr[9].removeAllEventListeners('click'); // アジアの雲のクリックイベントを削除
	bitmapArr[10].removeAllEventListeners('click'); // ヨーロッパの雲のクリックイベントを削除
	console.log('アジアだよ');

	stage.addChild(asiaContainer);
	asiaContainer.alpha = 0;
	createjs.Tween.get(titleContainer).wait(500).to({y:0,alpha:0},1000);
	createjs.Tween.get(asiaContainer).wait(500).to({alpha:1},1000);
	// console.log(asiaContainer);
	asiaSound();
}



// サウンド再生 -----------------------------------------------------------------
function asiaSound() {
	createjs.Sound.registerSound(manifest[37].src, 'rhythm');
	createjs.Sound.registerSound(manifest[48].src, 'tsuzumi');
	createjs.Sound.registerSound(manifest[51].src, 'tekishi');
	createjs.Sound.registerSound(manifest[54].src, 'niko');
	createjs.Sound.registerSound(manifest[57].src, 'koto');

	// ビート音
	rhythmInstance = createjs.Sound.play('rhythm', {loop:-1});
	rhythmInstance.volume = 0;
	createjs.Tween.get(rhythmInstance).wait(2000).to({volume:0.5},1000);
	// 鼓音
	tsuzumiInstance = createjs.Sound.play('tsuzumi', {loop:-1});
	tsuzumiInstance.volume = 0;
	// 笛子音
	tekishiInstance = createjs.Sound.play('tekishi', {loop:-1});
	tekishiInstance.volume = 0;
	// キーボード音
	nikoInstance = createjs.Sound.play('niko', {loop:-1});
	nikoInstance.volume = 0;
	// ギター音
	kotoInstance = createjs.Sound.play('koto', {loop:-1});
	kotoInstance.volume = 0;

	startAsia();
	console.log(startAsia);
}



function startAsia() {
	bitmapArr[46].addEventListener('mousedown', asiaStartDrag); // 鼓アイコン
	bitmapArr[49].addEventListener('mousedown', asiaStartDrag); // 笛子アイコン
	bitmapArr[52].addEventListener('mousedown', asiaStartDrag); // 二胡アイコン
	bitmapArr[55].addEventListener('mousedown', asiaStartDrag); // 琴アイコン
}



// アニメーションの開始
// ドラッグする時 ---------------------------------------------------------------
function asiaStartDrag(evt) {
	var instance = evt.target;
	instance.offset = {x:instance.x - evt.stageX, y:instance.y - evt.stageY};
	instance.addEventListener('pressmove', asiaDrag);
}

// ドラッグしてる時 ------------------------------------------------------------
function asiaDrag(evt) {
	console.log('dragしてるよ');
	var instance = evt.target;
	var offset = instance.offset;
	instance.x = evt.stageX + offset.x;
	instance.y = evt.stageY + offset.y;
	instance.addEventListener('pressup', asiaDrop);

	// 配置スペースポジションの点滅
	for(var cnt=0; cnt<asiaObj.length; cnt++){
		asiaObj[cnt].isHit = spaceArr[cnt].hitTest(evt.target.localToLocal(0, 0, spaceArr[cnt]).x, evt.target.localToLocal(0, 0, spaceArr[cnt]).y);

		if(asiaObj[0].isHit === true) {
			bitmapArr[39].alpha = 1;
		} else {
			bitmapArr[39].alpha = 0;
			// bitmapArr[i].x = manifest[i].x;
			// bitmapArr[i].y = manifest[i].y;
		}

		if(asiaObj[1].isHit === true) {
			bitmapArr[41].alpha = 1;
		} else {
			bitmapArr[41].alpha = 0;
		}

		if(asiaObj[2].isHit === true) {
			bitmapArr[43].alpha = 1;
		} else {
			bitmapArr[43].alpha = 0;
		}

		if(asiaObj[3].isHit === true) {
			bitmapArr[45].alpha = 1;
		} else {
			bitmapArr[45].alpha = 0;
		}
	}
}

// ドロップした時 ---------------------------------------------------------------
function asiaDrop(evt) {
	console.log('ドロップしてるよ' + evt.target);

	for(var cnt=0; cnt<asiaObj.length; cnt++){
		if(asiaObj[cnt].isHit === true) {
			console.log(asiaObj);
			saveArr = asiaObj[cnt].current;
			asiaObj[cnt].current = evt.target;

			if(saveArr == "") {
				return;
			}
			console.log('saveArr: ' +saveArr);

			if(saveArr.name === 'tsuzumi') {
				bitmapArr[46].x = manifest[46].x;
				bitmapArr[46].y = manifest[46].y;
			} else if(saveArr.name === 'tekishi') {
				bitmapArr[49].x = manifest[49].x;
				bitmapArr[49].y = manifest[49].y;
			} else if(saveArr.name === 'niko') {
				bitmapArr[52].x = manifest[52].x;
				bitmapArr[52].y = manifest[52].y;
			} else if(saveArr.name === 'koto') {
				bitmapArr[55].x = manifest[55].x;
				bitmapArr[55].y = manifest[55].y;
			}
		}
	}
}
// 	var saveArr = '';
//
// 	for(var cnt=0; cnt<spaceObj.length; cnt++){
// 		spaceObj[cnt].isHit = spaceArr[cnt].hitTest(evt.target.localToLocal(0, 0, spaceArr[cnt]).x, evt.target.localToLocal(0, 0, spaceArr[cnt]).y);
//
// 		if(spaceObj[cnt].isHit === true){
// 			saveArr = spaceObj[cnt].current;
// 			spaceObj[cnt].current = evt.target;
//
// 			// スプライトの描画位置
// 			// 鼓スプライト
// 			if(evt.target.name == 'tsuzumi') {
// 				bitmapArr[47].alpha = 1;
// 				bitmapArr[47].x = spaceObj[cnt].posX;
// 				bitmapArr[47].y = spaceObj[cnt].posY;
// 				evt.target.alpha = 0;
// 				createjs.Tween.get(tsuzumiInstance).wait(0).to({volume:1},1000);
// 			// 笛子スプライト
// 		} else if(evt.target.name == 'tekishi') {
// 				bitmapArr[50].alpha = 1;
// 				bitmapArr[50].x = spaceObj[cnt].posX;
// 				bitmapArr[50].y = spaceObj[cnt].posY;
// 				evt.target.alpha = 0;
// 				createjs.Tween.get(tekishiInstance).wait(0).to({volume:1},1000);
// 			// 二胡スプライト
// 		} else if(evt.target.name == 'niko') {
// 				bitmapArr[53].alpha = 1;
// 				bitmapArr[53].x = spaceObj[cnt].posX;
// 				bitmapArr[53].y = spaceObj[cnt].posY;
// 				evt.target.alpha = 0;
// 				createjs.Tween.get(nikoInstance).wait(0).to({volume:1},1000);
// 			// 琴スプライト
// 			} else {
// 				bitmapArr[56].alpha = 1;
// 				bitmapArr[56].x = spaceObj[cnt].posX;
// 				bitmapArr[56].y = spaceObj[cnt].posY;
// 				evt.target.alpha = 0;
// 				createjs.Tween.get(kotoInstance).wait(0).to({volume:1},1000);
// 			}
//
// 			if(saveArr == "") {
// 				return;
// 			}
//
// 			// アイコンの戻る描画位置
// 			if(saveArr.name === 'tsuzumi') {
// 				bitmapArr[46].x = manifest[46].x;
// 				bitmapArr[46].y = manifest[46].y;
// 			} else if(saveArr.name === 'tekishi') {
// 				bitmapArr[49].x = manifest[49].x;
// 				bitmapArr[49].y = manifest[49].y;
// 			} else if(saveArr.name === 'niko') {
// 				bitmapArr[52].x = manifest[52].x;
// 				bitmapArr[52].y = manifest[52].y;
// 			} else if(saveArr.name === 'koto'){
// 				bitmapArr[55].x = manifest[55].x;
// 				bitmapArr[55].y = manifest[55].y;
// 			}
// 		}
// 	}
//
//
// }


//  -------------------------- < メニュー画面に戻る > -----------------------------
function backAsia(){
	console.log('メニューに戻るよ');
	// 音声の徐々に停止(サウンドはremoveChildでは消せないので、stopで消す)
	createjs.Tween.get(rhythmInstance).to({volume:0},1000);
	createjs.Tween.get(tsuzumiInstance).to({volume:0},1000);
	createjs.Tween.get(tekishiInstance).to({volume:0},1000);
	createjs.Tween.get(nikoInstance).to({volume:0},1000);
	createjs.Tween.get(kotoInstance).to({volume:0},1000)
			.call(function(){
				rhythmInstance.stop();
				tsuzumiInstance.stop();
				tekishiInstance.stop();
				nikoInstance.stop();
				kotoInstance.stop();
			});

	titleContainer.alpha = 1;
	createjs.Tween.get(titleContainer).wait(500).to({alpha:1, y:0},1000);
	createjs.Tween.get(asiaContainer).wait(500).to({alpha:0},1000).call(function(){
		// スプライトを消す
		bitmapArr[47].alpha = 0;
		bitmapArr[50].alpha = 0;
		bitmapArr[53].alpha = 0;
		bitmapArr[56].alpha = 0;

		function asiaSetApp(instance, nX, nY) {
			instance.x += nX;
			instance.y += nY;
		}

		// 鼓アイコンの描画位置を再設定 ------------------------------------------
		bitmapArr[46].alpha = 1;
		bitmapArr[46].x = manifest[46].x;
		bitmapArr[46].y = manifest[46].y;
		// bitmapの基準点を中央にするため、canvasの中心を設定
		asiaSetApp(bitmapArr[46], canvasEl.width / 2, canvasEl.height / 2);
		// それぞれのbitmapをcanvasの真ん中から描画する
		// それぞれのbitmapの幅と高さを1/2に設定し、基準点を真ん中に設定する
		var setImg = bitmapArr[46].image;
		bitmapArr[46].regX = setImg.width / 2;
		bitmapArr[46].regY = setImg.height / 2;



		// 笛子アイコンの描画位置を再設定 ------------------------------------------
		bitmapArr[49].alpha = 1;
		bitmapArr[49].x = manifest[49].x;
		bitmapArr[49].y = manifest[49].y;
		// bitmapの基準点を中央にするため、canvasの中心を設定
		asiaSetApp(bitmapArr[49], canvasEl.width / 2, canvasEl.height / 2);
		// それぞれのbitmapをcanvasの真ん中から描画する
		// それぞれのbitmapの幅と高さを1/2に設定し、基準点を真ん中に設定する
		var setImg = bitmapArr[49].image;
		bitmapArr[49].regX = setImg.width / 2;
		bitmapArr[49].regY = setImg.height / 2;



		// 二胡アイコンの描画位置を再設定 ------------------------------------------
		bitmapArr[52].alpha = 1;
		bitmapArr[52].x = manifest[52].x;
		bitmapArr[52].y = manifest[52].y;
		// bitmapの基準点を中央にするため、canvasの中心を設定
		asiaSetApp(bitmapArr[52], canvasEl.width / 2, canvasEl.height / 2);
		// それぞれのbitmapの幅と高さを1/2に設定し、基準点を真ん中に設定する
		var setImg = bitmapArr[52].image;
		bitmapArr[52].regX = setImg.width / 2;
		bitmapArr[52].regY = setImg.height / 2;



		// 琴アイコンの描画位置を再設定 ------------------------------------------
		bitmapArr[55].alpha = 1;
		bitmapArr[55].x = manifest[55].x;
		bitmapArr[55].y = manifest[55].y;
		// bitmapの基準点を中央にするため、canvasの中心を設定
		asiaSetApp(bitmapArr[55], canvasEl.width / 2, canvasEl.height / 2);
		// それぞれのbitmapをcanvasの真ん中から描画する
		// それぞれのbitmapの幅と高さを1/2に設定し、基準点を真ん中に設定する
		var setImg = bitmapArr[55].image;
		bitmapArr[55].regX = setImg.width / 2;
		bitmapArr[55].regY = setImg.height / 2;


		// ステージのリムーブチャイルド ---------------------------------------------
		// アジアステージ
		stage.removeChild(asiaContainer);

	});

	// アメリカステージへ
	bitmapArr[8].addEventListener('click', playAmerica);
	// アジア
	bitmapArr[9].addEventListener('click', playAsia);
	// ヨーロッパ
	bitmapArr[10].addEventListener('click', playEurope);

}
