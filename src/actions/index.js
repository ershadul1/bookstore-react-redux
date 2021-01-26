import * as actions from './actionTypes';

const CREATE_BOOK = book => ({
  type: actions.CREATE_BOOK,
  book,
});

const REMOVE_BOOK = bookId => ({
  type: actions.REMOVE_BOOK,
  bookId,
});

const CHANGE_FILTER = category => ({
  type: actions.CHANGE_FILTER,
  category,
});

export { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER };
