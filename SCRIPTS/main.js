$(document).ready(function(){
    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    // build a scene
    var ourScene = new ScrollMagic.Scene({
      triggerElement: '#about'
    })
    .setClassToggle('#about', 'fade-in') //add class to elem with about ID
    .addTo(controller);

    var ourScene2 = new ScrollMagic.Scene({
      triggerElement: '#pinned-trigger2'
    })
    ScrollMagic.Scene({triggerElement: "#trigger1"})
                        .addTo(controller);
});
