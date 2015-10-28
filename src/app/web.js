;(function($) {
  $(document).ready(){
    var $nav = $('.nav li');

    $nav.forEach(function(){
      $(this).on('click', function(){
        $nav.removeClass('active');
        $(this).addClass('active');
      })
    });

  });
})(jQuery);
