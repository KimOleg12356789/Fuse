$(document).ready(function(){

$('ul.dropdown-menu2 li').click(function(){
          var tab_id = $(this).attr('data-tab');

          $('ul.dropdown-menu2 li').removeClass('current');
          $('.program-cont.is').removeClass('current');

          $(this).addClass('current');
          $("#"+tab_id).addClass('current');
  });


const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});


$('.slid-cont').slick({
        infinite: true,
        speed: 300,
        dots:false,
        slidesToShow: 2,
        slidesToScroll: 1,
        active:true,

        responsive: [
        {
          breakpoint: 3000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
          }
        },
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            dots:false,
            slidesToScroll: 1
          }
        },


          {
            breakpoint: 445,
            settings: {
              slidesToShow: 2,
              dots:true,
              slidesToScroll: 1
            }
          }
      ]
  });


})

$('a.vid-but').click(function(){
  $('.video-bl').css('display','block');
  $('a.vid-but').css('display','none');
  $('a.vid-but-2').css('display','block');
  $('ul.dropdown-menu2').css('max-height','312px');
  $('button.slick-next.slick-arrow').css('top','70%');
  $('.program-cont.is').css('max-height','35%')
});

$('a.vid-but-2').click(function(){
  $('.video-bl').css('display','none');
  $('a.vid-but').css('display','block');
  $('a.vid-but-2').css('display','none');
  $('ul.dropdown-menu2').css('max-height','inherit');
  $('button.slick-next.slick-arrow').css('top','50%');
  $('.program-cont.is').css('max-height','550px')

});