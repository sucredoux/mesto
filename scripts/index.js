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
    link: 'https://images.unsplash.com/flagged/photo-1557479962-a7c7afdf86e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbmFyb2xhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Мыс Доброй Надежды',
    link: 'https://images.unsplash.com/photo-1645212763353-601f622d90ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FwZSUyMG9mJTIwZ29vZCUyMGhvcGUlMjBwZW5pbnN1bGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Антарктика',
    link: 'https://images.unsplash.com/photo-1551415923-31d2072bc248?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGFudGFydGljYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Камчатка',
    link: 'https://images.unsplash.com/photo-1612257460705-e0d24b7a4808?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8a2FtY2hhdGthfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Новая Зеландия',
    link: 'https://images.unsplash.com/photo-1593384754621-c058e0fc093c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmV3JTIwemVhbGFuZCUyMGJheXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Перу',
    link: 'https://images.unsplash.com/photo-1533049060588-ef73e35d5f8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnUlMjBvY2VhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  }
];

const openPopup = (popup) => {
  popup.classList.add('pop-up_opened');
};

const closePopup = (popup) => {
  popup.classList.remove('pop-up_opened');
};

const openProfile = () => {
  openPopup(popupEdit);
  formName.value = personName.textContent;
  formDescr.value = personDescr.textContent;
};

const submitChangeProfile = (evt) => {
  evt.preventDefault();
  personName.textContent = formName.value;
  personDescr.textContent = formDescr.value;
  closePopup(popupEdit);
};

const activeLike = (evt) =>{
  evt.target.classList.toggle('item__button_active')};

const deleteCard = (evt) => {
  evt.target.closest('.item').remove();
};

const openImage = (evt) => {
  openPopup(popupImage);
  fullImage.setAttribute('src', evt.target.src);
  imageTitle.textContent = evt.target.closest('.item').textContent;
}


function createCard() {
 for (let i=0; i<initialCards.length; i++) {
  const itemTemplate = document.querySelector('#card').content;
  const itemElement = itemTemplate.querySelector('.item').cloneNode(true);
  const itemName = itemElement.querySelector('.item__title');
  const itemLink = itemElement.querySelector('.item__image');
  itemName.textContent = initialCards[i].name;
  itemLink.src = initialCards[i].link;

  itemElement.querySelector('.item__button').addEventListener('click', activeLike);

  itemElement.querySelector('.item__delete').addEventListener('click', deleteCard);

  itemLink.addEventListener('click', openImage);

  container.append(itemElement);
}
  return container;
}

function submitAddPlace(evt) {
  evt.preventDefault();
  const itemTemplate = document.querySelector('#card').content;
  const itemElement = itemTemplate.querySelector('.item').cloneNode(true);
  const itemName = itemElement.querySelector('.item__title');
  const itemLink = itemElement.querySelector('.item__image');
  itemName.textContent = formPlace.value;
  itemLink.src = formLink.value;

  itemElement.querySelector('.item__button').addEventListener('click', activeLike);

  itemElement.querySelector('.item__delete').addEventListener('click', deleteCard);

  itemLink.addEventListener('click', openImage);

  container.prepend(itemElement);
  closePopup(popupAdd);
  return container;
}



createCard();

editProfile.addEventListener('click', openProfile);

closePopupEdit.addEventListener('click', (popup) =>
  closePopup(popupEdit));

formEdit.addEventListener('submit', submitChangeProfile);

addItem.addEventListener('click', (popup) =>
  openPopup(popupAdd));

closePopupAdd.addEventListener('click', (popup) =>
  closePopup(popupAdd));

formAdd.addEventListener('submit', submitAddPlace);

closePopupImage.addEventListener('click', (popup) =>
  closePopup(popupImage));


