$(function(){
	//GPS
	navigator.geolocation.getCurrentPosition(function(pos){
		var lat = pos.coords.latitude;
		var lon = pos.coords.longitude;

		console.log(lat,lon);

		// 定数
		const apikey = '9600dda65548f3a5f458aa5ab8721019';
		// openweathermapのお天気情報のURL
		var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + apikey;


		$.ajax({
			url:url,
			dataType:'json'
		}).done(function(data){

			console.log(data);

		}).fail(function(){
			console.log('ajax error!!!');
		});


		// htmlに表示する関数
		function showWeather(data){
			console.log(data);
		}
	});
});
