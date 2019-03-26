$(document).ready(function() {

  $('.submenu > li').matchHeight();
  $('img[src*=logo]').fadeIn(4000, 0.4);

  $().click(function){
    $(".block-specification").removeClass("active");
    $(this).toggleClass("active");
  });
});
