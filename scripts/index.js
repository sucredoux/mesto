let profile = document.querySelector('.profile');
let popup = document.querySelector('.pop-up');
let editProfile = profile.querySelector('.profile__edit-button');
let closePopup = popup.querySelector('.pop-up__close');
let personName = profile.querySelector('.profile__name');
let personDescr = profile.querySelector('.profile__description');
let formName = popup.querySelector('.form__input_type_name');
let formDescr = popup.querySelector('.form__input_type_description');
let formPopup = popup.querySelector('.form');

function openProfile() {
  popup.classList.add('pop-up_opened');
  formName.value = personName.textContent;
  formDescr.value = personDescr.textContent;
}

function closeProfile() {
  popup.classList.remove('pop-up_opened');
}

function submitChangeProfile(evt) {
  evt.preventDefault();
  personName.textContent = formName.value;
  personDescr.textContent = formDescr.value;
  closeProfile();
}

editProfile.addEventListener('click', openProfile);

closePopup.addEventListener('click', closeProfile);

formPopup.addEventListener('submit', submitChangeProfile);

