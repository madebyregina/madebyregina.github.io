jQuery(document).ready(function ($) {
  $('.accordion-trigger').on('click', function () {
    const $trigger = $(this);
    const $panel = $('#' + $trigger.attr('aria-controls'));
    const isExpanded = $trigger.attr('aria-expanded') === 'true';

    // Toggle aria attributes
    $trigger.attr('aria-expanded', !isExpanded);
    $panel.attr('aria-hidden', isExpanded);

    // Slide animation
    $panel.stop().slideToggle(300);
    
    // Optional: Toggle active class for styling
    $trigger.toggleClass('active');
  });
});
