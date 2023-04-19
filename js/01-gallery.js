import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryList = document.querySelector('gallery')

const photo = galleryItems.map((photo) => 
  `
  <li>
  <img url=${photo.preview} alt=${photo.description}>
  </li>
  `
).join("")
console.log(photo);
 
galleryList = 
