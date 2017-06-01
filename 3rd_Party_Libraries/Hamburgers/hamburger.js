var $hamburger = $(".hamburger");
$hamburger.on("click", function() {
  $hamburger.toggleClass("is-active");
  if($hamburger.hasClass("is-active")){
    $('nav').removeClass('animated slideOutLeft').addClass('animated slideInLeft');
    $("nav").css("visibility", "visible");
  }
  else{
    $('nav').removeClass('animated slideInLeft').addClass('animated slideOutLeft');

  }
});
