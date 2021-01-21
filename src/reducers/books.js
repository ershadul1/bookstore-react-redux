const books = (state = {}, action) => {
  const updated = { ...state };
  switch (action.type) {
    case 'CREATE_BOOK':
      break;
    case 'REMOVE_BOOK':
      break;
    default:
      break;
  }
  return updated;
};

export default books;
