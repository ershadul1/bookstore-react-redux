import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CREATE_BOOK } from '../actions/index';
import getRandomId from '../helpers/getRandomId';

const BooksForm = props => {
  const [state, setState] = useState({
    bookTitle: null,
    bookCategory: 'Action',
  });

  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

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
      <p>BooksForm</p>
      <form>
        <input placeholder="Title" name="bookTitle" onChange={handleChange} />
        <select name="bookCategory" onChange={handleChange}>
          {categories.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button type="button" value="submit" onClick={handleSubmit}>
          Submit
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
