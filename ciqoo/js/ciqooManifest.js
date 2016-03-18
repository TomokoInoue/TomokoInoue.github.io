// 配置場所のオブジェクト -----------------------------------------------------
var americaObj = [
	// アメリカステージ
	{
		isHit:false,
		current:'',
		id:'1',
		x:160,
		y:1090,
		posX:400,
		posY:700
	},
	{
		isHit:false,
		current:'',
		id:'2',
		x:770,
		y:1090,
		posX:900,
		posY:700
	},
	{
		isHit:false,
		current:'',
		id:'3',
		x:160,
		y:1400,
		posX:100,
		posY:1100
	},
	{
		isHit:false,
		current:'',
		id:'4',
		x:770,
		y:1400,
		posX:1000,
		posY:1100
	},
];

var asiaObj = [
	// アジアステージ
	{
		isHit:false,
		current:'',
		id:'1',
		x:160,
		y:1090,
		posX:400,
		posY:750
	},
	{
		isHit:false,
		current:'',
		id:'2',
		x:770,
		y:1090,
		posX:800,
		posY:800
	},
	{
		isHit:false,
		current:'',
		id:'3',
		x:160,
		y:1400,
		posX:100,
		posY:1100
	},
	{
		isHit:false,
		current:'',
		id:'4',
		x:770,
		y:1400,
		posX:1000,
		posY:1100
	}
];


