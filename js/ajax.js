// DOMロード
$(function(){

	console.log('DOM読み込んだよ');

	// #btnをクリックしたら
	$('#btn').on('click', function(){

		// ajaxでロード
		$.ajax({
			url:'omikuji.html',
			type:'GET',
			dataType:'html'
		}).done(function(data){
			console.log(data);
		}).fail(function(){
			console.log('ajax error');
		});

	});


});
