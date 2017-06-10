var scrollAmount = 0;
var pixelsToTriggerExpand = 30;
var pixelsToTriggerContract = 30;

$(document).scroll(function() {
var distance = $(window).scrollTop();
  if(distance - scrollAmount > pixelsToTriggerContract){
      //User is scrolling Down
      scrollAmount = distance;
      var $hamburger = $(".hamburger");
      //Don't scroll up the header if the hamburger menu is open.
      if(!$hamburger.hasClass("is-active")){
        $('header, #desktopNav').removeClass('animated slideOutUp').addClass('animated slideOutUp');
      }

    //Change the ID, corresponding to the appropriate speed I made it (it's defaulting here).

  }

  if(distance < scrollAmount - pixelsToTriggerExpand){
      //User is Scrolling Up
        scrollAmount = distance;

      //Change animation type and speed (animate.css)
      $('header, #desktopNav').removeClass('animated slideOutUp').addClass('animated slideInDown');
      //Change the ID, corresponding to the appropriate speed I made it.

  }
});
