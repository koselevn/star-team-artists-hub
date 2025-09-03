import{a as f,S as C,N as M,A as S,P as $,i as d}from"./assets/vendor-DPtseKYM.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const p="https://sound-wave.b.goit.study/api";async function h(t=1,e=null,o=null,s=null){try{const n=p+"/artists",a={limit:8,page:t,name:e,sortName:o,genre:s};return(await f.get(n,{params:a})).data}catch(r){console.error("Error fetching artists:",r)}}async function q(t){const e=`/artists/${t}`,o=p+e;try{return(await f.get(o)).data}catch(s){console.error("Error fetching artist:",s)}}async function B(t=1){const o=p+"/feedbacks",s={limit:10,page:t};try{return(await f.get(o,{params:s})).data}catch(r){console.error("Error fetching feedbacks:",r)}}const T=document.querySelector(".swiper-wrapper");document.querySelector(".swiper-button-next");document.querySelector(".swiper-button-prev");const c=document.querySelectorAll(".custom-pagination .dot");function P(t){const e=Math.round(t||0);let o="";for(let s=1;s<=5;s++){const r=s<=e?"#764191":"#D9D9D9";o+=`<span class="star" style="color: ${r};">★</span>`}return`<div class="feedback-rating">${o}</div>`}function x(t){return t.map(e=>`
        <li class="swiper-slide">
          ${P(e.rating)}
          <p class="slide-feedback">"${e.descr}"</p>
          <p class="feedback-author">${e.name}</p>
        </li>
      `).join("")}async function I(){try{const t=await B();if(t&&t.data&&t.data.length>0){const e=t.data.slice(0,10),o=x(e);T.insertAdjacentHTML("beforeend",o);const s=new C(".mySwiper",{modules:[M,S,$],slidesPerView:1,centeredSlides:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",dynamicBullets:!0,dynamicMainBullets:3},keyboard:{enabled:!0},on:{slideChange:function(){c.forEach(r=>r.classList.remove("active")),this.activeIndex===0?c[0].classList.add("active"):this.activeIndex===9?c[2].classList.add("active"):c[1].classList.add("active")}},breakpoints:{0:{slidesPerView:1,loop:!1},768:{slidesPerView:1,loop:!1},1440:{slidesPerView:1,loop:!1}}});c.forEach(r=>{r.addEventListener("click",()=>{const n=r.dataset.index;n==="first"&&s.slideTo(0),n==="middle"&&s.slideTo(1),n==="last"&&s.slideTo(9)})}),c[0].classList.add("active")}}catch(t){console.log(t.message)}}I();const O=document.querySelector("[data-menu-open]"),D=document.querySelector("[data-menu-close]"),g=document.querySelector(".mob-menu");O.addEventListener("click",()=>{g.classList.add("is-open"),document.body.style.overflow="hidden"});D.addEventListener("click",()=>{g.classList.remove("is-open"),document.body.style.overflow=""});document.querySelector(".logo").addEventListener("click",function(){window.location.href="index.html"});const R=document.querySelector(".page-header");window.addEventListener("scroll",()=>{const t=window.scrollY,o=Math.max(0,1-t/250);R.style.setProperty("--gradient-opacity",o)});document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(e){e.preventDefault();const o=this.getAttribute("href").substring(1),s=document.getElementById(o);s&&s.scrollIntoView({behavior:"smooth",block:"start"})})});document.querySelectorAll(".mob-menu-nav a").forEach(t=>{t.addEventListener("click",()=>{g.classList.remove("is-open"),document.body.style.overflow=""})});const j=document.querySelector("#artist-cards");function N(t){const e=!t.genres||t.genres.length===0?"<li></li>":t.genres.map(o=>`<li class="genre-chip">${o}</li>`).join("");return`
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
    `}function y(t,e=j){if(!Array.isArray(t)||!t.length)return;const o=t.map(s=>N(s)).join("");e.insertAdjacentHTML("beforeend",o)}function H(t){t.classList.remove("is-hidden")}function v(t){t.classList.add("is-hidden")}function b(t=document.querySelector(".preloader-box")){t&&t.classList.remove("is-hidden")}function w(t=document.querySelector(".preloader-box")){t&&t.classList.add("is-hidden")}function F(t){var a;const e=document.querySelector(".modal-artist-content"),o=(a=t.genres)!=null&&a.length?t.genres.map(l=>`<li class="modal-artist-list-item">${l}</li>`).join(""):'<li class="modal-artist-list-item">Unknown</li>',s=U(t.tracksList);console.log("sadfsda",Object.keys(s));const r=Object.keys(s).map(l=>{const E=s[l].slice(0,15).map(m=>`
        <li class="track">
          <span class="track-name">${m.strTrack}</span>
          <span class="track-time">${Y(m.intDuration)}</span>
          <a class="track-link" href="${m.movie||`https://www.youtube.com/results?search_query=${encodeURIComponent(m.strTrack+" "+t.strArtist)}" target="_blank`} ">
            <svg class="icon" width="20" height="14">
              <use href="/img/icon-for-modal-artist.svg#icon-youtube-btn"></use>
            </svg>
          </a>
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
          ${E}
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
      ${r}
    </ul>
  `;e.innerHTML=n}function U(t){return t.reduce((e,o)=>(o.strAlbum&&(e[o.strAlbum]||(e[o.strAlbum]=[]),e[o.strAlbum].push(o)),e),{})}function Y(t){if(!t||t==="0")return"—";const e=Math.floor(t/1e3),o=Math.floor(e/60),s=e%60;return`${o}:${s.toString().padStart(2,"0")}`}document.addEventListener("DOMContentLoaded",()=>{var r;const t=document.querySelector(".modal-artist-overlay"),e=document.querySelector(".modal-artist-content"),o=document.querySelector(".modal-artist-close-btn");function s(){t.classList.remove("is-open"),document.body.classList.remove("no-scroll"),e.innerHTML=""}o.addEventListener("click",()=>{console.log("Close button clicked"),s()}),t.addEventListener("click",n=>{n.target===t&&(console.log("Overlay clicked"),s())}),document.addEventListener("keydown",n=>{n.key==="Escape"&&(console.log("Escape key pressed"),s())}),(r=document.querySelector("#artist-cards"))==null||r.addEventListener("click",n=>{const a=n.target.closest(".learn-more-btn");if(a){const l=a.dataset.artistId;l?L(l):(console.error("Artist ID not found"),d.error({title:"Error",message:"Artist ID not found.",position:"topRight",timeout:3e3,titleColor:"#fff",backgroundColor:"#d63031",messageColor:"#fff"}))}},{once:!0})});async function L(t){console.log("Opening modal for artistId:",t);const e=document.querySelector(".modal-artist-overlay"),o=document.querySelector(".modal-artist-content");if(!e||!o){console.error("Modal elements not found:",{modalOverlay:!!e,modalContent:!!o}),d.error({title:"Error",message:"Modal window is not available.",position:"topRight",timeout:3e3,titleColor:"#fff",backgroundColor:"#d63031",messageColor:"#fff"});return}try{document.body.classList.add("no-scroll"),e.classList.add("is-open"),o.innerHTML='<span class="loader"></span>';const s=await q(t);if(!s)throw new Error("Artist not found");console.log(s),F(s),console.log("Rendered artist info")}catch(s){console.error("Error opening modal:",s),o.innerHTML="<p>Error loading artist data.</p>",d.error({title:"Error",message:"Failed to load artist details.",position:"topRight",timeout:3e3,titleColor:"#fff",backgroundColor:"#d63031",messageColor:"#fff"})}}const k=8;let u=1;const i={cardsContainer:document.querySelector("#artist-cards"),loadMoreBtn:document.querySelector(".btn-more")};async function V(){try{b();const t=await h(u);if(!t||!Array.isArray(t.artists))throw new Error("No artists found in the response");y(t.artists,i.cardsContainer),t.totalArtists&&u*k<t.totalArtists?H(i.loadMoreBtn):v(i.loadMoreBtn)}catch(t){console.error(t),d.error({title:"Error",message:"Не удалось загрузить артистов.",position:"topRight",timeout:3e3,titleColor:"#fff",backgroundColor:"#d63031",messageColor:"#fff"})}finally{w()}}async function A(t){t.target.blur(),u++,b();try{const e=await h(u);if(!e||!Array.isArray(e.artists))throw new Error("No artists found in the response");y(e.artists,i.cardsContainer);const o=i.cardsContainer.lastElementChild;await new Promise(r=>setTimeout(r,100));const s=o.getBoundingClientRect().height;window.scrollBy({top:s*1,behavior:"smooth"}),e.totalArtists&&u*k>=e.totalArtists&&(d.info({title:"",message:"You see all Artists.",position:"topRight",timeout:4e3,titleColor:"#fff",backgroundColor:"#764191",messageColor:"#fff"}),v(i.loadMoreBtn),i.loadMoreBtn.removeEventListener("click",A))}catch(e){console.error(e),d.error({title:"Error",message:"Houston we have a problem.",position:"topRight",timeout:3e3,titleColor:"#fff",backgroundColor:"#d63031",messageColor:"#fff"})}finally{w()}}function _(t){const e=t.target.closest(".learn-more-btn");if(!e)return;const o=e.dataset.artistId;o&&L(o)}document.addEventListener("DOMContentLoaded",V);i.loadMoreBtn.addEventListener("click",A);i.cardsContainer.addEventListener("click",_);
//# sourceMappingURL=index.js.map
