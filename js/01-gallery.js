import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryList = document.querySelector('.gallery')

const photos = galleryItems.map((photo) => 
  `
  <li class="gallery__item" >
  <a class="gallery__link" href="large-image.jpg">
  <img class="gallery__image"
  src=${photo.preview} 
  data-source=${photo.original} 
  alt='${photo.description}'>
  </a>
  </li>
  `
).join("")
 
galleryList.insertAdjacentHTML("afterbegin", photos)

galleryList.addEventListener('click', onPreviewImage)


function onPreviewImage (event) {
  
  event.preventDefault()

  if (event.target.nodeName !== "IMG") {
    return
  }

  const originalPhotos = galleryItems.map((photo) => {
    
    if (event.target.dataset.source !== photo.original) {
    return
    }
    
    const instance = basicLightbox.create(
    `<img src='${photo.original}' width="800" height="600">`)
    instance.show()



  })
}

document.addEventListener('keydown', onEscapeKey)

function onEscapeKey(event) {
  const moduleImg = document.querySelector('.basicLightbox')
  if (event.code === 'Escape' && moduleImg) {
    moduleImg.remove(galleryList)
    console.log('KAWABANGA');
  }
}

// document.addEventListener('keydown', onEscapeKey) 

// function onEscapeKey(event) {
//   const moduleImg = document.querySelector('.basicLightbox')
//   if (event.code === 'Escape' && moduleImg) {
//  document.addEventListener('click', handleClick)
//   }
// }