const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const full = document.querySelector('.full');

signUpBtnLink.addEventListener('click',() => {
	full.classList.toggle('active');

});

signInBtnLink.addEventListener('click',() => {
	full.classList.toggle('active');

});