import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')

const createGalleryMarkup = (galleryItems) => {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `
    }).join('')
}

const galleryMarkup = createGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML('afterbegin', galleryMarkup);


const handlerEventOpenImage = (event) => {
    event.preventDefault();
    const imageElement = event.target.classList.contains('gallery__image');
    if (!imageElement) {
        return
    }

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`)
    instance.show()

    const modalOnEscapeCloser = event => {
        if (event.code === "Escape") {
            instance.close();
            gallery.removeEventListener('keydown', modalOnEscapeCloser);
        }
    }
    gallery.addEventListener('keydown', modalOnEscapeCloser) 
}
gallery.addEventListener('click', handlerEventOpenImage);




