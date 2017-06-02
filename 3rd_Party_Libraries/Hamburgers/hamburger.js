$( document ).ready(function() {
  /* Here is the mobile menu logic. */
  var $hamburger = $(".hamburger");
  $hamburger.on("click", function() {
    $hamburger.toggleClass("is-active");
    if($hamburger.hasClass("is-active")){
      //Animate the Nav
      $('nav').removeClass('animated slideOutUp').addClass('animated slideInDown');
      //Make nav visible when button is clicked for the first time.
      $("nav").css("visibility", "visible");
      //Make the menu scroll, but not the rest of the page.
      $("#headerWrapper, #contentWrapper").css("position","fixed");
    }
    else{
      $('nav').removeClass('animated slideInDown').addClass('animated slideOutUp');
      //Make the content scrollable again.
      $("#headerWrapper, #contentWrapper").css("position","absolute");
    }
  });
  //===============End of mobile menu logic===//
});
