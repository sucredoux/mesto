const profile = document.querySelector('.profile');
const containerCards = document.querySelector('.container');
const editProfileButton = profile.querySelector('.profile__edit-button');
const addItemButton = profile.querySelector('.profile__add');

const popupEdit = document.querySelector('.pop-up_type_edit');
const popupAdd = document.querySelector('.pop-up_type_add');
const popupImage = document.querySelector('.pop-up_type_image');
const closePopupEditButton = document.querySelector('.pop-up__close_type_edit');
const closePopupAddButton = document.querySelector('.pop-up__close_type_add');
const closePopupImageButton = document.querySelector('.pop-up__close_type_image');

const personName = profile.querySelector('.profile__name');
const personDescription = profile.querySelector('.profile__description');
const formEditName = popupEdit.querySelector('.form__input_type_name');
const formEditDescription = popupEdit.querySelector('.form__input_type_description');

const formEditProfile = popupEdit.querySelector('.form_type_edit');
const formAddImage = popupAdd.querySelector('.form_type_add');

const formAddPlace = popupAdd.querySelector('.form__input_type_place');
const formAddLink = popupAdd.querySelector('.form__input_type_image-link');
const fullImage = popupImage.querySelector('.pop-up__full-image');
const imageTitle = popupImage.querySelector('.pop-up__image-title');

const itemTemplate = document.querySelector('#card').content.querySelector('.item');


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

const displayProfileInfo = () => {
  formEditName.value = personName.textContent;
  formEditDescription.value = personDescription.textContent;
}

const changeProfile = () => {
  personName.textContent = formEditName.value;
  personDescription.textContent = formEditDescription.value;
}

const openProfile = () => {
  openPopup(popupEdit);
  displayProfileInfo();
};

const submitChangeProfile = (evt) => {
  evt.preventDefault();
  changeProfile();
  closePopup(popupEdit);
};

const clickLike = (evt) => {
  evt.target.classList.toggle('item__button_active')
};

const deleteCard = (evt) => {
  evt.target.closest('.item').remove();
};

const openImage = (evt) => {
  openPopup(popupImage);
  fullImage.setAttribute('src', evt.target.src);
  imageTitle.textContent = evt.target.closest('.item').textContent;
  fullImage.setAttribute('alt', `Фото ${imageTitle.textContent}`);
}

const createCard = (name, link) => {
  const itemElement = itemTemplate.cloneNode(true);
  const itemName = itemElement.querySelector('.item__title');
  const itemLink = itemElement.querySelector('.item__image');

  itemName.textContent = name;
  itemLink.src = link;
  itemLink.alt = `Фото ${itemName.textContent}`;
  itemElement.querySelector('.item__button').addEventListener('click', clickLike);
  itemElement.querySelector('.item__delete').addEventListener('click', deleteCard);
  itemLink.addEventListener('click', openImage);

  return itemElement;
}

const renderCard = (name, link, container) => {
  const itemCard = createCard(name, link);
  container.prepend(itemCard);
}

const createInitialCard = () => {
    initialCards.reverse();
    initialCards.forEach((item) => {
    renderCard(item.name, item.link, containerCards);
  });
    return containerCards;
  }

const submitAddPlace = (evt) => {
  evt.preventDefault();
  renderCard(formAddPlace.value, formAddLink.value, containerCards);
  closePopup(popupAdd);
  return containerCards;
}


createInitialCard();

editProfileButton.addEventListener('click', openProfile);

closePopupEditButton.addEventListener('click', (popup) =>
  closePopup(popupEdit));

formEditProfile.addEventListener('submit', submitChangeProfile);

addItemButton.addEventListener('click', (popup) =>
  openPopup(popupAdd));

closePopupAddButton.addEventListener('click', (popup) =>
  closePopup(popupAdd));

formAddImage.addEventListener('submit', submitAddPlace);

closePopupImageButton.addEventListener('click', (popup) =>
  closePopup(popupImage));
