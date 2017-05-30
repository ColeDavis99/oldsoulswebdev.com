var scrollAmount = 0;
var pixelsToTriggerExpand = 30;
var pixelsToTriggerContract = 150;

$(document).scroll(function() {
var distance = $(window).scrollTop();
  if(distance - scrollAmount > pixelsToTriggerContract){
      //User is scrolling Down
      scrollAmount = distance;
      $('nav').removeClass('animated slideOutUp').addClass('animated slideOutUp');
      $('img#thumb').removeAttr('id');
      $('nav').attr('id','navSlow');
  }

  if(distance < scrollAmount - pixelsToTriggerExpand){
      //User is Scrolling Up
        scrollAmount = distance;
      //Change animation type (animate.css)
        $('nav').removeClass('animated slideOutUp').addClass('animated slideInDown');
      //Change the ID, corresponding to the appropriate speed I made it.
        $('img#thumb').removeAttr('id');
        $('nav').attr('id','navFast');
  }
});