//  ------------------------ << マニフェスト >> ----------------------------
var manifest = [
//  ------------------------ < タイトル画面 > ---------------------------
	{ // 背景 #0
		src:'img/title/titleBackground.png',
		x:768,
		y:1530,
		alpha:1,
		id:'titleBackground',
		group:'title'
	},
	{ // タイトル #1
		src:'img/title/title.png',
		x:768,
		y:500,
		alpha:1,
		id:'title',
		group:'title'
	},
	{ // 金星 #2
		src:'img/title/kinsei.png',
		x:180,
		y:950,
		alpha:1,
		id:'kinsei',
		group:'title'
	},
	{ // 土星 #3
		src:'img/title/dosei.png',
		x:1300,
		y:200,
		alpha:1,
		id:'dosei',
		group:'title'
	},
	{ // 地球 #4
		src:'img/menu/earth.png',
		x:768,
		y:3000,
		alpha:1,
		id:'earth',
		group:'title'
	},
	{ // プレイボタン #5
		src:'img/title/playBtn.png',
		x:768,
		y:1200,
		alpha:1,
		id:'playBtn',
		group:'title'
	},


//  -------------------------- < メニュー画面 > ----------------------------
	{ // 左ボタン #6
		src:'img/menu/backBtn.png',
		x:144,
		y:800,
		alpha:0,
		id:'backBtn',
		group:'title'
	},
	{ // 右ボタン #7
		src:'img/menu/nextBtn.png',
		x:1392,
		y:800,
		alpha:0,
		id:'nextBtn',
		group:'title'
	},
	{ // アメリカの雲 #8
		src:'img/menu/americaCloud.png',
		x:768,
		y:400,
		alpha:0,
		group:'title'
	},
	{ // アジアの雲 #9
		src:'img/menu/asiaCloud.png',
		x:768,
		y:400,
		alpha:0,
		group:'title'
	},
	{ // ヨーロッパの雲 #10
		src:'img/menu/europeCloud.png',
		x:768,
		y:400,
		alpha:0,
		group:'title'
	},
	{ // アフリカの雲 #11
		src:'img/menu/africaCloud.png',
		x:768,
		y:400,
		alpha:0,
		group:'title'
	},


//  -------------------------- < アメリカステージ > ----------------------------
	{	// 背景 #12
		src:'img/americaStage/background.png',
		x:768,
		y:1024,
		group:'america',
		alpha:1
	},
	{ // メニューボタン #13
		src:'img/menu/menuBtn.png',
		x:100,
		y:100,
		group:'america',
		name:'menuBtn',
		alpha:1
	},
	{ // ステージサウンド #14
		src:'sound/americaStage/beat.wav',
		group:'america',
		alpha:1
	},


//  -------------------------- < 配置スペースポジション > ----------------------------
	{ // 赤・off #15
		src:'img/positions/redPositionOff.png',
		x:530,
		y:1295,
		alpha:1,
		group:'america'
	},
	{ // 赤・on #16
		src:'img/positions/redPositionOn.png',
		x:530,
		y:1295,
		alpha:0,
		group:'america'
	},
	{ // 黄色・off #17
		src:'img/positions/yellowPositionOff.png',
		x:1010,
		y:1295,
		alpha:1,
		group:'america'
	},
	{ // 黄色・on #18
		src:'img/positions/yellowPositionOn.png',
		x:1010,
		y:1295,
		alpha:0,
		group:'america'
	},
	{ // 青・off #19
		src:'img/positions/bluePositionOff.png',
		x:300,
		y:1600,
		alpha:1,
		group:'america'
	},
	{ // 青・on #20
		src:'img/positions/bluePositionOn.png',
		x:300,
		y:1600,
		alpha:0,
		group:'america'
	},
	{ // 緑・off #21
		src:'img/positions/greenPositionOff.png',
		x:1240,
		y:1600,
		alpha:1,
		group:'america'
	},
	{ // 緑・on #22
		src:'img/positions/greenPositionOn.png',
		x:1240,
		y:1600,
		alpha:0,
		group:'america'
	},


	// ベース -------------------------------------------------------
	{	// ベースアイコン #23
		src:'img/americaStage/icon/bassIcon.png',
		x:240,
		y:1880,
		name:'bass',
		id:'bass',
		group:'america',
		alpha:1
		// type:'drag'
	},
	{	// ベーススプライト #24
		src:'img/americaStage/sp/bassSP.png',
		name:'bassSp',
		id:'bassSp',
		group:'america',
		alpha:0,
		spriteData:{
			images:['img/americaStage/sp/bassSP.png'],
			frames:{width:450, height:650},
			animations:{
				play:[0,19]
			}
		}
	},
	{ // ベースサウンド #25
		src:'sound/americaStage/bass.wav',
		group:'america',
		alpha:1
	},


	// ドラム ------------------------------------------------------------
	{ // ドラムアイコン #26
		src:'img/americaStage/icon/drumsIcon.png',
		x:580,
		y:1880,
		name:'drums',
		id:'drums',
		group:'america',
		alpha:1
		// type:'drag'
	},
	{	// ドラムスプライト #27
		src:'img/americaStage/sp/drumsSP.png',
		name:'drumsSp',
		id:'drumsSp',
		group:'america',
		alpha:0,
		spriteData:{
			images:['img/americaStage/sp/drumsSP.png'],
			frames:{width:450, height:650},
			animations:{
				play:[0,9]
			}
		}
	},
	{ // ドラムサウンド #28
		src:'sound/americaStage/drums.wav',
		group:'america',
		alpha:1
	},


	// キーボード -------------------------------------------------------
	{	// キーボードアイコン #29
		src:'img/americaStage/icon/keyboardIcon.png',
		x:950,
		y:1880,
		name:'keyboard',
		id:'keyboard',
		group:'america',
		alpha:1
		// type:'drag'
	},
	{	// キーボードスプライト #30
		src:'img/americaStage/sp/keyboardSP.png',
		name:'keyboardSp',
		id:'keyboardSp',
		group:'america',
		alpha:0,
		spriteData:{
			images:['img/americaStage/sp/keyboardSP.png'],
			frames:{width:450, height:650},
			animations:{
				play:[0,19]
			}
		}
	},
	{ // キーボードサウンド #31
		src:'sound/americaStage/keyboard.wav',
		group:'america',
		alpha:1,
	},


	// ギター ---------------------------------------------------------
	{	// ギターアイコン #32
		src:'img/americaStage/icon/guitarIcon.png',
		x:1300,
		y:1880,
		name:'guitar',
		id:'guitar',
		group:'america',
		alpha:1
		// type:'drag'
	},
	{	// ギタースプライト #33
		src:'img/americaStage/sp/guitarSP.png',
		name:'guitarSp',
		id:'guitarSp',
		group:'america',
		alpha:0,
		spriteData:{
			images:['img/americaStage/sp/guitarSP.png'],
			frames:{width:450, height:650},
			animations:{
				play:[0,15]
			}
		}
	},
	{ // ギターサウンド #34
		src:'sound/americaStage/guitar.wav',
		group:'america',
		alpha:1,
	},


//  -------------------------- < アジアステージ > ----------------------------
	{ // 背景 #35
		src:'img/asiaStage/background.png',
		x:768,
		y:1024,
		group:'asia',
		alpha:1
	},
	{ // メニューボタン #36
		src:'img/menu/menuBtn.png',
		x:100,
		y:100,
		group:'asia',
		name:'menuBtn',
		alpha:1
	},
	{ // ステージサウンド #37
		src:'sound/asiaStage/rythm.wav',
		group:'asia',
		alpha:1
	},


	// -------------------------- < 配置スペースポジション > ----------------------------
	{ // 赤・off #38
		src:'img/positions/redPositionOff.png',
		x:530,
		y:1295,
		alpha:1,
		group:'asia'
	},
	{ // 赤・on #39
		src:'img/positions/redPositionOn.png',
		x:530,
		y:1295,
		alpha:0,
		group:'asia'
	},
	{ // 黄色・off #40
		src:'img/positions/yellowPositionOff.png',
		x:1010,
		y:1295,
		alpha:1,
		group:'asia'
	},
	{ // 黄色・on #41
		src:'img/positions/yellowPositionOn.png',
		x:1010,
		y:1295,
		alpha:0,
		group:'asia'
	},
	{ // 青・off #42
		src:'img/positions/bluePositionOff.png',
		x:300,
		y:1600,
		alpha:1,
		group:'asia'
	},
	{ // 青・on #43
		src:'img/positions/bluePositionOn.png',
		x:300,
		y:1600,
		alpha:0,
		group:'asia'
	},
	{ // 緑・off #44
		src:'img/positions/greenPositionOff.png',
		x:1240,
		y:1600,
		alpha:1,
		group:'asia'
	},
	{ // 緑・on #45
		src:'img/positions/greenPositionOn.png',
		x:1240,
		y:1600,
		alpha:0,
		group:'asia'
	},


	// 鼓 -------------------------------------------------------
	{	// 鼓アイコン #46
		src:'img/asiaStage/icon/tsuzumiIcon.png',
		x:240,
		y:1880,
		name:'tsuzumi',
		id:'tsuzumi',
		group:'asia',
		alpha:1
		// type:'drag'
	},
	{	// 鼓スプライト #47
		src:'img/asiaStage/sp/tsuzumiSP.png',
		name:'tsuzumiSp',
		id:'tsuzumiSp',
		group:'asia',
		alpha:0,
		spriteData:{
			images:['img/asiaStage/sp/tsuzumiSP.png'],
			frames:{width:450, height:650},
			animations:{
				play:[0,59]
			}
		}
	},
	{ // 鼓サウンド #48
		src:'sound/asiaStage/tsuzumi1.wav',
		group:'america',
		alpha:1
	},


	// 笛子 ------------------------------------------------------------
	{	// 笛子アイコン #49
		src:'img/asiaStage/icon/tekishiIcon.png',
		x:580,
		y:1880,
		name:'tekishi',
		id:'tekishi',
		group:'asia',
		alpha:1
		// type:'drag'
	},
	{	// 笛子スプライト #50
		src:'img/asiaStage/sp/tekishiSP.png',
		name:'tekishiSp',
		id:'tekishiSp',
		group:'asia',
		alpha:0,
		spriteData:{
			images:['img/asiaStage/sp/tekishiSP.png'],
			frames:{width:450, height:650},
			animations:{
				play:[0,49]
			}
		}
	},
	{ // 笛子サウンド #51
		src:'sound/asiaStage/tekishi1.wav',
		group:'america',
		alpha:1
	},


	// 二胡 -------------------------------------------------------
	{	// 二胡アイコン #52
		src:'img/asiaStage/icon/nikoIcon.png',
		x:950,
		y:1880,
		name:'niko',
		id:'niko',
		group:'asia',
		alpha:1
		// type:'drag'
	},
	{	// 二胡スプライト #53
		src:'img/asiaStage/sp/nikoSP.png',
		name:'nikoSp',
		id:'nikoSp',
		group:'asia',
		alpha:0,
		spriteData:{
			images:['img/asiaStage/sp/nikoSP.png'],
			frames:{width:450, height:650},
			animations:{
				play:[0,79]
			}
		}
	},
	{ // 二胡サウンド #54
		src:'sound/asiaStage/niko1.wav',
		group:'america',
		alpha:1,
	},


	// 琴 ---------------------------------------------------------
	{	// 琴アイコン #55
		src:'img/asiaStage/icon/kotoIcon.png',
		x:1300,
		y:1880,
		name:'koto',
		id:'koto',
		group:'asia',
		alpha:1
		// type:'drag'
	},
	{	// 琴スプライト #56
		src:'img/asiaStage/sp/kotoSP.png',
		name:'kotoSp',
		id:'kotoSp',
		group:'asia',
		alpha:0,
		spriteData:{
			images:['img/asiaStage/sp/kotoSP.png'],
			frames:{width:450, height:650},
			animations:{
				play:[0,29]
			}
		}
	},
	{ // 琴サウンド #57
		src:'sound/asiaStage/koto1.wav',
		group:'asia',
		alpha:1,
	},


//  -------------------------- < ヨーロッパステージ > ----------------------------
	// { // 背景 #29
	// 	src: 'img/europeStage/background.png',
	// 	group: 'europe',
	// 	alpha: 0
	// }
];
