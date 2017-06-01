var $hamburger = $(".hamburger");
$hamburger.on("click", function() {
  $hamburger.toggleClass("is-active");
  if($hamburger.hasClass("is-active")){
    //Animate the Nav
    $('nav').removeClass('animated slideOutUp').addClass('animated slideInDown');
    $("nav").css("visibility", "visible");
  }
  else{
    $('nav').removeClass('animated slideInDown').addClass('animated slideOutUp');

  }
});
