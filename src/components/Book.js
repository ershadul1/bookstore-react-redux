import PropTypes from 'prop-types';

const Book = props => {
  const { bookId, bookTitle, bookCategory } = props;
  return (
    <tr>
      <td>{bookId}</td>
      <td>{bookTitle}</td>
      <td>{bookCategory}</td>
    </tr>
  );
};

Book.propTypes = {
  bookId: PropTypes.number.isRequired,
  bookTitle: PropTypes.string.isRequired,
  bookCategory: PropTypes.string.isRequired,
};

export default Book;
