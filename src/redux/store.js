// import { combineReducers } from 'redux';
import {
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import contactReducer from './contacts/contacts-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
