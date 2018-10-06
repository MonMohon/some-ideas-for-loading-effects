// demo #3
$(function(){

  // zoom in animations
  anime.timeline({loop: true})
    .add({
      targets: '.loading .circle-big',
      scale: [0, 10],
      opacity: [0.5, 0],
      easing: "easeInOutExpo",
      rotateZ: 360,
      duration: 900
    }).add({
      targets: '.loading .circle-container',
      scale: [0, 1],
      duration: 1100,
      easing: "easeInOutExpo",
      offset: '-=1000'
    }).add({
      targets: '.loading .circle-light',
      scale: [0, 1],
      duration: 1100,
      easing: "easeOutExpo",
      offset: '-=600'
    }).add({
      targets: '.loading .bang',
      scale: [0, 1],
      rotateZ: [45, 15],
      duration: 1200,
      offset: '-=1000'
    }).add({
      targets: '.loading',
      scale: [1, 1.4],
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 400
    });

  // rotate animation
  anime({
    targets: '.loading .circle-dark-dashed',
    rotateZ: 360,
    duration: 4000,
    easing: "linear",
    loop: true
  });
  
});