import { createArtistInfo } from './render.js';
import { getArtistById } from './api.js';

const modalOverlay = document.querySelector('.modal-artist-overlay');
const modalContent = document.querySelector('.modal-artist-content');
const closeBtn = document.querySelector('.modal-artist-close-btn');

function closeArtistModal() {
    modalOverlay.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    modalContent.innerHTML = '';
}

if (closeBtn) {
    closeBtn.addEventListener('click', closeArtistModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeArtistModal();
        }
    });
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeArtistModal();
    }
});

export async function openArtistModal(artistId) {
    if (!modalOverlay || !modalContent) return;

    try {
        document.body.classList.add('no-scroll');
        modalOverlay.classList.add('is-open');
        modalContent.innerHTML = '<span class="loader"></span>';

        const data = await getArtistById(artistId); // функция в api.js
        if (!data) throw new Error('Artist not found');

        createArtistInfo(data); // отрисовка разметки
    } catch (err) {
        modalContent.innerHTML = '<p>Error loading artist data.</p>';
        console.error(err);
    }
}
