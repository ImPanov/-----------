import './advertForm.js';
import { initMap, resetMarkers } from './map.js';
import { authors } from './data.js';

const form = document.querySelector('.ad-form')
form.classList.add('ad-form--diabled');
for (const element of form.children) {
  element.setAttribute('disabled', 'disabled');
}
const filters = document.querySelector('.map__filters')
filters.classList.add('map__filters--diabled');
for (const element of filters.children) {
  element.setAttribute('disabled', 'disabled');
}
initMap();
resetMarkers(authors);
form.classList.remove('ad-form--diabled');
for (const element of form.children) {
  element.setAttribute('disabled', '');
}
filters.classList.remove('map__filters--diabled');
for (const element of filters.children) {
  element.setAttribute('disabled', '');
}
