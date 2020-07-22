import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducer';
import promise from 'redux-promise-middleware';
import { persistStore, persistReducer } from 'redux-persist';
import createFilter from 'redux-persist-transform-filter';
import storage from 'redux-persist/lib/storage';

const saveSubsetFilter = createFilter('authReducer', ['isLogin', 'data']);

const persistConfig = {
  key: 'authReducer',
  storage: storage,
  whitelist: ['authReducer'],
  transforms: [saveSubsetFilter],
};

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistReducer(persistConfig, reducer),
  storeEnhancers(applyMiddleware(promise))
);
export const persistor = persistStore(store);
// export default store;

// const middleware = [promise, logger];
