$(function() {
  // 「#hide-text」要素に対するclickイベントを作成してください
  $("#hide-text").click(function() {
    $("#text").slideUp();
  } );
  
});

$(function() {
  // 「#language-wrapper」にhoverしたときのhoverイベントを作成してください
  $('#language-wrapper').hover(
    function() {
    $('.language-text').fadeIn();
  },
    function() {
    $('.language-text').fadeOut();  
  }
  );
  
});
