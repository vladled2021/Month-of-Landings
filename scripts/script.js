const headerMenuBurger = document.querySelector('.header__menu-burger');
const headerImageContainer = document.querySelector('.header__image-container');
const headerNavigation = document.querySelector('.header__navigation');
const page = document.querySelector('.page');
const headerNavigationLink = document.querySelectorAll('.header__navigation-link');
const sendMailInputEmail = document.querySelector('.send-mail__input-email');
const sendMailButton = document.querySelector('.send-mail__button');

if (page.clientWidth > 350) {
  headerMenuBurger.addEventListener('click', function () {
    headerMenuBurger.classList.toggle('header__menu-burger_active');
    headerImageContainer.classList.toggle('header__image-container_hidden');
    headerNavigation.classList.toggle('header__navigation_active');
  })
}

else if (page.clientWidth < 350) {
  headerMenuBurger.addEventListener('click', function () {
    headerMenuBurger.classList.toggle('header__menu-burger_active');
    headerNavigation.classList.toggle('header__navigation_active');
  })
}

if (page.clientWidth < 800) {
headerNavigationLink.forEach(function(item) {
  item.addEventListener('click', function() {
    headerMenuBurger.classList.toggle('header__menu-burger_active');
    headerNavigation.classList.toggle('header__navigation_active');
    headerImageContainer.classList.toggle('header__image-container_hidden');
  })
})
}

if (page.clientWidth > 800 && headerMenuBurger.classList.contains('') ) {
  headerImageContainer.classList.remove('header__image-container_hidden');
}

sendMailInputEmail.addEventListener('click', function() {
 sendMailButton.classList.add('send-mail__button_active');
})

sendMailButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  sendMailButton.textContent = 'Спасибо!';
  let formData = {
    email: sendMailInputEmail.value,
  };
  console.log(formData);
})
