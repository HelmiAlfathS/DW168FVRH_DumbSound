import {
  GET_TRANSACTION,
  CREATE_TRANSACTION,
  UPDATE_TRANSACTION,
} from './type';
import { API, setAuthToken } from '../../config/api';
import moment from 'moment';

export const getTransaction = () => {
  return {
    type: GET_TRANSACTION,
    payload: async () => {
      try {
        const { data } = await API.get('/transaction');
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

export const createTransaction = (file) => {
  return {
    type: CREATE_TRANSACTION,
    payload: async () => {
      try {
        // const userId = localStorage.getItem('id');

        const { UserId, attachement } = file;
        const startDate = moment();
        const dueDate = moment().add(1, 'M');

        const formData = new FormData();
        formData.append('attachement', attachement);
        formData.append('startDate', startDate);
        formData.append('dueDate', dueDate);
        formData.append('UserId', UserId);
        formData.append('status', 'pending');

        const config = {
          headers: {
            'content-type': 'multipart/form-data',
          },
        };
        const {
          data: { data },
        } = await API.post('/transaction', formData, config);
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

export const updateTransaction = (status, id) => {
  return {
    type: UPDATE_TRANSACTION,
    payload: async () => {
      try {
        // const { data } = await API.get(`/transaction/${id}`);
        const response = await API.put(`/transaction/${id}`, status);
        const { data } = await API.get('/transaction');
        // console.log(response.data);
        // console.log(response.data.data);
        return {
          data: data.data,
          transaksi: response.data,
        };
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) throw data.error;
        }
      }
    },
  };
};

export const oneTransaction = (id) => {
  return {
    type: GET_TRANSACTION,
    payload: async () => {
      try {
        const { data } = await API.get(`/transaction/${id}`);
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
