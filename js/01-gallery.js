import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryList = document.querySelector('.gallery')

const photos = galleryItems.map((photo) => 
  `
  <li class="gallery__item" >
  <a class="gallery__link">
  <img class="gallery__image" src=${photo.preview} alt='${photo.description}'>
  </a>
  </li>
  `
).join("")
 
galleryList.insertAdjacentHTML("afterbegin", photos)
console.log(galleryList);

galleryList.