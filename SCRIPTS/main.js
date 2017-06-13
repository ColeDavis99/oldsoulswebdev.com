$(document).ready(function(){
    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    // build a scene
    var fadeScene = new ScrollMagic.Scene({
      triggerElement: '#about',
      triggerHook: 0.65,
      reverse:false
    })
    .setClassToggle('#about', 'fade-in') //add class to elem with about ID
    .addTo(controller);

// ---------------  LARRYS CODE -----------------------------------------
    //SCENE HANDLER
    var scene = new ScrollMagic.Scene({
    triggerElement: "#pinned-trigger1", // point of execution
    duration: $(window).height() - 100, // pin element for the window height - 1
    triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
    reverse: true // allows the effect to trigger when scrolled in the reverse direction
    })
    .setPin("#pinned-element1"); // the element we want to pin

    // Scene2 Handler
    var scene2 = new ScrollMagic.Scene({
    triggerElement: "#pinned-trigger2", // point of execution
    duration: 400 // pin the element for a total of 400px
    })
    .setPin("#pinned-element2"); // the element we want to pin

    // Add Scenes to ScrollMagic Controller
    controller.addScene([
    scene,
    scene2
    ]);
// ---------------------------------------------------------------------
    // These are the functions for sliding in the why choose us reasons

    var fadeScene2 = new ScrollMagic.Scene({
      triggerElement: '#fade-left1', // what element the triggerHook needs to touch to activate
      triggerHook: 0.65, // This pushes the trigger point (when things happen) lower
      reverse:false // This is so that the setClassToggle doesnt toggle off anymore
    })
    .setClassToggle('#fade-left1', 'left') // append 'left' onto the class of whatever element has the ID of 'fade-left1'
    .addTo(controller);


    var fadeScene3 = new ScrollMagic.Scene({
      triggerElement: '#fade-right',
      triggerHook: 0.65,
      reverse:false
    })
    .setClassToggle('#fade-right', 'right')
    .addTo(controller);

    var fadeScene4 = new ScrollMagic.Scene({
      triggerElement: '#fade-left2',
      triggerHook: 0.65,
      reverse:false
    })
    .setClassToggle('#fade-left2', 'left')
    .addTo(controller);
});
