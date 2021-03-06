import { connect } from 'react-redux';
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BookList = state => {
  const filterBooks = () => {
    if (state.filter === 'All') {
      return state.allBooks;
    }
    return state.allBooks.filter(book => book.bookCategory === state.filter);
  };

  const handleRemoveBook = bookId => {
    state.removeBook(bookId);
  };

  const handleFilterChange = e => {
    state.changeFilter(e.target.value);
  };

  const books = filterBooks();

  return (
    <>
      <h3>Filter</h3>
      <CategoryFilter filter={handleFilterChange} />
      {books.map(item => (
        <Book
          key={item.bookId}
          bookId={item.bookId}
          bookTitle={item.bookTitle}
          bookCategory={item.bookCategory}
          remove={handleRemoveBook}
        />
      ))}
    </>
  );
};

const mapStateToProps = state => ({
  allBooks: state.allBooks,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: bookId => dispatch(REMOVE_BOOK(bookId)),
  changeFilter: category => dispatch(CHANGE_FILTER(category)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
