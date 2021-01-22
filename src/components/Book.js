import PropTypes from 'prop-types';

const Book = props => {
  const {
    bookId, bookTitle, bookCategory, remove,
  } = props;

  return (
    <tr>
      <td>{bookId}</td>
      <td>{bookTitle}</td>
      <td>{bookCategory}</td>
      <td><button type="button" onClick={() => remove(bookId)}>Delete</button></td>
    </tr>
  );
};

Book.propTypes = {
  bookId: PropTypes.number.isRequired,
  bookTitle: PropTypes.string.isRequired,
  bookCategory: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Book;
