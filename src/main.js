import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api';
import { renderImages, clearGallery } from './js/render-functions';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const loader = document.querySelector('.loader');
const loaderr = document.querySelector('.loaderr');
let page = 1;
const perPage = 12;

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = input.value.trim();
  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Sorry, You have not entered anything. Please check your entry.',
      position: 'center',
      maxWidth: '250px ',
      color: 'rgb(255, 162, 0)',
    });
    return;
  }

  page = 1;
  clearGallery();

  loader.style.display = 'flex';

  loaderr.style.display = 'block';
  loader.style.alignItems = 'center';
  loader.style.justifyContent = 'center';
  loader.style.flexDirection = 'column';
  try {
    const data = await fetchImages(query, page, perPage);
    console.log(data);
    renderImages(data);
  } catch (error) {
    console.log('Ошибка загрузки изображений:', error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to load images. Please try again later.',
      position: 'center',
      maxWidth: '250px ',
      color: 'rgb(255, 0, 0)',
    });
  } finally {
    loader.style.display = 'none';
  }
});
