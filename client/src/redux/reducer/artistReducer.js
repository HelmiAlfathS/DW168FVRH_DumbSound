import { ADD_ARTIST, GET_CATEGORY, GET_ARTIST } from '../actions/type';
import { ActionType } from 'redux-promise-middleware';

const initialState = {
  data: {},
  artist: null,
  loading: false,
  error: null,
};

const ADD_ARTIST_PENDING = `${ADD_ARTIST}_${ActionType.Pending}`;
const ADD_ARTIST_FULFILLED = `${ADD_ARTIST}_${ActionType.Fulfilled}`;
const ADD_ARTIST_REJECTED = `${ADD_ARTIST}_${ActionType.Rejected}`;

const GET_CATEGORY_PENDING = `${GET_CATEGORY}_${ActionType.Pending}`;
const GET_CATEGORY_FULFILLED = `${GET_CATEGORY}_${ActionType.Fulfilled}`;
const GET_CATEGORY_REJECTED = `${GET_CATEGORY}_${ActionType.Rejected}`;

const GET_ARTIST_PENDING = `${GET_ARTIST}_${ActionType.Pending}`;
const GET_ARTIST_FULFILLED = `${GET_ARTIST}_${ActionType.Fulfilled}`;
const GET_ARTIST_REJECTED = `${GET_ARTIST}_${ActionType.Rejected}`;

export const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTIST_PENDING:
    case GET_CATEGORY_PENDING:
    case GET_ARTIST_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ADD_ARTIST_FULFILLED:
    case GET_ARTIST_FULFILLED:
      return {
        ...state,
        artist: action.payload,
        loading: false,
      };
    case GET_CATEGORY_FULFILLED:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ADD_ARTIST_REJECTED:
    case GET_CATEGORY_REJECTED:
    case GET_ARTIST_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
