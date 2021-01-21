import { connect } from 'react-redux';
import Book from '../components/Book';

const BookList = state => {
  const books = state.allBooks;
  return (
    <>
      <p>BookList</p>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
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
          />
        ))
        }
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = state => ({ allBooks: state.allBooks });

export default connect(mapStateToProps, null)(BookList);
