import{a as f,S as E,N as M,A as S,P as $,i as d}from"./assets/vendor-DPtseKYM.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const p="https://sound-wave.b.goit.study/api";async function g(t=1,e=null,o=null,r=null){try{const n=p+"/artists",a={limit:8,page:t,name:e,sortName:o,genre:r};return(await f.get(n,{params:a})).data}catch(s){console.error("Error fetching artists:",s)}}async function q(t){const e=`/artists/${t}`,o=p+e;try{return(await f.get(o)).data}catch(r){console.error("Error fetching artist:",r)}}async function B(t=1){const o=p+"/feedbacks",r={limit:10,page:t};try{return(await f.get(o,{params:r})).data}catch(s){console.error("Error fetching feedbacks:",s)}}const T=document.querySelector(".swiper-wrapper");document.querySelector(".swiper-button-next");document.querySelector(".swiper-button-prev");const c=document.querySelectorAll(".custom-pagination .dot");function P(t){const e=Math.round(t||0);let o="";for(let r=1;r<=5;r++){const s=r<=e?"#764191":"#D9D9D9";o+=`<span class="star" style="color: ${s};">★</span>`}return`<div class="feedback-rating">${o}</div>`}function x(t){return t.map(e=>`
        <li class="swiper-slide">
          ${P(e.rating)}
          <p class="slide-feedback">"${e.descr}"</p>
          <p class="feedback-author">${e.name}</p>
        </li>
      `).join("")}async function I(){try{const t=await B();if(t&&t.data&&t.data.length>0){const e=t.data.slice(0,10),o=x(e);T.insertAdjacentHTML("beforeend",o);const r=new E(".mySwiper",{modules:[M,S,$],slidesPerView:1,centeredSlides:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",dynamicBullets:!0,dynamicMainBullets:3},keyboard:{enabled:!0},on:{slideChange:function(){c.forEach(s=>s.classList.remove("active")),this.activeIndex===0?c[0].classList.add("active"):this.activeIndex===9?c[2].classList.add("active"):c[1].classList.add("active")}},breakpoints:{0:{slidesPerView:1,loop:!1},768:{slidesPerView:1,loop:!1},1440:{slidesPerView:1,loop:!1}}});c.forEach(s=>{s.addEventListener("click",()=>{const n=s.dataset.index;n==="first"&&r.slideTo(0),n==="middle"&&r.slideTo(1),n==="last"&&r.slideTo(9)})}),c[0].classList.add("active")}}catch(t){console.log(t.message)}}I();const O=document.querySelector("[data-menu-open]"),D=document.querySelector("[data-menu-close]"),h=document.querySelector(".mob-menu");O.addEventListener("click",()=>{h.classList.add("is-open"),document.body.style.overflow="hidden"});D.addEventListener("click",()=>{h.classList.remove("is-open"),document.body.style.overflow=""});document.querySelector(".logo").addEventListener("click",function(){window.location.href="index.html"});const N=document.querySelector(".page-header");window.addEventListener("scroll",()=>{const t=window.scrollY,o=Math.max(0,1-t/250);N.style.setProperty("--gradient-opacity",o)});document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(e){e.preventDefault();const o=this.getAttribute("href").substring(1),r=document.getElementById(o);r&&r.scrollIntoView({behavior:"smooth",block:"start"})})});document.querySelectorAll(".mob-menu-nav a").forEach(t=>{t.addEventListener("click",()=>{h.classList.remove("is-open"),document.body.style.overflow=""})});const j=document.querySelector("#artist-cards");function H(t){const e=!t.genres||t.genres.length===0?"<li></li>":t.genres.map(o=>`<li class="genre-chip">${o}</li>`).join("");return`
        <li class="artist-card" data-artist-id="${t._id}">
            <img class="artist-photo" src="${t.strArtistThumb}" alt="artist photo">
            <ul class="artist-genre-list">
                ${e}
            </ul>
            <h4 class="artist-name">${t.strArtist}</h4>
            <p class="artist-info">${t.strBiographyEN}</p>
            <button class="artist-button learn-more-btn" data-artist-id="${t._id}">Learn More
                <svg class="artist-button-icon" width="24" height="24">
                    <use href="../img/about-us-img/about-us.svg#icon-icon"></use>
                </svg>
            </button>
        </li>
    `}function y(t,e=j){if(!Array.isArray(t)||!t.length)return;const o=t.map(r=>H(r)).join("");e.insertAdjacentHTML("beforeend",o)}function R(t){t.classList.remove("is-hidden")}function v(t){t.classList.add("is-hidden")}function b(t=document.querySelector(".preloader-box")){t&&t.classList.remove("is-hidden")}function w(t=document.querySelector(".preloader-box")){t&&t.classList.add("is-hidden")}function F(t){var a;const e=document.querySelector(".modal-artist-content"),o=(a=t.genres)!=null&&a.length?t.genres.map(l=>`<li class="modal-artist-list-item">${l}</li>`).join(""):'<li class="modal-artist-list-item">Unknown</li>',r=Y(t.tracksList),s=Object.keys(r).map(l=>{const A=r[l].slice(0,15).map(m=>`
        <li class="track">
          <span class="track-name">${m.strTrack}</span>
          <span class="track-time">${U(m.intDuration)}</span>
         ${m.movie?`<a class="track-link" href="${m.movie}" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5933 7.20301C21.4794 6.78041 21.2568 6.39501 20.9477 6.08518C20.6386 5.77534 20.2537 5.55187 19.8313 5.43701C18.2653 5.00701 12.0003 5.00001 12.0003 5.00001C12.0003 5.00001 5.73633 4.99301 4.16933 5.40401C3.74725 5.52415 3.36315 5.75078 3.0539 6.06214C2.74464 6.3735 2.52062 6.75913 2.40333 7.18201C1.99033 8.74801 1.98633 11.996 1.98633 11.996C1.98633 11.996 1.98233 15.26 2.39233 16.81C2.62233 17.667 3.29733 18.344 4.15533 18.575C5.73733 19.005 11.9853 19.012 11.9853 19.012C11.9853 19.012 18.2503 19.019 19.8163 18.609C20.2388 18.4943 20.6241 18.2714 20.934 17.9622C21.2439 17.653 21.4677 17.2682 21.5833 16.846C21.9973 15.281 22.0003 12.034 22.0003 12.034C22.0003 12.034 22.0203 8.76901 21.5933 7.20301ZM9.99633 15.005L10.0013 9.00501L15.2083 12.01L9.99633 15.005Z" fill="white" />
            </svg>
          </a>`:'<span class="track-link-placeholder"></span>'}
        </li>
      `).join("");return`
      <li class="album">
        <h2 class="album-title">${l}</h2>
        <div class="tracks-header">
          <span>Track</span>
          <span>Time</span>
          <span>Link</span>
        </div>
        <ul class="track-list">
          ${A}
        </ul>
      </li>
    `}).join(""),n=`
    <h2 class="modal-artist-name">${t.strArtist}</h2>
    <div class="modal-artist-about">
      <img class="modal-artist-photo" src="${t.strArtistThumb}" alt="${t.strArtist}" />
      <div>
        <div class="modal-artist-info">
        <div>
          <h3 class="modal-artist-title">Years active</h3>
          <p class="modal-artist-title-descr">${t.intFormedYear||"Unknown"} – ${t.intDiedYear||"present"}</p>
          </div>
          <div>
          <h3 class="modal-artist-title">Sex</h3>
          <p class="modal-artist-title-descr">${t.strGender||"Unknown"}</p>
          </div>
          <div>
          <h3 class="modal-artist-title">Members</h3>
          <p class="modal-artist-title-descr">${t.intMembers||"Unknown"}</p>
          </div>
          <div>
          <h3 class="modal-artist-title">Country</h3>
          <p class="modal-artist-title-descr">${t.strCountry||"Unknown"}</p>
          </div>
        </div>

        <h3 class="modal-artist-title">Biography</h3>
        <p class="modal-artist-title-descr">${t.strBiographyEN||"No biography available"}</p>
        
        <ul class="modal-artist-list">
          ${o}
        </ul>
      </div>
    </div>

    <h3 class="modal-artist-album-title">Albums</h3>
    <ul class="modal-artist-album">
      ${s}
    </ul>
  `;e.innerHTML=n}function Y(t){return t.reduce((e,o)=>(o.strAlbum&&(e[o.strAlbum]||(e[o.strAlbum]=[]),e[o.strAlbum].push(o)),e),{})}function U(t){if(!t||t==="0")return"—";const e=Math.floor(t/1e3),o=Math.floor(e/60),r=e%60;return`${o}:${r.toString().padStart(2,"0")}`}document.addEventListener("DOMContentLoaded",()=>{var s;const t=document.querySelector(".modal-artist-overlay"),e=document.querySelector(".modal-artist-content"),o=document.querySelector(".modal-artist-close-btn");function r(){t.classList.remove("is-open"),document.body.classList.remove("no-scroll"),e.innerHTML=""}o.addEventListener("click",()=>{r()}),t.addEventListener("click",n=>{n.target===t&&r()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&r()}),(s=document.querySelector("#artist-cards"))==null||s.addEventListener("click",n=>{const a=n.target.closest(".learn-more-btn");if(a){const l=a.dataset.artistId;l?L(l):d.error({title:"Error",message:"Artist ID not found.",position:"topRight",timeout:3e3,titleColor:"#fff",backgroundColor:"#d63031",messageColor:"#fff"})}},{once:!0})});async function L(t){const e=document.querySelector(".modal-artist-overlay"),o=document.querySelector(".modal-artist-content");if(!e||!o){console.error("Modal elements not found:",{modalOverlay:!!e,modalContent:!!o}),d.error({title:"Error",message:"Modal window is not available.",position:"topRight",timeout:3e3,titleColor:"#fff",backgroundColor:"#d63031",messageColor:"#fff"});return}try{document.body.classList.add("no-scroll"),e.classList.add("is-open"),o.innerHTML='<span class="loader"></span>';const r=await q(t);if(!r)throw new Error("Artist not found");F(r)}catch(r){console.error("Error opening modal:",r),o.innerHTML="<p>Error loading artist data.</p>",d.error({title:"Error",message:"Failed to load artist details.",position:"topRight",timeout:3e3,titleColor:"#fff",backgroundColor:"#d63031",messageColor:"#fff"})}}const C=8;let u=1;const i={cardsContainer:document.querySelector("#artist-cards"),loadMoreBtn:document.querySelector(".btn-more")};async function V(){try{b();const t=await g(u);if(!t||!Array.isArray(t.artists))throw new Error("No artists found in the response");y(t.artists,i.cardsContainer),t.totalArtists&&u*C<t.totalArtists?R(i.loadMoreBtn):v(i.loadMoreBtn)}catch(t){console.error(t),d.error({title:"Error",message:"Не удалось загрузить артистов.",position:"topRight",timeout:3e3,titleColor:"#fff",backgroundColor:"#d63031",messageColor:"#fff"})}finally{w()}}async function k(t){t.target.blur(),u++,b();try{const e=await g(u);if(!e||!Array.isArray(e.artists))throw new Error("No artists found in the response");y(e.artists,i.cardsContainer);const o=i.cardsContainer.lastElementChild;await new Promise(s=>setTimeout(s,100));const r=o.getBoundingClientRect().height;window.scrollBy({top:r*1,behavior:"smooth"}),e.totalArtists&&u*C>=e.totalArtists&&(d.info({title:"",message:"You see all Artists.",position:"topRight",timeout:4e3,titleColor:"#fff",backgroundColor:"#764191",messageColor:"#fff"}),v(i.loadMoreBtn),i.loadMoreBtn.removeEventListener("click",k))}catch(e){console.error(e),d.error({title:"Error",message:"Houston we have a problem.",position:"topRight",timeout:3e3,titleColor:"#fff",backgroundColor:"#d63031",messageColor:"#fff"})}finally{w()}}function _(t){const e=t.target.closest(".learn-more-btn");if(!e)return;const o=e.dataset.artistId;o&&L(o)}document.addEventListener("DOMContentLoaded",V);i.loadMoreBtn.addEventListener("click",k);i.cardsContainer.addEventListener("click",_);
//# sourceMappingURL=index.js.map
