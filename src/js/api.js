import axios from 'axios';

export async function getArtists(page, name, sortName,genge) {
  const baseurl = 'https://sound-wave.b.goit.study/api';
  const endPoint = '/artists';
  const url = baseurl + endPoint;

  const params = {
    limit: 8,
    page: page,
    name: name,
      sortName: sortName,
      genge: genge,
    
  };

  const res = await axios.get(url, { params });
  return res.data;
}
