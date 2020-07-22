import { GET_MUSIC_ALL, ADD_MUSIC, GET_ARTIST } from './type';
import { API, setAuthToken } from '../../config/api';

export const getMusic = () => {
  return {
    type: GET_MUSIC_ALL,
    payload: async () => {
      try {
        const { data } = await API.get('/song');
        return data;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) return data.error.message;
        }
      }
    },
  };
};

export const addSong = (file) => {
  return {
    type: ADD_MUSIC,
    payload: async () => {
      try {
        const { title, musicThumbnail, year, artistId, linkMusic } = file;

        const formData = new FormData();
        formData.append('title', title);
        formData.append('year', year);
        formData.append('musicThumbnail', musicThumbnail);

        formData.append('artistId', artistId);
        formData.append('linkMusic', linkMusic);

        const config = {
          headers: {
            'content-type': 'multipart/form-data',
          },
        };
        const {
          data: { data },
        } = await API.post('/song', formData, config);
        return data;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) throw data.error;
        }
      }
    },
  };
};

export const getArtist = () => {
  return {
    type: GET_ARTIST,
    payload: async () => {
      try {
        const { data: dataArtist } = await API.get('/artist');
        return dataArtist.data;
      } catch (error) {
        if (error.response) {
          const {
            data: { data: dataError },
            status,
          } = error.response;
          if (status > 399) throw dataError.error;
        }
      }
    },
  };
};
