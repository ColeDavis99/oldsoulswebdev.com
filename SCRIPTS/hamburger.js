$( document ).ready(function() {
  /* Open or Close the hamburger menu*/
  var $hamburger = $(".hamburger");
  $hamburger.on("click", function() {
    $hamburger.toggleClass("is-active");
    if($hamburger.hasClass("is-active")){
      //Slide #mobileNav In
      $('#mobileNav').removeClass('animated slideOutUp').addClass('animated slideInDown');
      //Make #mobileNav visible when button is clicked.
      $('#mobileNav').css("top", "9vw");
      $("#mobileNav").css("visibility", "visible");
    }
    else{
      //Slide #mobileNav Up and Out
      $('#mobileNav').removeClass('animated slideInDown').addClass('animated slideOutUp');
      //Little #mobileNav Fix for when user minimizes hamburger menu and triggers header to slideOutUp
      $('#mobileNav').css("top", "0"); 
    }
  });


    //CLose #mobileNavigation if user clicks blank space.
    $("main").on("click", function(){
      if($hamburger.hasClass("is-active")){
          $('#mobileNav').removeClass('animated slideInDown').addClass('animated slideOutUp');

          //Little #mobileNav Fix for when user minimizes hamburger menu and triggers header to slideOutUp
          $('#mobileNav').css("top", "0");

          $hamburger.removeClass("is-active");
        };
      });


  //===============End of mobile menu logic===//
});
