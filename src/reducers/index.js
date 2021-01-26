import { combineReducers } from 'redux';
import books from './books';
import filter from './filter';

const rootReducer = combineReducers({
  allBooks: books,
  filter,
});

export default rootReducer;
