//This script handles the "aboutUs" dropdowns that display information about us.
$(document).ready(function(){

  //When our image is clicked
  $('.mugshot').on("click", function(){
    $(this).next().next().slideToggle();
    lastClicked = $(this);
  });

  //Close .desc when user clicks on #about blank space, unless hamburger menu is open (design choice)
  var $nav = $('nav')
  $('#about').click(function(e){
    if($(e.target).is('.mugshot, h3, span')){
      e.preventDefault();
      return;
    }
    if($nav.hasClass("slideOutUp")){
      lastClicked.next().next().slideToggle();
    };
  });
});
