import { types } from "./data.js";

const advertForm = document.querySelector('.ad-form');
const titleInput = advertForm.querySelector('#title');
const priceInput = advertForm.querySelector('#price');
const timeinSelect = advertForm.querySelector('#timein');
const timeoutSelect = advertForm.querySelector('#timeout');
const typeSelect = advertForm.querySelector('#type');

typeSelect.textContent = '';
Object.keys(types).forEach((key)=>{
  const option = document.createElement('option');
  option.value = key;
  option.textContent = types[key];
  typeSelect.appendChild(option);
})

const checkPrice = (minprice, price) => {
  if (price < minprice) {
    priceInput.setCustomValidity(`Минимальная цена на данное жилище ${minprice} руб.`);
  } else if (priceInput.value > MAX_VALUE_PRICE) {
    priceInput.setCustomValidity(`Максимальная цена ${MAX_VALUE_PRICE} руб.`);
  } else {
    priceInput.setCustomValidity('');
  }
}


const MIN_LENGTH_TITLE = 30;
const MAX_LENGTH_TITLE = 100;
const MAX_VALUE_PRICE = 1_000_000;
const MIN_PRICE_BUNGALOW = 0;
const MIN_PRICE_FLAT = 1_000;
const MIN_PRICE_HOTEL = 3_000;
const MIN_PRICE_HOUSE = 5_000;
const MIN_PRICE_PALACE = 10_000;

const checkTypeHousing = () => {
  const priceValue = priceInput.value;
  switch (typeSelect.options[typeSelect.selectedIndex].value) {
    case 'Bungalow':
      checkPrice(MIN_PRICE_BUNGALOW,priceValue);
      break;
    case 'Flat':
      checkPrice(MIN_PRICE_FLAT, priceValue);
      break;
    case 'Hotel':
      checkPrice(MIN_PRICE_HOTEL, priceValue);
      break;
    case 'House':
      checkPrice(MIN_PRICE_HOUSE, priceValue);
      break;
    case 'Palace':
      checkPrice(MIN_PRICE_PALACE, priceValue);
      break;
  }
  priceInput.reportValidity();
}
checkTypeHousing();
titleInput.addEventListener('input', () => {
  const lenthTitle = titleInput.value.length;
  if (lenthTitle < MIN_LENGTH_TITLE) {
    titleInput.setCustomValidity(`Ещё ${MIN_LENGTH_TITLE-lenthTitle} симв.`);
  } else if (lenthTitle > MAX_LENGTH_TITLE) {
    titleInput.setCustomValidity(`Удалите лишние ${MAX_LENGTH_TITLE-lenthTitle} симв.`);
  } else {
    titleInput.setCustomValidity('');
  }
  titleInput.reportValidity();
});
const selectTime = (evt) => {
  const selectedTime = evt.target.value;
  if (evt.target.id === 'timein') {
    timeoutSelect.value = selectedTime;
  }
  else if (evt.target.id === 'timeout') {
    timeinSelect.value = selectedTime;
  }
}

timeinSelect.addEventListener('input', selectTime);
timeoutSelect.addEventListener('input', selectTime);
priceInput.addEventListener('input', checkTypeHousing);
typeSelect.addEventListener('input', checkTypeHousing);
advertForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
});
