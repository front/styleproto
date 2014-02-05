$(document).ready(function() {
  // Toggle primary navigation
  var menuIcon = 'm';
  
  $('.nav-main-toggle').on('click', function( event ) {
    var $this = $(this);
    event.preventDefault();

    // Toggle class
    $('body').toggleClass('active-nav');
    
    // Changes icon
    if ( menuIcon == 'm' ) {
      $this.attr('data-icon', 'x');
      menuIcon = 'x';
      console.log(menuIcon);
    } else {
      $this.attr('data-icon', 'm');
      menuIcon = 'm';
      console.log(menuIcon);

    } 
  });
});
