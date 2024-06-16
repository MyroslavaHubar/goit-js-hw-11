import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchGallery } from './js/pixabay-api';

const refs = {
  formElem: document.querySelector('.form'),
  inputElem: formElem.querySelector('.search-input'),
  btnElem: formElem.querySelector('.search-btn'),
};
console.log(inputElem);
refs.formElem.addEventListener('submit', requestImgGallery);

function requestImgGallery(e) {
  e.preventDefault();

  const valueInput = e.target.elements.searchField.value;
  console.log(valueInput);
}
