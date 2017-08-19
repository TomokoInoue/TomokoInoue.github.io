(function(){
    'use strict';

    var menuItem = $('.tab_menu').children('li')

    // 下にスクロール後、飛行機が飛ぶ処理
    $(window).scroll(function() {
        if($(this).scrollTop() > 60) {
            $('#move_plane').css('top', '1500px');
        }
    });

    // タブ切り替えの処理
    menuItem.on('click', function(){
        if($(this).attr('class') !== 'active') {
            // タブメニュー
            $(this).toggleClass('active').siblings('li').toggleClass('active');
            // タブの中身
            var index = $('#tab_menu li').index(this);
            $('.main_contents div').eq(index).toggleClass('active').siblings('div').toggleClass('active');
        }
    });
})();
