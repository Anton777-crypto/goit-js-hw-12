// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// pixabay-api.js
import axios from 'axios';

const KEY = '46834340-89d4e2966326dbab6749c20a4';
const BAZ_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, perPage = 12) {
  try {
    const response = await axios.get(BAZ_URL, {
      params: {
        key: KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: perPage,
      },
    });
    console.log(response.data);

    if (response.data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'center',
        maxWidth: '250px ',
        color: 'rgb(255, 162, 0)',
      });
    }
    return response.data.hits;
  } catch (error) {
    console.log('Ошибка запроса:', error.response);
    iziToast.error({
      title: 'Помилка',
      message:
        'Sorry, there are no images matching your search query. Please try again!1',
      position: 'center',
      maxWidth: '250px ',
      color: 'rgb(255, 162, 0)',
    });
  }
}
