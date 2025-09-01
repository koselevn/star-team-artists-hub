const artistsEl = document.querySelector(".artists-list");
const artistInfoEl = document.querySelector(".modal-artist-content");





export function createArtists(artists) {
    const markup = artists.map(artist => {
        const genreList = !artist.genres || artist.genres.length === 0
        ? '<li></li>'
        : artist.genres.map(genre => `<li class="artist-genre-item">${genre}</li>`).join('');

        return `
    <img class="artist-photo" src="${artist.strArtistThumb}" alt="artist photo">
    <ul class="artist-genre-list">
        ${genreList}
    </ul>
    <h4 class="artist-name">${artist.strArtist}</h4>
    <p class="artist-info">${artist.strBiographyEN}</p>
    <button class="artist-button">Learn More
        <svg class="artist-button-icon" width="24" height="24">
            <use href="../img/about-us-img/about-us.svg#icon-icon"></use>
        </svg>
    </button>
    `;
    }).join('');
    artistsEl.insertAdjacentHTML('beforeend', markup);    
}



function msToMinSec(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}




export function createArtistInfo(artist) {    
        const genreList = !artist.genres || artist.genres.length === 0
            ? '<li></li>'
            : artist.genres.map(genre => `<li class="artist-genre-item">${genre}</li>`).join('');

        const years = artist.intFormedYear && artist.intFormedYear !== "null"
            ? `${artist.intFormedYear} - ${(!artist.intDiedYear || artist.intDiedYear === "null") ? 'present' : artist.intDiedYear}`
            : 'information missing';

        
        const albumList = !artist.albumsList || artist.albumsList.length === 0
            ? '<li>There are no any album</li>'
            : artist.albumsList.map(album => {
                const trackList = !album.tracks || album.tracks.length === 0
                    ? '<li>There are no any track</li>'
                    : album.tracks.map(track => `
      <li class="track">
        <span class="track-name">${track.strTrack}</span>
        <span class="track-time">${msToMinSec(track.intDuration)}</span>
        <a class="track-link" href="${!track.movie || track.movie === "null" ? '#' : track.movie}">
          <svg class="icon" width="20.01" height="14.01">
            <use href="../img/icon-for-modal-artist.svg#icon-youtube-btn"></use>
          </svg>
        </a>
      </li>
    `).join('');
            
                return `
        <li class="album" >
        <h2 class="album-title">${album.strAlbum}</h2>
          <div class="tracks-header">
            <span>Track</span>
            <span>Time</span>
            <span>Link</span>
          </div>
          <ul class="track-list">
            ${trackList}
          </ul>
        </li>
        `;
            }).join('');


    const markup = `
<h2 class="modal-artist-name">${artist.strArtist}</h2>
      <div class="modal-artist-about">
        <img
          class="modal-artist-photo"
          src="${artist.strArtistThumb}"
          alt="men"
        />
        <div>
          <div class="modal-artist-info">
            <h3 class="modal-artist-title">Years active</h3>
            <p class="modal-artist-title-descr">${years}</p>
            <h3 class="modal-artist-title">Sex</h3>
            <p class="modal-artist-title-descr">${artist.strGender}</p>
            <h3 class="modal-artist-title">Members</h3>
            <p class="modal-artist-title-descr">${artist.intMembers}</p>
            <h3 class="modal-artist-title">Country</h3>
            <p class="modal-artist-title-descr">${artist.strCountry}</p>
          </div>
          <h3 class="modal-artist-title">Biography</h3>
          <p class="modal-artist-title-descr">
            ${artist.strBiographyEN}
          </p>
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
    artistInfoEl.innerHTML = markup;
}

