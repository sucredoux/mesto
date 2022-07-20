const profile = document.querySelector('.profile');
const container = document.querySelector('.container');
const editProfile = profile.querySelector('.profile__edit-button');
const addItem = profile.querySelector('.profile__add');

const popup = document.querySelector('.pop-up');
const popupEdit = document.querySelector('.pop-up_type_edit');
const popupAdd = document.querySelector('.pop-up_type_add');
const popupImage = document.querySelector('.pop-up_type_image');
const closePopupEdit = document.querySelector('.pop-up__close_type_edit');
const closePopupAdd = document.querySelector('.pop-up__close_type_add');
const closePopupImage = document.querySelector('.pop-up__close_type_image');

const personName = profile.querySelector('.profile__name');
const personDescr = profile.querySelector('.profile__description');
const formName = popupEdit.querySelector('.form__input_type_name');
const formDescr = popupEdit.querySelector('.form__input_type_description');

const formEdit = popupEdit.querySelector('.form_type_edit');
const formAdd = popupAdd.querySelector('.form_type_add');

const formPlace = popupAdd.querySelector('.form__input_type_place');
const formLink = popupAdd.querySelector('.form__input_type_image-link');

const fullImage = popupImage.querySelector('.pop-up__full-image');
const imageTitle = popupImage.querySelector('.pop-up__image-title');


const initialCards = [
  {
    name: 'Манарола',
    link: /*'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'*/ 'https://images.unsplash.com/photo-1592396355679-1e2a094e8bf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFuYXJvbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function openProfile() {
  popupEdit.classList.add('pop-up_opened');
  formName.value = personName.textContent;
  formDescr.value = personDescr.textContent;
}

function closeProfile() {
  popupEdit.classList.remove('pop-up_opened');
}


function submitChangeProfile(evt) {
  evt.preventDefault();
  personName.textContent = formName.value;
  personDescr.textContent = formDescr.value;
  closeForm();
}

function openPlace() {
  popupAdd.classList.add('pop-up_opened');
}

function closePlace() {
  popupAdd.classList.remove('pop-up_opened');
}

function changeImage() {
 for (let i=0; i<initialCards.length; i++) {
  const itemTemplate = document.querySelector('#card').content;
  const itemElement = itemTemplate.querySelector('.item').cloneNode(true);
  let itemName = itemElement.querySelector('.item__title');
  let itemLink = itemElement.querySelector('.item__image');
  itemName.textContent = initialCards[i].name;
  itemLink.src = initialCards[i].link;

  let likeButton = itemElement.querySelector('.item__button');
    likeButton.addEventListener('click', function(evt) {
    evt.target.classList.toggle('item__button_active');
  });

  const deleteItem = itemElement.querySelector('.item__delete');
  deleteItem.addEventListener('click', function() {
    let itemElement = deleteItem.closest('.item');
    itemElement.remove();
  });

  const fullImage = popupImage.querySelector('.pop-up__full-image');
  const imageTitle = popupImage.querySelector('.pop-up__image-title');
  itemLink.addEventListener('click', function(evt) {
    popupImage.classList.add('pop-up_opened');
    fullImage.value = itemLink.src;
    imageTitle.value = itemName.textContent;
  });


  closePopupImage.addEventListener('click', function(evt) {
    popupImage.classList.remove('pop-up_opened');
  });

  container.append(itemElement);

}

}

function submitAddPlace(evt) {
  evt.preventDefault();
  const itemTemplate = document.querySelector('#card').content;
  const itemElement = itemTemplate.querySelector('.item').cloneNode(true);
  let itemName = itemElement.querySelector('.item__title');
  let itemLink = itemElement.querySelector('.item__image');
  itemName.textContent = formPlace.value;
  itemLink.src = formLink.value;

  let likeButton = itemElement.querySelector('.item__button');
  likeButton.addEventListener('click', function(evt) {
  evt.target.classList.toggle('item__button_active');
  });

  const deleteItem = itemElement.querySelector('.item__delete');
  deleteItem.addEventListener('click', function() {
  let itemElement = deleteItem.closest('.item');
  itemElement.remove();
  });

  itemLink.addEventListener('click', function(evt) {
    popupImage.classList.add('pop-up_opened');
  });

  closePopupImage.addEventListener('click', function(evt) {
    popupImage.classList.remove('pop-up_opened');
  });

  container.prepend(itemElement);
  closePlace();
}



changeImage();

editProfile.addEventListener('click', openProfile);

addItem.addEventListener('click', openPlace);

closePopupEdit.addEventListener('click', closeProfile);

formEdit.addEventListener('submit', submitChangeProfile);

closePopupAdd.addEventListener('click', closePlace);

formAdd.addEventListener('submit', submitAddPlace);

/*formAdd.addEventListener('submit', submitChangeImage);
deleteItem.addEventListener('click', deleteImage);*/


/*const initialCards = [
  {
    name: 'Буэнос-Айрес',
    link: 'https://unsplash.com/photos/a1dpvJv45To'
  },
  {
    name: 'Мыс Доброй Надежды',
    link: 'https://unsplash.com/photos/FMgXX_VPM5k'
  },
  {
    name: 'Токио',
    link: 'https://unsplash.com/photos/7H9sdUFFykg'
  },
  {
    name: 'Антарктика',
    link: 'https://unsplash.com/photos/4ReskwNsh68'
  },
  {
    name: 'Дубровник',
    link: 'https://unsplash.com/photos/RvDc461s1EI'
  },
  {
    name: 'Манарола',
    link: 'https://images.unsplash.com/photo-1592396355679-1e2a094e8bf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80'
  },
];*/
