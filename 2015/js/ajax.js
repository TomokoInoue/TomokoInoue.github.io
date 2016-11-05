// DOMロード
$(function(){

	console.log('DOM読み込んだよ');

	// #btnをクリックしたら
	$('#btn').on('click', function(){

		// ajaxでロード
		$.ajax({
			url:'../mydata.json',
			type:'GET',
			dataType:'json'
		}).done(function(data){
			//成功
			console.log(data);

			showContent(data);

		}).fail(function(){
			// 失敗
			console.log('ajax error');
		});

	});

	function showContent(data){

		// $('#container').append(data);

		for(var cnt = 0; cnt < data.length; cnt++){

			// 米倉さんの住んでいる場所は川崎市です
			$('#container li').eq(cnt).text(data[cnt].name + 'さんの住んでいる場所は' + data[cnt].address + 'です');
		}
	}


});
