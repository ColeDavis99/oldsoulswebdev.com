$(document).ready(function(){
    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    // build a scene
    var ourScene = new ScrollMagic.Scene({
      triggerElement: '#about'
    })
    .setClassToggle('#about', 'fade-in') //add class to elem with about ID
    .addTo(controller);


    //Here is your second thing you were trying to do Zach.
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 300})
            .setPin("#pin1")
            .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
            .addTo(controller);
});
