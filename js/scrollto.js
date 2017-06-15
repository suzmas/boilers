
// JQUERY Scroll to

function scrollTo(selector) {
  var pos = $(selector).position().top;
  $('body, html').animate({scrollTop: pos});
}
