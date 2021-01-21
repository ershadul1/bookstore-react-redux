const BooksForm = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  return (
    <>
      <p>BooksForm</p>
      <form>
        <input placeholder="Title" />
        <select>
          {categories.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <input type="submit" value="submit" />
      </form>
    </>
  );
};

export default BooksForm;
