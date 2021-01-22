const books = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return {
        ...state,
        allBooks: [...state.allBooks, action.book],
      };
    case 'REMOVE_BOOK':
      return {
        ...state,
        allBooks: state.allBooks.filter(book => book.bookId !== action.bookId),
      };
    default:
      return state;
  }
};

export default books;
