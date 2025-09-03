import 'css-star-rating/css/star-rating.css';
import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { getFeedbacks } from './api';

const ul = document.querySelector('.swiper-wrapper');
const nextBtn = document.querySelector('.swiper-button-next');
const prevBtn = document.querySelector('.swiper-button-prev');
const dots = document.querySelectorAll('.custom-pagination .dot');

function createStarRating(rating) {
  const roundedRating = Math.round(rating || 0);
  let starsHtml = '';

  for (let i = 1; i <= 5; i++) {
    const starColor = i <= roundedRating ? '#764191' : '#D9D9D9';
    starsHtml += `<span class="star" style="color: ${starColor};">★</span>`;
  }

  return `<div class="feedback-rating">${starsHtml}</div>`;
}

function renderFeedbacks(data) {
  return data
    .map(
      feedback => `
        <li class="swiper-slide">
          ${createStarRating(feedback.rating)}
          <p class="slide-feedback">"${feedback.descr}"</p>
          <p class="feedback-author">${feedback.name}</p>
        </li>
      `
    )
    .join('');
}

async function renderAllFeedbacks() {
  try {
    const response = await getFeedbacks();

    if (response && response.data && response.data.length > 0) {
      const feedbacks = response.data.slice(0, 10);
      const markup = renderFeedbacks(feedbacks);

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
        keyboard: { enabled: true },

        on: {
          slideChange: function () {
            prevBtn.classList.toggle(
              'swiper-button-disabled',
              this.isBeginning
            );
            nextBtn.classList.toggle('swiper-button-disabled', this.isEnd);

            dots.forEach(dot => dot.classList.remove('active'));
            if (this.activeIndex === 0) dots[0].classList.add('active');
            else if (this.activeIndex === 9) dots[2].classList.add('active');
            else dots[1].classList.add('active');
          },
        },

        breakpoints: {
          0: { slidesPerView: 1, loop: false },
          768: { slidesPerView: 1, loop: false },
          1440: { slidesPerView: 1, loop: false },
        },
      });

      prevBtn.classList.add('swiper-button-disabled');
      if (feedbacks.length <= 1) {
        nextBtn.classList.add('swiper-button-disabled');
      }

      dots.forEach(dot => {
        dot.addEventListener('click', () => {
          const index = dot.dataset.index;
          if (index === 'first') swiper.slideTo(0);
          if (index === 'middle') swiper.slideTo(1);
          if (index === 'last') swiper.slideTo(9);
        });
      });

      dots[0].classList.add('active');
    }
  } catch (error) {
    console.log(error.message);
  }
}

renderAllFeedbacks();
