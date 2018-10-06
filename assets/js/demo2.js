// demo #2
$(function(){

  // wrap every letter in a span
  $('.loading .letters').each(function() {
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });

  // animate letters
  anime.timeline({
      loop: true
    })
    .add({
      targets: '.loading .letter',
      translateY: ["0.25em", 0],
      translateZ: 0,
      opacity: [0,1],
      duration: 750,
      delay: function(el, i) {
        return 50 * i;
      }
    })
    .add({
      targets: '.loading .letter',
      translateY: [0, "-1.25em"],
      translateZ: 0,
      opacity: [1,0],
      duration: 1500,
      delay: function(el, i) {
        return 50 * i;
      }
    });

});