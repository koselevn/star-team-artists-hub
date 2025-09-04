const artistsEl = document.querySelector("#artist-cards");

function createArtistsCartTemplate(artist) {
    const genreList = !artist.genres || artist.genres.length === 0
        ? '<li></li>'
        : artist.genres.map(genre => `<li class="genre-chip">${genre}</li>`).join('');

    return `
        <li class="artist-card" data-artist-id="${artist._id}">
            <img class="artist-photo" src="${artist.strArtistThumb}" alt="artist photo">
            <ul class="artist-genre-list">
                ${genreList}
            </ul>
            <h4 class="artist-name">${artist.strArtist}</h4>
            <p class="artist-info">${artist.strBiographyEN}</p>
            <button class="artist-button learn-more-btn" data-artist-id="${artist._id}">Learn More
                <svg class="artist-button-icon" width="24" height="24">
                    <use href="../img/about-us-img/about-us.svg#icon-icon"></use>
                </svg>
            </button>
        </li>
    `;
}

export function renderArtists(artists, container = artistsEl) {
    if (!Array.isArray(artists) || !artists.length) return;
    const markup = artists.map(artist => createArtistsCartTemplate(artist)).join('');
    container.insertAdjacentHTML('beforeend', markup);
}

export function showLoadMoreButton(button) {
    button.classList.remove('is-hidden');
}

export function hideLoadMoreButton(button) {
    button.classList.add('is-hidden');
}

export function showLoader(loader = document.querySelector('.preloader-box')) {
    if (loader) loader.classList.remove('is-hidden');
}

export function hideLoader(loader = document.querySelector('.preloader-box')) {
    if (loader) loader.classList.add('is-hidden');
}




export function renderArtistModal(artist) {
  const modalContent = document.querySelector('.modal-artist-content');

  const genres = artist.genres?.length ? artist.genres.map(g => `<li class="modal-artist-list-item">${g}</li>`).join('') : '<li class="modal-artist-list-item">Unknown</li>';

  const albums = groupTracksByAlbum(artist.tracksList);
  const albumsMarkup = Object.keys(albums).map(albumName => {
    const tracks = albums[albumName]
      .slice(0, 15) 
      .map(track => `
        <li class="track">
          <span class="track-name">${track.strTrack}</span>
          <span class="track-time">${formatDuration(track.intDuration)}</span>
         ${track.movie ? `<a class="track-link" href="${track.movie}" target="_blank" rel="noopener noreferrer">
            <svg class="icon" width="20" height="14">
              <use href="img/icon-for-modal-artist.svg#icon-youtube-btn"></use>
            </svg>
          </a>` :`<span class="track-link-placeholder"></span>`}
        </li>
      `).join('');

    return `
      <li class="album">
        <h2 class="album-title">${albumName}</h2>
        <div class="tracks-header">
          <span>Track</span>
          <span>Time</span>
          <span>Link</span>
        </div>
        <ul class="track-list">
          ${tracks}
        </ul>
      </li>
    `;
  }).join('');

  const markup = `
    <h2 class="modal-artist-name">${artist.strArtist}</h2>
    <div class="modal-artist-about">
      <img class="modal-artist-photo" src="${artist.strArtistThumb}" alt="${artist.strArtist}" />
      <div>
        <div class="modal-artist-info">
        <div>
          <h3 class="modal-artist-title">Years active</h3>
          <p class="modal-artist-title-descr">${artist.intFormedYear || 'Unknown'} – ${artist.intDiedYear || 'present'}</p>
          </div>
          <div>
          <h3 class="modal-artist-title">Sex</h3>
          <p class="modal-artist-title-descr">${artist.strGender || 'Unknown'}</p>
          </div>
          <div>
          <h3 class="modal-artist-title">Members</h3>
          <p class="modal-artist-title-descr">${artist.intMembers || 'Unknown'}</p>
          </div>
          <div>
          <h3 class="modal-artist-title">Country</h3>
          <p class="modal-artist-title-descr">${artist.strCountry || 'Unknown'}</p>
          </div>
        </div>

        <h3 class="modal-artist-title">Biography</h3>
        <p class="modal-artist-title-descr">${artist.strBiographyEN || 'No biography available'}</p>
        
        <ul class="modal-artist-list">
          ${genres}
        </ul>
      </div>
    </div>

    <h3 class="modal-artist-album-title">Albums</h3>
    <ul class="modal-artist-album">
      ${albumsMarkup}
    </ul>
  `;

  modalContent.innerHTML = markup;
}

function groupTracksByAlbum(tracks) {
  return tracks.reduce((acc, track) => {
    if (!track.strAlbum) return acc;
    if (!acc[track.strAlbum]) acc[track.strAlbum] = [];
    acc[track.strAlbum].push(track);
    return acc;
  }, {});
}

function formatDuration(ms) {
  if (!ms || ms === "0") return "—";
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}




