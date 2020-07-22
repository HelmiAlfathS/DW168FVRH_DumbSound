import { ADD_ARTIST, GET_CATEGORY, GET_ARTIST } from './type';
import { API, setAuthToken } from '../../config/api';

export const addArtist = (body) => {
  return {
    type: ADD_ARTIST,
    payload: async () => {
      try {
        const {
          data: { data },
        } = await API.post('/artist', body);
        return data;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) return data.message;
        }
      }
    },
  };
};

export const getCategory = () => {
  return {
    type: GET_CATEGORY,
    payload: async () => {
      try {
        const { data: dataCate } = await API.get('/category');
        return dataCate.data;
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
