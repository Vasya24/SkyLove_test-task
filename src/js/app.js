const $ = require('jquery');

// Выпадашка слева
$('.burger').mouseover(() => {
  $('.dropdown-left').addClass('active');
});
$('.dropdown-left').mouseleave(() => {
  $('.dropdown-left').removeClass('active');
});

// Выпадашка адресов
$('.address-choose').mouseover(() => {
  $('.addresses-dropdown').addClass('active');
});
$('.addresses-dropdown').mouseleave(() => {
  $('.addresses-dropdown').removeClass('active');
});
// Внутри адресной выпадашки инициировал подкрашивание звездочек при наведении на каждый бокс
$('.addressbox').mouseover(function () {
  $('.hovered').removeClass('hovered');
  $(this).addClass('hovered');
  if ($('.hovered')) {
    $(this).children('.hovered').removeClass('hovered');
    $(this).children('img').addClass('hovered');
  }
});

// Выпадашка профиля
$('.current-user').mouseover(() => {
  $('.dropdown-user').addClass('active');
});
$('.dropdown-user').mouseleave(() => {
  $('.dropdown-user').removeClass('active');
});

// Выпадашка "За темой следят"
$('#drop-followers').mouseover(() => {
  $('.followers-dropdown').addClass('active');
});
$('.followers-dropdown').mouseleave(() => {
  $('.followers-dropdown').removeClass('active');
});

// Выпадашка лайков
let likes = 15;
$('.dd-likes').html(likes);
$('#drop-likes').click(() => {
  $('.dd-likes').html(++likes);
  $('.likes-dropdown').addClass('active');
});
$('.likes-dropdown').mouseleave(() => {
  $('.likes-dropdown').removeClass('active');
});

// Переключаемые вкладки во всех секциях
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
