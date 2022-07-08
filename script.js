let profile = document.querySelector('.profile');

let popup = document.querySelector('.pop-up');
let editProfile = profile.querySelector('.profile__edit-button');
let closePopup = popup.querySelector('.pop-up__close');
let popupField = popup.querySelector('.pop-up__field');
let submitButton = popup.querySelector('.pop-up__submit-button');
let personName = profile.querySelector('.profile__name');
let personDescr = profile.querySelector('.profile__description');
  console.log(personName);
  console.log(personDescr);


editProfile.addEventListener('click', function () {
  popup.classList.add('pop-up_opened');
}
);
closePopup.addEventListener('click', function() {
  popup.classList.remove('pop-up_opened');
})

function submitChangeProfile(evt) {
  evt.preventDefault();
  let formName = popup.querySelector('.form__input_type_name').value;
  let formDescr = popup.querySelector('.form__input_type_description').value;
  personName.textContent = formName;
  personDescr.textContent = formDescr;
  popup.classList.remove('pop-up_opened');
}


let formPopup = popup.querySelector('.form');
formPopup.addEventListener('submit', submitChangeProfile);

