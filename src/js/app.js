const $ = require('jquery');

$('.burger').mouseover(() => {
  $('.dropdown-left').addClass('active');
});
$('.dropdown-left').mouseleave(() => {
  $('.dropdown-left').removeClass('active');
});
$('.address-choose').mouseover(() => {
  $('.addresses-dropdown').addClass('active');
})
$('.addresses-dropdown').mouseleave(() => {
  $('.addresses-dropdown').removeClass('active');
})
$('.current-user').mouseover(() => {
  $('.dropdown-user').addClass('active')
})
$('.dropdown-user').mouseleave(() => {
  $('.dropdown-user').removeClass('active')
})

$('.mark-box').click(function () {
  $('.selected').removeClass('selected');
  $(this).addClass('selected');
});

$('.posts-menu-item').click(function () {
  $('.active').removeClass('active');
  $(this).addClass(('active'));
});

$('.ah-item').click(function () {
  $('.active').removeClass('active');
  $(this).addClass('active');
});


$('.addressbox').mouseover(function() {
  $('.hovered').removeClass('hovered')
  $(this).addClass('hovered')
  if ($('.hovered')) {
    $(this).children('.hovered').removeClass('hovered')
    $(this).children('img').addClass('hovered')
  }
})
