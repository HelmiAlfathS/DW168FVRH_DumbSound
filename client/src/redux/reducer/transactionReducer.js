import {
  GET_TRANSACTION,
  CREATE_TRANSACTION,
  UPDATE_TRANSACTION,
  ONE_TRANSACTION,
} from '../actions/type';
import { ActionType } from 'redux-promise-middleware';

const initialState = {
  transaction: null,
  loading: false,
  error: null,
  payment: [],
  one: null,
};

export const GET_TRANSACTION_PENDING = `${GET_TRANSACTION}_${ActionType.Pending}`;
export const GET_TRANSACTION_FULFILLED = `${GET_TRANSACTION}_${ActionType.Fulfilled}`;
export const GET_TRANSACTION_REJECTED = `${GET_TRANSACTION}_${ActionType.Rejected}`;

export const ONE_TRANSACTION_PENDING = `${ONE_TRANSACTION}_${ActionType.Pending}`;
export const ONE_TRANSACTION_FULFILLED = `${ONE_TRANSACTION}_${ActionType.Fulfilled}`;
export const ONE_TRANSACTION_REJECTED = `${ONE_TRANSACTION}_${ActionType.Rejected}`;

export const CREATE_TRANSACTION_PENDING = `${CREATE_TRANSACTION}_${ActionType.Pending}`;
export const CREATE_TRANSACTION_FULFILLED = `${CREATE_TRANSACTION}_${ActionType.Fulfilled}`;
export const CREATE_TRANSACTION_REJECTED = `${CREATE_TRANSACTION}_${ActionType.Rejected}`;

export const UPDATE_TRANSACTION_PENDING = `${UPDATE_TRANSACTION}_${ActionType.Pending}`;
export const UPDATE_TRANSACTION_FULFILLED = `${UPDATE_TRANSACTION}_${ActionType.Fulfilled}`;
export const UPDATE_TRANSACTION_REJECTED = `${UPDATE_TRANSACTION}_${ActionType.Rejected}`;

export const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTION_PENDING:
    case CREATE_TRANSACTION_PENDING:
    case UPDATE_TRANSACTION_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_TRANSACTION_FULFILLED:
    case UPDATE_TRANSACTION_FULFILLED:
      return {
        ...state,
        transaction: action.payload,
        loading: false,
      };
    case CREATE_TRANSACTION_FULFILLED:
      return {
        ...state,
        payment: action.payload,
        loading: false,
      };
    case GET_TRANSACTION_REJECTED:
    case CREATE_TRANSACTION_REJECTED:
    case UPDATE_TRANSACTION_REJECTED:
    case ONE_TRANSACTION_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ONE_TRANSACTION_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ONE_TRANSACTION_FULFILLED:
      return {
        ...state,
        one: action.payload,
      };

    default:
      return state;
  }
};
