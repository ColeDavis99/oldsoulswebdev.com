$(document).ready(function(){
  $('.mugshot').on("click", function(){
    $(this).next().next().slideToggle();
  })
});
