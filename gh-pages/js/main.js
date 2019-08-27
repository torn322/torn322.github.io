





$(document).ready(function() {
    $(".faq").click(function() {
      if ($(this).find(".faq-hidden").css("display") == "none") {
        $(this).find(".faq-hidden").show("fast")
        $(this).find("span").css({transition:'all 0.2s', transform : "rotate(-135deg)"})
    }
  else {
    $(this).find(".faq-hidden").hide("fast")
    $(this).find("span").css("transform","rotate(45deg)")
    }
  });

  $('.feedback-list').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});


$(document).ready(function(){
 $(".menu").on("click","a", function (event) {
   //отменяем стандартную обработку нажатия по ссылке
   event.preventDefault();

   //забираем идентификатор бока с атрибута href
   var id  = $(this).attr('href'),

   //узнаем высоту от начала страницы до блока на который ссылается якорь
     top = $(id).offset().top;

   //анимируем переход на расстояние - top за 1500 мс
   $('body,html').animate({scrollTop: top}, 300);
 });
});


// open modal
var wrap = $('#wrapper'),
     btn = $('.open-modal-btn'),
     modal = $('.cover, .modal, .content');

$(".play-button").click( function() {
  modal.fadeIn();
});

// close modal
$('.modal').click(function() {
  wrap.on('click', function(event) {
    var select = $('.content');
    if ($(event.target).closest(select).length)
      return;
    modal.fadeOut();
    wrap.unbind('click');
  });
});


});
