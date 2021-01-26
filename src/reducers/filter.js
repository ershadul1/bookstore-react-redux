import { CHANGE_FILTER } from '../actions/actionTypes';

const filter = (state = 'All', action) => {
  if (action.type === CHANGE_FILTER) {
    return `${action.category}`;
  }
  return state;
};

export default filter;
