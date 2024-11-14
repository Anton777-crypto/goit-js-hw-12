import { fetchImages } from './js/pixabay-api';
import { renderImages, clearGallery } from './js/render-functions';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const loader = document.querySelector('.loader');
const loaderr = document.querySelector('.loaderr');

const loadMoreBtn = document.querySelector('#load-more-btn');

let page = 1;
let query = '';

form.addEventListener('submit', async event => {
  event.preventDefault();
  query = input.value.trim();
  if (!query) return;

  page = 1;
  clearGallery();
  loadMoreBtn.style.display = 'none'; // Hide the button initially

  loader.style.display = 'block';
  loaderr.style.display = 'block';

  try {
    const data = await fetchImages(query, page);
    renderImages(data.hits);
    if (data.totalHits > 15) {
      loadMoreBtn.style.display = 'block'; // Show the button if there are more images
    }
  } catch (error) {
    console.error('Error during search:', error);
  } finally {
    loader.style.display = 'none';
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  loader.style.display = 'block';
  try {
    const data = await fetchImages(query, page);
    renderImages(data.hits);
    if (page * 15 >= data.totalHits) {
      loadMoreBtn.style.display = 'none'; // Hide the button if no more results
      iziToast.info({
        title: 'End of results',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'center',
        maxWidth: '250px',
        color: 'rgb(255, 162, 0)',
      });
    }
  } catch (error) {
    console.error('Error during load more:', error);
  } finally {
    loader.style.display = 'none';
  }
});
