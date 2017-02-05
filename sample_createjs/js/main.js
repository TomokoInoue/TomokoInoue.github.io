// キャンパスの要素を取得する
var canvas = document.getElementById( 'map-canvas' ) ;

// 地図のオプションを設定する
var mapOptions = {
	zoom: 18 ,	// 必須
	center: new google.maps.LatLng( 34.99485610000002, 135.7850463 ),	// 必須
	scrollwheel: false ,
};

// 地図のインスタンスを作成する
var map = new google.maps.Map( canvas, mapOptions );
