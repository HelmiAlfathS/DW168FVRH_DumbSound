import { REGISTER, LOGIN, LOGOUT, CLEARERROR } from '../actions/type';
import { ActionType } from 'redux-promise-middleware';

const initialState = {
  data: {},
  isLogin: false,
  isAuthenticated: false,
  loading: false,
  error: null,
  errorLogger: false,
};

const REGISTER_PENDING = `${REGISTER}_${ActionType.Pending}`;
const REGISTER_FULFILLED = `${REGISTER}_${ActionType.Fulfilled}`;
const REGISTER_REJECTED = `${REGISTER}_${ActionType.Rejected}`;

const LOGIN_PENDING = `${LOGIN}_${ActionType.Pending}`;
const LOGIN_FULFILLED = `${LOGIN}_${ActionType.Fulfilled}`;
const LOGIN_REJECTED = `${LOGIN}_${ActionType.Rejected}`;

const LOGOUT_PENDING = `${LOGOUT}_${ActionType.Pending}`;
const LOGOUT_FULFILLED = `${LOGOUT}_${ActionType.Fulfilled}`;
const LOGOUT_REJECTED = `${LOGOUT}_${ActionType.Rejected}`;

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_PENDING:
    case LOGIN_PENDING:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_FULFILLED:
    case LOGIN_FULFILLED:
      return {
        ...state,
        data: action.payload,
        isLogin: true,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_REJECTED:
    case LOGIN_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
        errorLogger: true,
      };
    // case REGISTER_FULFILLED:
    //   return {
    //     ...state,
    //     isLogin: true,
    //     isAuthenticated: true,
    //     loading: false,
    //     data: action.payload,
    //   };
    case CLEARERROR:
      return {
        ...state,
        errorLogger: false,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      localStorage.removeItem('role');
      return {
        ...state,
        loading: false,
        data: {},
      };
    default:
      return state;
  }
};
