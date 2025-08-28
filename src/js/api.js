import axios from 'axios';

const baseurl = 'https://sound-wave.b.goit.study/api';

export async function getArtists(
  page = 1,
  name = '',
  sortName = '',
  genre = ''
) {
  try {
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

export async function getArtist(id) {
    const endPoint = `/artist/${id}`;
    const url = baseurl + endPoint;
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        console.error('Error fetching artist:', error);
    }
}

export async function getFeedbacks(page = 1) { 
    const endPoint = '/feedbacks';
    const url = baseurl + endPoint;
    const params = {
        page,
    }
    try {
        const res = await axios.get(url, { params });
        return res.data;
    } catch (error) {
        console.error('Error fetching feedbacks:', error);
    }
}