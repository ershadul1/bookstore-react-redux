import * as actions from '../actions/actionTypes';

const books = (state = {}, action) => {
  switch (action.type) {
    case actions.CREATE_BOOK:
      return {
        ...state,
        allBooks: [...state.allBooks, action.book],
      };
    case actions.REMOVE_BOOK:
      return {
        ...state,
        allBooks: state.allBooks.filter(book => book.bookId !== action.bookId),
      };
    default:
      return state;
  }
};

export default books;
