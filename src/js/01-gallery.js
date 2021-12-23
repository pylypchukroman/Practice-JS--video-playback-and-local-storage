// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

const galleryElem = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li style="list-style:none;">
    <a class="gallery__item
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
   </a>
   </li>
   `;
  })
    .join("");

galleryElem.insertAdjacentHTML("afterbegin", galleryMarkup);
const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});