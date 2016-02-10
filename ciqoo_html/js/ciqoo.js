window.addEventListener('load', init);
// htmlの<body onload="init()">の新しい書き方
// jQueryは$(function(){
//		ここに書く
// });


// 先読みするリスト
var manifest = [
	{src:'img/ciqoo_stage.png'},
	{src:'img/violinSP.png'},
	{src:'img/congaSP.png'},
	{src:'img/violinButton.png'},
	{src:'img/congaButton.png'},
	{src:'img/woodBassButton.png'},
	{src:'img/bassButton.png'},
	{src:'img/guitarButton.png'},
];


// DOMを読み込んだら
function init() {
	// ステージ(canvas)の設定
	var stage = new createjs.Stage('canvasEl');
	console.log('ステージ読み込んだよ');

	var loader = new createjs.LoadQueue();
	loader.loadManifest(manifest); // 読み込み開始

	loader.addEventListener('complete', function(){

	});

	stage.update();
};
