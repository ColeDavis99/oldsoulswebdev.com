//This script handles the "aboutUs" dropdowns that display information about us.
//Only One of us Can Be Expanded at the Same Time (design choice)
$(document).ready(function(){

  //When our image is clicked...
  $('.mugshot').on("click", function(){
    expandedPerson = $(this).next().next();

    //...Close all other .descs, except for the one just clicked
    $(".desc").not(expandedPerson).slideUp();

    //And open our clicked .desc
    expandedPerson.delay(300).slideToggle();
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
  });
});
