import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { getFeedbacks } from './api';

const ul = document.querySelector('.swiper-wrapper');

function renderFeedbacks(data) {
  return data
    .map(
      feedback =>
        `<li class="swiper-slide">
        <h1>${feedback.descr}</h1>
        <p>${feedback.name}</p>
      </li>`
    )
    .join('');
}

async function renderAllFeedbacks() {
  try {
    const response = await getFeedbacks();
    console.log('API response:', response);
    if (response && response.data && response.data.length > 0) {
      const markup = renderFeedbacks(response.data);
      console.log('Generated markup:', markup);
      ul.insertAdjacentHTML('beforeend', markup);

      const swiper = new Swiper('.mySwiper', {
        modules: [Navigation, Autoplay, Pagination],

        slidesPerView: 1,
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          dynamicMainBullets: 3,
        },

        breakpoints: {
          320: {
            slidesPerView: 1,
            loop: false,
            spaceBetween: 35,
          },

          768: {
            slidesPerView: 1,

            loop: false,
          },

          1440: {
            slidesPerView: 1,
            loop: false,
          },
        },
      });
    }
  } catch (error) {
    console.log(error.message);
  }
}

renderAllFeedbacks();
