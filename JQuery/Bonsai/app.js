var main = function() {
  $('#top-text').keyup(function(){
    var toAdd = $(this).val();
    $('.top-caption').text(toAdd);
  });
    $('#bottom-text').keyup(function(){
    var toAdd = $(this).val();
    $('.bottom-caption').text(toAdd);
  });
    $('#img-url').keyup(function(){
    var toAdd = $(this).val();
    $('img').children().attr('src',toAdd);
  });
};
 
$(document).ready(main);