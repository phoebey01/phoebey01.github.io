var skillsDiv = jQuery('#skills');
var target = $('#about').offset().top;

jQuery(window).on('scroll', function() {
  if ($(this).scrollTop() > target) {
    $('#navbar').fadeIn(500);
  } else {
    $('#navbar').fadeOut(500);   
  }

  var winT = jQuery(window).scrollTop(),
    winH = jQuery(window).height(),
    skillsT = skillsDiv.offset().top;
  if (winT + winH > skillsT) {
    jQuery('.skillbar').each(function() {
      jQuery(this).find('.skillbar-bar').animate({
        width: jQuery(this).attr('data-percent')
      }, 6000);
    });
  }
});


$(".scroll a").click(function(event){
         event.preventDefault();
         var dest = 0;
         if($(this.hash).offset().top > $(document).height() - $(window).height()){
              dest = $(document).height() - $(window).height();
         } else{
              dest = $(this.hash).offset().top;
         }
     
         $('html, body').animate({scrollTop:dest}, 1000,'swing');
 });
