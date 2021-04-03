import { combineReducers } from 'redux';
import types from './contacts-types';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const items = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD:
      if (state.find(({ name }) => name === action.payload.name)) {
        // if (state.find(({ contacts }) => contacts.items.name === action.payload.name)) {
        alert(`${action.payload.name} is already in contacts`);
        return state;
      }

      return [...state, action.payload];

    case types.DELETE:
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

const filter = (state = '', action) => {
  switch (action.type) {
    case types.FILTER:
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
