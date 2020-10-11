$(function(){
  $('.js-modal-open').on('click',function(){
      $('.js-modal').fadeIn();
      return false;
  });
  $('.js-modal-close').on('click',function(){
      $('.js-modal').fadeOut();
      return false;
  });
});

$(function(){
  $('.js-modal-open02').on('click',function(){
      $('.js-modal02').fadeIn();
      return false;
  });
  $('.js-modal-close02').on('click',function(){
      $('.js-modal02').fadeOut();
      return false;
  });
});