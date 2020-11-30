const $ = require('jquery')

let burger = document.querySelector('.burger');
let dropMain = document.querySelector('.dropdown-left');

// burger.addEventListener('mouseover', () => {
//   dropMain.style.display = 'block'
// })
// dropMain.addEventListener('mouseout', () => {
//   dropMain.style.display = 'none'
// })

// burger.addEventListener('mouseover', () => {
//   dropMain.classList.add('active')
// });
// dropMain.addEventListener('mouseout', () => {
//   dropMain.classList.remove('active')
// })

$('.burger').mouseover(() => {
  $('.dropdown-left').addClass('active')
})
$('.dropdown-left').mouseout(() => {
  $('.dropdown-left').removeClass('active')
})


$('.mark-box').click(function(event) {
  $('.selected').removeClass('selected');
  $(this).addClass('selected');
});

$('.posts-menu-item').click(function() {
  $('.active').removeClass('active');
  $(this).addClass(('active'))
})
