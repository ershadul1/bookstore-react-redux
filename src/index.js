import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import getRandomId from './helpers/getRandomId';
import rootReducer from './reducers/index';

const initialState = {
  allBooks: [
    { bookId: getRandomId(), bookTitle: 'The Da Vinci Code', bookCategory: 'Action' },
    { bookId: getRandomId(), bookTitle: 'The Diary Of a Young Girl', bookCategory: 'Biography' },
    { bookId: getRandomId(), bookTitle: 'Sapiens: A Brief History of Humankind', bookCategory: 'History' },
    { bookId: getRandomId(), bookTitle: 'It', bookCategory: 'Horror' },
    { bookId: getRandomId(), bookTitle: "Alice's Adventures in Wonderland", bookCategory: 'Kids' },
    { bookId: getRandomId(), bookTitle: 'Learning How to Learn', bookCategory: 'Learning' },
    { bookId: getRandomId(), bookTitle: 'Frankenstein', bookCategory: 'Sci-Fi' },
  ],
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <h1>Bookstore</h1>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
