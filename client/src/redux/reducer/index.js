import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { artistReducer } from './artistReducer';
import { musicReducer } from './musicReducer';
import { transactionReducer } from './transactionReducer';
const reducer = combineReducers({
  authReducer,
  artistReducer,
  musicReducer,
  transactionReducer,
});

export default reducer;
