import { renderArtists, showLoadMoreButton, hideLoadMoreButton, showLoader, hideLoader } from './render.js';
import { getArtists } from './api.js';
import { openArtistModal } from './modal.js';      //<--------- будет мадалка
import iziToast from 'izitoast';

const LIMIT = 8;
let currentPage = 1;

const refs = {
    cardsContainer: document.querySelector('#artist-cards'),
    loadMoreBtn: document.querySelector('.btn-more'),
};

// Инициализация страницы
async function initArtists() {
    try {
        showLoader();
        const data = await getArtists(currentPage);
        if (!data || !Array.isArray(data.artists)) {
            throw new Error('No artists found in the response');
        }
        renderArtists(data.artists, refs.cardsContainer);

        if (data.totalArtists && currentPage * LIMIT < data.totalArtists) {
            showLoadMoreButton(refs.loadMoreBtn);
        } else {
            hideLoadMoreButton(refs.loadMoreBtn);
        }
    } catch (err) {
        console.error(err);
        iziToast.error({
            title: 'Error',
            message: 'Не удалось загрузить артистов.',
            position: 'topRight',
            timeout: 3000,
            titleColor: '#fff',
            backgroundColor: '#d63031',
            messageColor: '#fff',
        });
    } finally {
        hideLoader();
    }
}

// Обработка клика по кнопке "More"
async function onLoadMoreBtnClick(event) {
    event.target.blur();
    currentPage++;
    showLoader();

    try {
        const data = await getArtists(currentPage);
        if (!data || !Array.isArray(data.artists)) {
            throw new Error('No artists found in the response');
        }
        renderArtists(data.artists, refs.cardsContainer);

        const firstNewCard = refs.cardsContainer.lastElementChild;
        await new Promise(resolve => setTimeout(resolve, 100));
        const cardHeight = firstNewCard.getBoundingClientRect().height;
        window.scrollBy({ top: cardHeight * 1, behavior: 'smooth' });

        if (data.totalArtists && currentPage * LIMIT >= data.totalArtists) {
            iziToast.info({
                title: '',
                message: 'You see all Artists.',
                position: 'topRight',
                timeout: 4000,
                titleColor: '#fff',
                backgroundColor: '#764191',
                messageColor: '#fff',
            });
            hideLoadMoreButton(refs.loadMoreBtn);
            refs.loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);
        }
    } catch (err) {
        console.error(err);
        iziToast.error({
            title: 'Error',
            message: 'Houston we have a problem.',
            position: 'topRight',
            timeout: 3000,
            titleColor: '#fff',
            backgroundColor: '#d63031',
            messageColor: '#fff',
        });
    } finally {
        hideLoader();
    }
}

// Обработка клика по кнопке "Learn More"
function onArtistCardClick(event) {
    const learnMoreBtn = event.target.closest('.learn-more-btn');
    if (!learnMoreBtn) return;

    const artistId = learnMoreBtn.dataset.artistId;
    if (!artistId) return;

    openArtistModal(artistId);    //<--------------- Open Modal Window
}

document.addEventListener('DOMContentLoaded', initArtists);
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
refs.cardsContainer.addEventListener('click', onArtistCardClick);