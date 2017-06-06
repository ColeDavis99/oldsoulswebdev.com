$( document ).ready(function() {
  /* Open or Close the hamburger menu*/
  var $hamburger = $(".hamburger");
  $hamburger.on("click", function() {
    $hamburger.toggleClass("is-active");
    if($hamburger.hasClass("is-active")){
      //Animate the Nav
      $('nav').removeClass('animated slideOutUp').addClass('animated slideInDown');
      //Make nav visible when button is clicked for the first time.
      $("nav").css("visibility", "visible");
      //Make the menu scroll, but not the rest of the page.
          //$("main").css("position","fixed");
      //Keeps body's background image from scrolling when nav is open.
          //$("body").css("background-attachment", "fixed");
    }
    else{
      $('nav').removeClass('animated slideInDown').addClass('animated slideOutUp');
      //Make the main content scrollable again.
      $("main").css("position","relative");
      //$("body").css("background-attachment", "scroll");
    }
  });


    //CLose navigation if user clicks anywhere that isn't an option in the nav.
    $("main").on("click", function(){
      if($hamburger.hasClass("is-active")){
          $('nav').removeClass('animated slideInDown').addClass('animated slideOutUp');
          //Make the main content scrollable again.
              //$("main").css("position","relative");
          $("body").css("background-attachment", "scroll");
          //Make the hamburger back to it's 3 line position.
          $hamburger.removeClass("is-active");
        };
      });


  //===============End of mobile menu logic===//
});
