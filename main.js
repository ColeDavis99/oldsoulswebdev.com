$(document).ready(function(){

  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  // build a scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#Faded'
  })
  .setClassToggle('#Faded', 'fade-in') //add class to elem with practiceFade ID
  .addTo(controller);
});
