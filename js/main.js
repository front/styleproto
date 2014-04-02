(function($) {
  // Toggle primary navigation
  var menuIcon = 'm',
      $menuBtn = $('.nav-main-toggle'),
      $body = $('body');
  
  $menuBtn.on('click', function( event ) {
    event.preventDefault();

    // Toggle class
    $body.toggleClass('active-nav');
    toggleMenuBtn();
  });


  // Close main menu
  $('.nav__main--exit').on('click', function(e) {
    e.preventDefault();
    $body.removeClass('active-nav');
    toggleMenuBtn();
  });
  
  function toggleMenuBtn() {
    // Changes icon
    if ( menuIcon == 'm' ) {
      $menuBtn.attr('data-icon', 'x');
      menuIcon = 'x';
    } else {
      $menuBtn.attr('data-icon', 'm');
      menuIcon = 'm';
    } 
  }

})(jQuery);
