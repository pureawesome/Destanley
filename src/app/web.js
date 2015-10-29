(function($) {
  'use strict';

  $(document).ready(function() {
    var $nav = $('.nav li');

    $nav.each(function(){
      $(this).on('click', function(){
        $nav.removeClass('active');
        $(this).addClass('active');
      })
    });

  });
})(jQuery);
