const $ = require('jquery');

$('.burger').mouseover(() => {
  $('.dropdown-left').addClass('active');
});
$('.dropdown-left').mouseout(() => {
  $('.dropdown-left').removeClass('active');
});

$('.mark-box').click(function () {
  $('.selected').removeClass('selected');
  $(this).addClass('selected');
});

$('.posts-menu-item').click(function () {
  $('.active').removeClass('active');
  $(this).addClass(('active'));
});
