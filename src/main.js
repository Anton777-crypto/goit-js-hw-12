import { fetchImages } from './js/pixabay-api';
import { renderImages, clearGallery } from './js/render-functions';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const loader = document.querySelector('.loader');
const loaderr = document.querySelector('.loaderr');
const down_loader = document.querySelector('.down_loader');
const loaderr_two = document.querySelector('.loaderr_two');
const loaderr_point_two = document.querySelector('.loaderr_point_two');
const loadMoreBtn = document.querySelector('#load-more-btn');

let page = 1;
let query = '';

form.addEventListener('submit', async event => {
  event.preventDefault();
  query = input.value.trim();
  if (!query) {
    iziToast.info({
      title: 'End of results',
      message: 'Введите значения!!!!!',
      position: 'center',
      maxWidth: '250px',
      color: 'rgb(255, 162, 0)',
    });
    return;
  }

  page = 1;
  clearGallery();
  loadMoreBtn.style.display = 'none';
  loader.style.display = 'flex';
  loaderr.style.display = 'flex';
  try {
    const data = await fetchImages(query, page);
    renderImages(data.hits);
    if (data.totalHits > 15) {
      loadMoreBtn.style.display = 'flex';
    }
  } catch (error) {
    console.error('Error during search:', error);
  } finally {
    loader.style.display = 'none';
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;

  loadMoreBtn.style.display = 'none';
  down_loader.style.display = 'flex';
  loaderr_two.style.display = 'flex';

  try {
    const data = await fetchImages(query, page);
    renderImages(data.hits);
    if (page * 15 >= data.totalHits) {
      loadMoreBtn.style.display = 'none';
      iziToast.info({
        title: 'End of results',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'center',
        maxWidth: '250px',
        color: 'rgb(255, 162, 0)',
      });
    } else {
      loadMoreBtn.style.display = 'flex';
    }
  } catch (error) {
    console.error('Error during load more:', error);
  } finally {
    down_loader.style.display = 'flex';
  }
});
