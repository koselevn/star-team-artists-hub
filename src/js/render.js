const artistsEl = document.querySelector("#artist-cards");

function createArtistsCartTemplate(artist) {
  const genreList =
    !artist.genres || artist.genres.length === 0
      ? '<li class="genre-chip">No genres available</li>'
      : artist.genres.map(genre => `<li class="genre-chip">${genre}</li>`).join('');

  return `
    <li class="artist-card" data-artist-id="${artist._id || 'unknown'}">
      <img class="artist-photo" src="${
        artist.strArtistThumb || 'https://via.placeholder.com/288x177'
      }" alt="${artist.strArtist || 'Artist photo'}" loading="lazy">
      <ul class="artist-genre-list">${genreList}</ul>
      <h4 class="artist-name">${artist.strArtist || 'Unknown Artist'}</h4>
      <p class="artist-info">${
        artist.strBiographyEN
          ? artist.strBiographyEN.slice(0, 100) + '...'
          : 'No biography available'
      }</p>
      <button class="artist-button learn-more-btn" data-artist-id="${
        artist._id || 'unknown'
      }">
        Learn More
        <svg class="artist-button-icon" width="24" height="24">
          <use href="./img/icons.svg#icon-arrow"></use>
        </svg>
      </button>
    </li>
  `;
}

export function renderArtists(artists, container = artistsEl) {
  if (!container) {
    console.error('Artist container not found');
    return;
  }
  if (!Array.isArray(artists) || !artists.length) {
    console.warn('No artists to render');
    return;
  }
  const markup = artists.map(artist => createArtistsCartTemplate(artist)).join('');
  container.insertAdjacentHTML('beforeend', markup);
}

export function showLoadMoreButton(button) {
  if (button) button.classList.remove('is-hidden');
}

export function hideLoadMoreButton(button) {
  if (button) button.classList.add('is-hidden');
}

export function showLoader(loader = document.querySelector('.preloader-box')) {
  if (loader) loader.classList.remove('is-hidden');
}

export function hideLoader(loader = document.querySelector('.preloader-box')) {
  if (loader) loader.classList.add('is-hidden');
}

function msToMinSec(ms) {
  if (!ms || isNaN(ms)) return '00:00';
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

export function createArtistInfo(artist) {
  const artistInfoEl = document.querySelector('.modal-artist-content');
  if (!artistInfoEl) {
    console.error('Modal content element not found');
    return '<p>Modal content element not found</p>';
  }
  if (!artist) {
    return '<p>No artist data found</p>';
  }

  const genreList =
    !artist.genres || artist.genres.length === 0
      ? '<li class="modal-artist-list-item">No genres available</li>'
      : artist.genres
          .map(genre => `<li class="modal-artist-list-item">${genre}</li>`)
          .join('');

  const years =
    artist.intFormedYear && artist.intFormedYear !== 'null'
      ? `${artist.intFormedYear} - ${
          !artist.intDiedYear || artist.intDiedYear === 'null'
            ? 'present'
            : artist.intDiedYear
        }`
      : 'Information missing';

  const albumList =
    !artist.albumsList || artist.albumsList.length === 0
      ? '<li class="album">No albums available</li>'
      : artist.albumsList
          .map(album => {
            const trackList =
              !album.tracks || album.tracks.length === 0
                ? '<div class="track">No tracks available</div>'
                : album.tracks
                    .map(
                      track => `
                      <div class="track">
                        <span class="track-name">${
                          track.strTrack || 'Unknown Track'
                        }</span>
                        <span class="track-time">${msToMinSec(
                          track.intDuration
                        )}</span>
                        <a class="track-link" href="${
                          track.movie && track.movie !== 'null'
                            ? track.movie
                            : '#'
                        }" target="_blank">
                          <svg class="icon" width="20.01" height="14.01">
                            <use href="./img/icons.svg#icon-youtube-btn"></use>
                          </svg>
                        </a>
                      </div>
                    `
                    )
                    .join('');

            return `
              <li class="album">
                <h2 class="album-title">${album.strAlbum || 'Unknown Album'}</h2>
                <div class="tracks-header">
                  <span>Track</span>
                  <span>Time</span>
                  <span>Link</span>
                </div>
                <div class="track-list">${trackList}</div>
              </li>
            `;
          })
          .join('');

  const markup = `
    <h2 class="modal-artist-name">${artist.strArtist || 'Unknown Artist'}</h2>
    <div class="modal-artist-about">
      <img
        class="modal-artist-photo"
        src="${artist.strArtistThumb || 'https://via.placeholder.com/288x177'}"
        alt="${artist.strArtist || 'Artist'}"
        loading="lazy"
      />
      <div>
        <div class="modal-artist-info">
          <div>
            <h3 class="modal-artist-title">Years active</h3>
            <p class="modal-artist-title-descr">${years}</p>
          </div>
          <div>
            <h3 class="modal-artist-title">Sex</h3>
            <p class="modal-artist-title-descr">${
              artist.strGender || 'Unknown'
            }</p>
          </div>
          <div>
            <h3 class="modal-artist-title">Members</h3>
            <p class="modal-artist-title-descr">${
              artist.intMembers || 'Unknown'
            }</p>
          </div>
          <div>
            <h3 class="modal-artist-title">Country</h3>
            <p class="modal-artist-title-descr">${
              artist.strCountry || 'Unknown'
            }</p>
          </div>
        </div>
        <h3 class="modal-artist-title">Biography</h3>
        <p class="modal-artist-title-descr">${
          artist.strBiographyEN || 'No biography available'
        }</p>
        <ul class="modal-artist-list">
          ${genreList}
        </ul>
      </div>
    </div>
    <h3 class="modal-artist-album-title">Albums</h3>
    <ul class="modal-artist-album">
      ${albumList}
    </ul>
  `;
  return markup;
}