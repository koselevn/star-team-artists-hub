const artistsEl = document.querySelector(".artists-list");
// const artistInfoEl = document.querySelector(".artists-info");

export function createArtists(artists) {
    const markup = artists.map(artist => {
        const genreList = artist.genres && artist.genres.length > 0
            ? artist.genres.map(genre => `<li class="artist-genre-item">${genre}</li>`).join('')
            : '<li>Unknown</li>';

        return `
    <img class="artist-photo" src="${artist.strArtistThumb}" alt="artist photo">
    <ul class="artist-genre-list">
        ${genreList}
    </ul>
    <h4 class="artist-name">${artist.strArtist}</h4>
    <p class="artist-info">${artist.strBiographyEN}</p>
    <button class="artist-button">Learn More
        <svg class="artist-button-icon" width="24" height="24">
            <use href="/img/about-us-img/about-us.svg#icon-icon"></use>
        </svg>
    </button>
    `;
    }).join('');
    artistsEl.insertAdjacentHTML('beforeend', markup);
}

// export function createArtistInfo(artists) {
//     const markup = artists.map(artist => {
//         const genreList = artist.genres && artist.genres.length > 0
//             ? artist.genres.map(genre => `<li class="artist-genre-item">${genre}</li>`).join('')
//             : '<li>Unknown</li>';
//         return `
//     <h2 class="artist-info-name">${artist.strArtist}</h2>
//     <div class="artist-info-container">
//         <img class="artist-info-photo" src="${artist.strArtistThumb}" alt="artist photo">
//         <div class="artist-info-text-container">
//             <div class="artist-info-main-info">
//                 <div class="artist-info-text-block">
//                     <p class="artist-info-info">Years active</p>
//                     <p class="artist-info-data">${intFormedYear}-${intDiedYear}</p>
//                 </div>
//                 <div class="artist-info-text-block">
//                     <p class="artist-info-info">Sex</p>
//                     <p class="artist-info-data">${strGender}</p>
//                 </div>
//                 <div class="artist-info-text-block">
//                     <p class="artist-info-info">Members</p>
//                     <p class="artist-info-data">${intMembers}</p>
//                 </div>
//                 <div class="artist-info-text-block">
//                     <p class="artist-info-info">Country</p>
//                     <p class="artist-info-data">${strCountry}</p>
//                 </div>
//             </div> 

//             <div class="artist-info-biography"> 
//                 <h4 class="artist-info-biography-title">Biography</h4>
//                 <p class="artist-info-biography-text">${strBiographyEN}</p>
//             </div>
            
//             <ul class="artist-genre-list">
//             ${genreList}
//             </ul>
//         </div>       
//     </div>
//     <h3 class="artist-info-title">Albums</h3>
//     <ul>
//         <li>
//             <h4 class="artist-info-album-title">${artist.albumsList.strAlbum}</h4>
//             <ul>
//                 <li>
//                     <p></p>
//                     <p></p>
//                     <p></p>
//                 </li>
//                 <li>
//                     <p></p>
//                     <p></p>
//                     <p></p>
//                 </li>
//                 <li>
//                     <p></p>
//                     <p></p>
//                     <p></p>
//                 </li>            
//             </ul>
            
            
//         </li>
//     </ul>    
//     `;
//     }).join('');
//     artistInfoEl.insertAdjacentHTML('beforeend', markup);
// }
