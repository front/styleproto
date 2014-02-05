$(document).ready(function() {
  // Toggle primary navigation
  $('.nav-main-toggle').on('click', function(e) {
    e.preventDefault();
    $('body').toggleClass('active-nav');
  });
});
