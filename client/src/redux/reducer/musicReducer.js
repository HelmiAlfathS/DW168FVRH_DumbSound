import { GET_MUSIC_ALL, ADD_MUSIC, GET_ARTIST } from '../actions/type';
import { ActionType } from 'redux-promise-middleware';

const initialState = {
  music: null,
  loading: false,
  error: null,
  artist: [],
  song: [],
};

const GET_MUSIC_ALL_PENDING = `${GET_MUSIC_ALL}_${ActionType.Pending}`;
const GET_MUSIC_ALL_FULFILLED = `${GET_MUSIC_ALL}_${ActionType.Fulfilled}`;
const GET_MUSIC_ALL_REJECTED = `${GET_MUSIC_ALL}_${ActionType.Rejected}`;

const ADD_MUSIC_PENDING = `${ADD_MUSIC}_${ActionType.Pending}`;
const ADD_MUSIC_FULFILLED = `${ADD_MUSIC}_${ActionType.Fulfilled}`;
const ADD_MUSIC_REJECTED = `${ADD_MUSIC}_${ActionType.Rejected}`;

const GET_ARTIST_PENDING = `${GET_ARTIST}_${ActionType.Pending}`;
const GET_ARTIST_FULFILLED = `${GET_ARTIST}_${ActionType.Fulfilled}`;
const GET_ARTIST_REJECTED = `${GET_ARTIST}_${ActionType.Rejected}`;

export const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MUSIC_ALL_PENDING:
    case ADD_MUSIC_PENDING:
    case GET_ARTIST_PENDING:
      return {
        ...state,
        loading: true,
      };

    case GET_MUSIC_ALL_FULFILLED:
      return {
        ...state,
        music: action.payload,
        loading: false,
      };
    case ADD_MUSIC_FULFILLED:
      return {
        ...state,
        song: action.payload,
        loading: false,
      };
    case GET_ARTIST_FULFILLED:
      return {
        ...state,
        artist: action.payload,
        loading: false,
      };
    case GET_MUSIC_ALL_REJECTED:
    case ADD_MUSIC_REJECTED:
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
