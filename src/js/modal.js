import { createArtistInfo } from './render.js';
import { getArtistById } from './api.js';

const modalOverlay = document.querySelector('.modal-artist-overlay');
const modalContent = document.querySelector('.modal-artist-content');
const closeBtn = document.querySelector('.modal-artist-close-btn');

