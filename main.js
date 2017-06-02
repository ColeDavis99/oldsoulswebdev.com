$(document).ready(function(){

  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  // build a scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#about'
  })
  .setClassToggle('#about', 'fade-in') //add class to elem with practiceFade ID
  .addTo(controller);
});
