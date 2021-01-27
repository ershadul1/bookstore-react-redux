import Navbar from './Navbar';
import BookList from '../containers/BookList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div>
    <Navbar />
    <div className="main-container">
      <BookList />
      <BooksForm />
    </div>
  </div>
);

export default App;
