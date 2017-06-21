$(document).ready(function(){
  //Used for cancelling out header animation when the page is
  //scrolling due to the user clicking on the nav, as opposed to scrolling with mousewheel
  fromNav = null;
  //~~~~~~~~~~~~~~~~~~~~ SCROLLMAGIC SCENES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    // build a scene
    var fadeScene = new ScrollMagic.Scene({
      triggerElement: '#about',
      triggerHook: 0.65,
      reverse:false
    })
    .setClassToggle('#about', 'fade-in') //add class to elem with about ID
    .addTo(controller);

    // ---------------  LARRYS CODE -----------------------------------------
    //SCENE HANDLER
    var scene = new ScrollMagic.Scene({
      triggerElement: "#pinned-trigger1", // point of execution
      duration: $(window).height() - 100, // pin element for the window height - 1
      triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
      reverse: true // allows the effect to trigger when scrolled in the reverse direction
    })
    .setPin("#pinned-element1"); // the element we want to pin

    // Scene2 Handler
    var scene2 = new ScrollMagic.Scene({
      triggerElement: "#pinned-trigger2", // point of execution
      duration: 400 // pin the element for a total of 400px
    })
    .setPin("#pinned-element2"); // the element we want to pin

    // Add Scenes to ScrollMagic Controller
    controller.addScene([
      scene,
      scene2
    ]);
    // ---------------------------------------------------------------------
    // These are the functions for sliding in the why choose us reasons

    var fadeScene2 = new ScrollMagic.Scene({
      triggerElement: '#fade-left1', // what element the triggerHook needs to touch to activate
      triggerHook: 0.65, // This pushes the trigger point (when things happen) lower
      reverse:false // This is so that the setClassToggle doesnt toggle off anymore
    })
    .setClassToggle('#fade-left1', 'left') // append 'left' onto the class of whatever element has the ID of 'fade-left1'
    .addTo(controller);


    var fadeScene3 = new ScrollMagic.Scene({
      triggerElement: '#fade-right',
      triggerHook: 0.65,
      reverse:false
    })
    .setClassToggle('#fade-right', 'right')
    .addTo(controller);

    var fadeScene4 = new ScrollMagic.Scene({
      triggerElement: '#fade-left2',
      triggerHook: 0.65,
      reverse:false
    })
    .setClassToggle('#fade-left2', 'left')
    .addTo(controller);

    // ---------------------------------------------------------------------
    // This is Cole's Parallax Scene

    var slideParallaxScene = new ScrollMagic.Scene({
      triggerElement: '#bcg-parallax',
      triggerHook:0,
      offset:-200,//Change this offset to alter when the parallax effect begins.
      //Right now, I have it to where the effect stops just before the img leaves the screen.
      duration: '120%',
    })
    .setTween(TweenMax.from('#bcg', 1, {y: '-40%', ease:Power0.easeNone}))
    .addTo(controller)
  //~~~~~~~~~~~~~~~~~~~~ End of ScrollMagic Effects ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//



















  //~~~~~~~~~~~~~~~~~~~~ HEADER SCROLLING LOGIC ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
  var scrollAmount = 0;
  var pixelsToTriggerExpand = 30;
  var pixelsToTriggerContract = 30;

    $(document).scroll(function(e){
      //Ignore all this if the page is scrolling from a nav click, instead of typical mousewheel scrolling.
      if (fromNav){
          e.preventDefault();
        }
      else{
          //This script determines when the header comes in or out.
          var distance = $(window).scrollTop();
          if(distance - scrollAmount > pixelsToTriggerContract){
            //User is scrolling Down
            scrollAmount = distance;
            var $hamburger = $(".hamburger");
            //Don't scroll up the header if the hamburger menu is open.
            if(!$hamburger.hasClass("is-active")){
              $('header, #desktopNav').removeClass('animated slideInDown').addClass('animated slideOutUp');
            }
          }
          if(distance < scrollAmount - pixelsToTriggerExpand){
          //User is Scrolling Up
            scrollAmount = distance;

          //Change animation type and speed (animate.css)
            $('header, #desktopNav').removeClass('animated slideOutUp').addClass('animated slideInDown');
          }
        }
      });//End of document.scroll()








  //~~~~~~~~~~~~~~~~~~~~ NAVIGATION LINK CLICK EVENT ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
  $("a").on("click", function(){
      //Scroll The Page
      fromNav = true;
      var loc = $(this).attr("href");
       $('html, body').animate({
         scrollTop: $(loc).offset().top
     }, 1000);

     //Keep the header from sliding out when "Back To Top" is clicked. Else, slide it out.
     if($(this).attr("class") == "backToTop"){
       $('header, #desktopNav').removeClass('animated slideOutUp').addClass('animated slideInDown');
     }

     else{
       //Get the header out of here lul
       $('header, #desktopNav').removeClass('animated slideInDown').addClass('animated slideOutUp');
     }


     //Slide #mobileNav Up and Out
     $('#mobileNav').removeClass('animated slideInDown').addClass('animated slideOutUp');
     //Little #mobileNav Fix for when user minimizes hamburger menu and triggers header to slideOutUp
     $('#mobileNav').css("top", "0");
     //Make the hamburger button return to resting state every time
     $('.hamburger').toggleClass("is-active");


     //reset "fromNav" to false after 1000ms has passed.
     setTimeout(function () {
      fromNav = false;
    }, 1100);
  });//End of a.onclick()










  //~~~~~~~~~~~~~~~~~~~~ MOBILE NAV SLIDE LOGIC ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
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










  //~~~~~~~~~~~~~~~~~~~~ ABOUT US DROPDOWN LOGIC ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

      //When our image is clicked...
      $('.mugshot').on("click", function(){
        //Select the .desc to be expanded and open it
        expandedDesc = $(this).next().next();
        expandedDesc.delay(380).slideToggle();

        //Flip The Arrow
        flipArrow($(this));
      });

      function flipArrow(thisArgument){
        // animate the corresponding bioArrow 180deg.
        //Keep in mind, $(this) is still referring to .mugshot
        animateThisArrow = thisArgument.parent().find(".bioArrow");
        animateThisArrow.toggleClass("flip");
        //De-Animate All Who Are Not The currently selected bioArrow
        $(".bioArrow").not(animateThisArrow).removeClass("flip");

        //.... and close all other .descs, except for the one just clicked
        $(".desc").not(expandedDesc).delay(380).slideUp();
      }



      //When our arrow is clicked...
      $('.bioArrow').on("click", function(){
        expandedDescArrow = $(this).prev().slideToggle();
        $(this).toggleClass("flip");

        $(".bioArrow").not(this).removeClass("flip");
        $(".desc").not(expandedDescArrow).delay(380).slideUp();
      });//End of bioArrow click




      //Close .desc when user clicks on #about blank space, unless hamburger menu is open (design choice)
      var $nav = $('nav')
      $('.aboutUs').click(function(e){
        if($(e.target).is('.mugshot, h3, span, .bioArrow')){
          e.preventDefault();
          return;
        }
        if($nav.hasClass("slideOutUp")){
          $('.desc').slideUp();
          $(".bioArrow").removeClass("flip");
        };
      });

});//End of document.ready()
