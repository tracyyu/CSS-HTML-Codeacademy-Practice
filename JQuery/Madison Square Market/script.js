$(document).ready(function(){
  $('.dropdown').click(function(){
    //hide all menus first.
    $('.dropdown-menu').hide();
    // now toggle just this one!
         $(this).children('.dropdown-menu').toggle();
  
  });
});