import PropTypes from 'prop-types';
import categories from '../constants';

const CategoryFilter = ({ filter }) => (
  <select onChange={filter}>
    <option value="All">All</option>
    {categories.map(item => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </select>
);

CategoryFilter.propTypes = {
  filter: PropTypes.func.isRequired,
};
export default CategoryFilter;
