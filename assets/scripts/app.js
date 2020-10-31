// Show menu function

function menu(toggleId, navId) {
  let toggle = document.getElementById(toggleId), 
  nav = document.getElementById(navId);

  // if(toggleId && navId) {
  //   toggle.addEventListener('click', () => {
  //     nav.classList.toggle('show');
  //   });
  // }

  toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
    toggle.classList.toggle('rotate');
  });
}

menu('nav-toggle', 'nav-menu');



// Switch Between Active Links

const navLinks = document.querySelectorAll('.nav__link');

// navLinks.forEach(n => n.addEventListener('click', () => {
//   n.classList.remove('active');
//   this.classList.add('active');
// })); 

function linkAction(){
  navLinks.forEach(n => n.classList.remove('active'));
  this.classList.add('active');

  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');

  const toggle = document.getElementById('nav-toggle');
  toggle.classList.remove('rotate');
}

navLinks.forEach(n => n.addEventListener('click', linkAction));


const mobileWidth = 768 + 'px';
const  header = document.querySelector('.nav');
if (document.documentElement.clientWidth > mobileWidth) {
  header.classList.remove('bd-grid');
}

// Scroll Reveal Animation

const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duraiton: 5000,
  reset: true
});

console.log(sr)

// sr.reveal('.section-title', {delay: 400})


// Home;

sr.reveal('.home__title', {});
sr.reveal('.button', {delay: 500});
sr.reveal('.home__img', {delay: 700});
sr.reveal('.home__social-icon', {interval: 200})

// About

sr.reveal('.about__subtitle', {delay: 400});
sr.reveal('.about__img', {delay: 600});
sr.reveal('.about p', {delay: 800});

// Personalisation

sr.reveal('.specialisation__text-heading', {});
sr.reveal('.specialisation__text', {delay: 200})
sr.reveal('.specialisation__data .fas', {delay: 400})
sr.reveal('.specialisation__data-heading', {delay: 600})
sr.reveal('.specialisation__list', {delay: 800});

//Work

sr.reveal('.work__img', {interval: 200});

//Contact

sr.reveal('.contact__input', {interval: 200})