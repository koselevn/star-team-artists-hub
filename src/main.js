import { createArtists } from './js/render.js';

const artists = {
  "_id": "65ada227af9f6d155db46908",
  "strArtistThumb": "https://ftp.goit.study/img/musicbox/artist/strArtistThumb_qvuxvs1347997318.jpg",
  "strArtist": "U2",
  "strLabel": "Island",
  "intFormedYear": "1976",
  "intDiedYear": "null",
  "genres": [
    "Rock",
    "Rock/Pop"
  ],
  "strGender": "Male",
  "intMembers": "4",
  "strCountry": "Dublin, Ireland",
  "strBiographyEN": "U2 are an Irish rock band from Dublin, formed in 1976. The group consists of Bono (lead vocals and rhythm guitar)...",
  "albumsList": [
    {
      "_id": "65ada232af9f6d1bc9a32189",
      "strAlbum": "Children of the Revolution",
      "intYearReleased": "2002",
      "tracks": [
        {
          "_id": "65ada232af9f6d155db46975",
          "strTrack": "Two Hearts Beat as One",
          "strArtist": "U2",
          "intDuration": "218400",
          "movie": "https://www.youtube.com/watch?v=8Iaz-wtKYpo or null"
        }
      ]
    }
  ]
}


createArtists(artists);

console.log(markup);
