const CREATE_BOOK = book => ({
  type: 'CREATE_BOOK',
  book,
});

const REMOVE_BOOK = bookId => ({
  type: 'REMOVE_BOOK',
  bookId,
});

export { CREATE_BOOK, REMOVE_BOOK };
