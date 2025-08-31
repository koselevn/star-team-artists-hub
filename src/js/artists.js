// Функция рендера карточек артистов

// Находим список, куда будут добавляться карточки артистов
const artistsEl = document.querySelector(".artists-list");

// Экспортируем функцию для рендера карточек
export function createArtists(artists) {
  const markup = artists
    .map((artist) => {
      // Если жанров нет — выводим пустой элемент
      const genreList =
        !artist.genres || artist.genres.length === 0
          ? "<li></li>"
          : artist.genres
              .map((genre) => `<li class="artist-genre-item">${genre}</li>`)
              .join("");

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
    })
    .join("");

  // Добавляем разметку в контейнер
  artistsEl.insertAdjacentHTML("beforeend", markup);

  console.log(markup);
}
