// 即時関数
;(function() {
    'use strict';

    $(function() {

        var $contentArea = $('#top');
        if(!$contentArea.find('.modal_wrap')[0]) {
            return;
        }

        var $modalWindow = $contentArea.find('.modal_wrap');
        var $closeBtn = $contentArea.find('.close_modal');
        var $overlay = $modalWindow.find('.modal_overlay');

        // モーダルの表示
        $('.js-modal').on('click', function(evt) {
            evt.preventDefault();
            var target = $(this).attr('href');
            $(target).removeClass('hidden');
        });

        // モーダルの非表示
        $closeBtn.add($overlay).on('click', function() {
			$modalWindow.each(function() {
				if(!$(this).hasClass('hidden')) {
					$(this).addClass('fadeOut').on('animationend', function() {
						$(this).addClass('hidden').removeClass('fadeOut').off('animationend');
					});
				}
			});
		});
        
    });
})();
