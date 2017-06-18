//This script handles the "aboutUs" dropdowns that display information about us.
//Only One of us Can Be Expanded at the Same Time (design choice)
$(document).ready(function(){

  //When our image is clicked...
  $('.mugshot').on("click", function(){

    //Select the .desc to be expanded...
          expandedDesc = $(this).next().next();
    //... and open it
        expandedDesc.slideToggle();

    // then, select and animate the corresponding bioArrow 180deg.
    //Keep in mind, $(this) is still referring to .mugshot
    animateThisArrow = $(this).parent().find(".bioArrow");
    animateThisArrow.toggleClass("flip");
    //De-Animate All Who Are Not The currently selected bioArrow
    $(".bioArrow").not(animateThisArrow).removeClass("flip");

    //.... and close all other .descs, except for the one just clicked
    $(".desc").not(expandedDesc).delay(380).slideUp();

  });



  //Close .desc when user clicks on #about blank space, unless hamburger menu is open (design choice)
  var $nav = $('nav')
  $('#about').click(function(e){
    if($(e.target).is('.mugshot, h3, span')){
      e.preventDefault();
      return;
    }
    if($nav.hasClass("slideOutUp")){
      $('.desc').slideUp();
    };

    $(".bioArrow").removeClass("flip");
  });
});
