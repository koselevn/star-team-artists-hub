import { createArtistInfo } from './render.js';
import { getArtist } from './api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const modalOverlay = document.querySelector('.modal-artist-overlay');
  const modalContent = document.querySelector('.modal-artist-content');
  const closeBtn = document.querySelector('.modal-artist-close-btn');

  console.log('Initial modalOverlay:', modalOverlay); // Для отладки
  console.log('Initial modalContent:', modalContent); // Для отладки
  console.log('Initial closeBtn:', closeBtn); // Для отладки

  if (!modalOverlay || !modalContent) {
    console.error('Modal elements not initialized');
    return;
  }

  function closeArtistModal() {
    modalOverlay.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    if (modalContent) modalContent.innerHTML = '';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      console.log('Close button clicked');
      closeArtistModal();
    });
  }

  modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      console.log('Overlay clicked');
      closeArtistModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      console.log('Escape key pressed');
      closeArtistModal();
    }
  });
});

export async function openArtistModal(artistId) {
  console.log('Opening modal for artistId:', artistId);
  const modalOverlay = document.querySelector('.modal-artist-overlay');
  const modalContent = document.querySelector('.modal-artist-content');

  if (!modalOverlay || !modalContent) {
    console.error('Modal elements not found:', {
      modalOverlay: !!modalOverlay,
      modalContent: !!modalContent,
    });
    iziToast.error({
      title: 'Error',
      message: 'Modal window is not available.',
      position: 'topRight',
      timeout: 3000,
      titleColor: '#fff',
      backgroundColor: '#d63031',
      messageColor: '#fff',
    });
    return;
  }

  try {
    document.body.classList.add('no-scroll');
    modalOverlay.classList.add('is-open');
    console.log('Added is-open class to modal-overlay');
    modalContent.innerHTML = '<span class="loader"></span>';

    const data = await getArtist(artistId);
    console.log('Artist data:', data);
    if (!data) throw new Error('Artist not found');

    createArtistInfo(data);
    console.log('Rendered artist info'); // Для отладки
  } catch (err) {
    console.error('Error opening modal:', err);
    modalContent.innerHTML = '<p>Error loading artist data.</p>';
    iziToast.error({
      title: 'Error',
      message: 'Failed to load artist details.',
      position: 'topRight',
      timeout: 3000,
      titleColor: '#fff',
      backgroundColor: '#d63031',
      messageColor: '#fff',
    });
  }
}