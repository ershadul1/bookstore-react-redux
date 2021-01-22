import { connect } from 'react-redux';
import { REMOVE_BOOK } from '../actions';
import Book from '../components/Book';

const BookList = state => {
  const books = state.allBooks;
  const handleRemoveBook = bookId => {
    state.removeBook(bookId);
  };
  return (
    <>
      <p>BookList</p>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Delete book</th>
          </tr>
        </thead>
        <tbody>
          {
        books.map(item => (
          <Book
            key={item.bookId}
            bookId={item.bookId}
            bookTitle={item.bookTitle}
            bookCategory={item.bookCategory}
            remove={handleRemoveBook}
          />
        ))
        }
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = state => ({ allBooks: state.allBooks });

const mapDispatchToProps = dispatch => ({
  removeBook: bookId => dispatch(REMOVE_BOOK(bookId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
