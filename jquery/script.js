$(document).hover(function(){
  $('#dino').fadeOut(3000);
});

$(document).hover(function(){
  $('h1').slideDown(1000);
});

$( "button" ).click(function() {
  $( "p" ).toggle('slow');
});

//Squares//

$(document).ready(function() {
   $('#red').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });

   $('#red').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       });
   });

   $('#blue').click(function() {
       $(this).toggle(1000);
   });

   $('#orange').mouseenter(function() {
       $(this).fadeTo('fast', 1.0);
   });

   $('#orange').mouseleave(function() {
       $(this).fadeTo('fast', 0.5);
   });
});
