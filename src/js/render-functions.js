// render - functions.js;

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  animationSpeed: 300,
  loop: true,
});

export async function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(image => {
      return `
          <div class="gallery-item">
            <ul class='ul-gallery'>
              <li class='li-gallery'>
                <a href='${image.largeImageURL}' data-lightbox='gallery'>
                  <img class="images" src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
                </a>
                <div class="info">
                  <p class="info-info"><span class="info-p">Likes:</span> ${image.likes}</p>
                  <p class="info-info"><span class="info-p">Views:</span> ${image.views}</p>
                  <p class="info-info"><span class="info-p">Comments:</span> ${image.comments}</p>
                  <p class="info-info"><span class="info-p">Downloads:</span> ${image.downloads}</p>
                </div>
              </li>
            </ul>
          </div>`;
    })
    .join('');

  gallery.innerHTML += markup; // Use += to append images instead of replacing the content

  lightbox.refresh();

  // Scroll the page after images are rendered
  scrollToNextImages();
}

// Function to calculate the height of a gallery item and scroll
function scrollToNextImages() {
  // Get the height of the first gallery item
  const galleryItem = document.querySelector('.gallery-item');
  if (galleryItem) {
    const itemHeight = galleryItem.getBoundingClientRect().height;
    // Scroll the page down by twice the height of a gallery item
    window.scrollBy({
      top: itemHeight * 2, // Scroll by two times the height
      behavior: 'smooth', // Smooth scroll effect
    });
  }
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}
