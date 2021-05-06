
const navMenuIcon = document.querySelector('.Nav__menu');
const navMenuCloseIcon = document.querySelector('.Nav__sliding-menu__ul__close-icon');


// Toggles the sliding navigation bar on mobile
navMenuIcon.addEventListener('click', function(){
  document.querySelector('.Nav__sliding-menu').style.display = "block";
});

navMenuCloseIcon.addEventListener('click', function(){
  document.querySelector('.Nav__sliding-menu').style.display = "none";

})
