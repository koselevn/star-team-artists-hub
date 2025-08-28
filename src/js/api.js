import axios from 'axios';

export async function getArtists(
  page = 1,
  name = '',
  sortName = '',
  genre = ''
) {
  try {
    const baseurl = 'https://sound-wave.b.goit.study/api';
    const endPoint = '/artists';
    const url = baseurl + endPoint;

    const params = {
      limit: 8,
      page,
      name,
      sortName,
      genre,
    };

    const res = await axios.get(url, { params });
    return res.data;
  } catch (error) {
    console.error('Error fetching artists:', error);
  }
}
