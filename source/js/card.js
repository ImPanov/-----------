import { endNum } from "./utils.js";


const cardTemplate = document.querySelector('#card').content;
const generatePopup = (author) => {
  const popup = cardTemplate.querySelector('.popup').cloneNode(true);
  popup.querySelector('.popup__title').textContent = author.offer.title;
  popup.querySelector('.popup__text--address').textContent = author.location;
  popup.querySelector('.popup__text--price').textContent = author.offer.price + ' ₽/ночь';
  popup.querySelector('.popup__type').textContent = author.offer.type;
  popup.querySelector('.popup__text--capacity').textContent = endNum(author.offer.rooms, ['комната', 'комнаты', 'комнат']) + ' для ' + endNum(author.offer.guests, ['гостя', 'гостей', 'гостей']);
  popup.querySelector('.popup__text--time').textContent = `Заезд после ${author.offer.checkin}, выезд до ${author.offer.checkout}`;
  const featuresList = popup.querySelector('.popup__features');
  featuresList.textContent = '';
  author.offer.features.forEach((feature) => {
    const li = cardTemplate.querySelector('.popup__feature').cloneNode(true);
    li.className = 'popup__feature' + ' ' + 'popup__feature' + `--${feature}`;
    featuresList.appendChild(li);
  });
  popup.querySelector('.popup__description').textContent = author.offer.description;

  const photosList = popup.querySelector('.popup__photos');
  photosList.textContent = '';
  author.offer.photos.forEach((photo)=>{
    const img = cardTemplate.querySelector('.popup__photo').cloneNode(true);
    img.src = photo;
    photosList.appendChild(img);
  });
  popup.querySelector('.popup__avatar').src = author.avatar;
  return document.createDocumentFragment().appendChild(popup);
}

export { generatePopup }
