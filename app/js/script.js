$(document).ready(function() {
  const $enterBtn = $('#enter-btn');
  const $splashScreen = $('.splash');
  const $content = $('.content');

  // Initially set opacity to 0 to make the button invisible
  $enterBtn.css('opacity', 0);

  // After 1 second, make the button visible by transitioning opacity to 1
  setTimeout(function() {
    $enterBtn.css({
      'transition': 'opacity 1s ease-in-out', // Set transition for smooth fade-in
      'opacity': 1 // Fade the button in
    });
  }, 1000); // 1 second delay before starting the fade-in

  // When the button is clicked, hide splash screen and show content
  $enterBtn.on('click', function() {
    $splashScreen.hide();
    $content.show().addClass('show');
  });
});