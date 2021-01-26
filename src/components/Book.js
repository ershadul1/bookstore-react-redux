import PropTypes from 'prop-types';

const Book = props => {
  const {
    bookId, bookTitle, bookCategory, remove,
  } = props;

  return (
    <>
      <div className="book-card">
        <div className="book-card-left">
          <div className="book-card-details">
            <div className="book-card-category">{bookCategory}</div>
            <div className="book-card-title">{bookTitle}</div>
            <div className="book-card-author">Author&apos;s Name</div>
            <div className="book-card-crud">
              <button className="comment-btn" type="button">Comment</button>
              <button className="delete-btn" type="button" onClick={() => remove(bookId)}>Delete</button>
              <button className="edit-btn" type="button">Edit</button>
            </div>
          </div>
          <div className="progress-container">
            <div className="progress-circle over50 p70">
              <div className="left-half-clipper">
                <div className="first50-bar" />
                <div className="value-bar" />
              </div>
            </div>
            <div>
              <div className="progress-percent">
                70%
              </div>
              <div className="completed">
                Completed
              </div>
            </div>
          </div>
        </div>
        <div className="book-card-right">
          <div className="current-chapter">CURRENT CHAPTER</div>
          <div className="chapter-number">Chapter 5</div>
          <button className="update-progress" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </>

  );
};

Book.propTypes = {
  bookId: PropTypes.number.isRequired,
  bookTitle: PropTypes.string.isRequired,
  bookCategory: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Book;
