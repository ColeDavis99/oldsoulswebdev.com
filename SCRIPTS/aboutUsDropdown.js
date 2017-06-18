//This script handles the "aboutUs" dropdowns that display information about us.
//Only One of us Can Be Expanded at the Same Time (design choice)
$(document).ready(function(){

  //When our image is clicked...
  $('.mugshot').on("click", function(){
    //Select the .desc to be expanded and open it
    expandedDesc = $(this).next().next();
    expandedDesc.slideToggle();

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
  $('#about').click(function(e){
    if($(e.target).is('.mugshot, h3, span, .bioArrow')){
      e.preventDefault();
      return;
    }
    if($nav.hasClass("slideOutUp")){
      $('.desc').slideUp();
      $(".bioArrow").removeClass("flip");
    };
  });
});
