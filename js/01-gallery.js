import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryList = document.querySelector('.gallery')

const photos = galleryItems.map((photo) => 
  `
  <li class="gallery__item" >
  <a class="gallery__link">
  <img class="gallery__image"
  src=${photo.preview} 
  data-source=${photo.original} 
  alt='${photo.description}'>
  </a>
  </li>
  `
).join("")
 
galleryList.insertAdjacentHTML("afterbegin", photos)

galleryList.addEventListener('click', (event) => {

  if (event.target.nodeName !== "IMG") {
    return
  }

  photos = galleryItems.map((photo) => {
    if (event.target.dataset.source !== photo.original) {
    return
  }
  const instance = basicLightbox.create(`
    <img src='${photo.original}' width="800" height="600">
`)
    instance.show()

    
  document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close()
    }
  })

  })


})


  
