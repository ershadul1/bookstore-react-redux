import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CREATE_BOOK } from '../actions/index';
import getRandomId from '../helpers/getRandomId';
import categories from '../constants';

const BooksForm = props => {
  const [state, setState] = useState({
    bookTitle: null,
    bookCategory: 'Action',
  });

  const handleChange = e => {
    const { value } = e.target;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = () => {
    const newBook = {
      bookId: getRandomId(),
      ...state,
    };
    props.createBook(newBook);
  };
  return (
    <>
      <h2 className="add-new-book">ADD NEW BOOK</h2>
      <form className="add-book-form">
        <input className="input-book-title" placeholder="Book title" name="bookTitle" onChange={handleChange} />
        <select className="select-category" name="bookCategory" onChange={handleChange}>
          {categories.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button className="submit-btn" type="button" value="submit" onClick={handleSubmit}>
          ADD BOOK
        </button>
      </form>
    </>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(CREATE_BOOK(book)),
});

const mapStateToProps = state => ({ allBooks: state.allBooks });

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
