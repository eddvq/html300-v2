const userName = document.getElementById('name');
const email = document.getElementById('email');
const form = document.getElementById('feedback-form');
const errorLog = document.getElementById('error-log');
const errorLogTwo = document.getElementById('error-log-two');

form.addEventListener('submit', (e) =>{
  e.preventDefault();

  if (userName.value === ''  || userName.value == null) {
    errorLog.className = errorLog.className.replace(/(?:^|\s)d-none(?!\S)/g , ' d-block');
  } else {
    alert('Thank you for submitting this form! I was going to do a modal but ran out of time so copped out and used an accordion to meet the requirment!')
  }

});
