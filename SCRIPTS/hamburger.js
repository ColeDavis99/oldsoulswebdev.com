$( document ).ready(function() {
  /* Open or Close the hamburger menu*/
  var $hamburger = $(".hamburger");
  $hamburger.on("click", function() {
    $hamburger.toggleClass("is-active");
    if($hamburger.hasClass("is-active")){
      //Slide Nav In
      $('nav').removeClass('animated slideOutUp').addClass('animated slideInDown');
      //Make nav visible when button is clicked.
      $('nav').css("top", "11vw");
      $("nav").css("visibility", "visible");
    }
    else{
      //Slide Nav Up and Out
      $('nav').removeClass('animated slideInDown').addClass('animated slideOutUp');
      //Little Nav Fix for when user minimizes hamburger menu and triggers header to slideOutUp
      $('nav').css("top", "0");
    }
  });


    //CLose navigation if user clicks blank space.
    $("main").on("click", function(){
      if($hamburger.hasClass("is-active")){
          $('nav').removeClass('animated slideInDown').addClass('animated slideOutUp');

          //Little Nav Fix for when user minimizes hamburger menu and triggers header to slideOutUp
          $('nav').css("top", "0");

          $hamburger.removeClass("is-active");
        };
      });


  //===============End of mobile menu logic===//
});
