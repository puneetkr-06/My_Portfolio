// Commented out unused functions
// function showbutton(){
//   document.querySelector('.showbtn').style.opacity = 1;
// }
function removeSlash(){
  document.querySelector('.typed-out').style.borderRight = 'none';
}
// setTimeout(() => {
//  showbutton()  
// }, 900);

setTimeout(() => {
  removeSlash();
}, 800);

let button = document.querySelector('.showbtn');
button?.addEventListener('click', function(e) {
  window.location.href = "main.html";
});

let menu = document.querySelector('.menu-icon')
menu.addEventListener('click', function(e){
  document.querySelector('.open').classList.add('close-icon')
  document.querySelector('.fa-bars').classList.add('close-menu')
  document.querySelector('.fa-bars').classList.remove('menu-icon')
  document.querySelector('.navbarkaul').classList.add('navbar-small')
  document.querySelector('.navbarkaul').style.display = 'block'
  document.querySelector('.center').style.marginTop = '280px'


})

let cross = document.querySelector('.open')
cross.addEventListener('click', function(e){
  document.querySelector('.open').classList.remove('close-icon')
  document.querySelector('.fa-bars').classList.remove('close-menu')
  document.querySelector('.fa-bars').classList.add('menu-icon')
  document.querySelector('.navbarkaul').classList.remove('navbar-small')
  document.querySelector('.navbarkaul').style.display = 'none'
  document.querySelector('.center').style.marginTop = '80px'
})

$(window).on('resize', function() {
  if($(window).width() > 850) {
      $('.menu-icon').addClass('.close-menu');
       $('.menu-icon').removeClass('.menu-icon');

  }
  else {
      $('.menu-icon').addClass('.close-menu');
       $('.menu-icon').removeClass('.menu-icon');
  }
})