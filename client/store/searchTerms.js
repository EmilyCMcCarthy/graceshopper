import axios from 'axios';

/* -----------------    ACTION TYPES ------------------ */

export const ADD_SEARCH_TERM = 'ADD_SEARCH_TERM';
export const REMOVE_SEARCH_TERM = 'REMOVE_SEARCH_TERM';


/* ------------   ACTION CREATORS     ------------------ */

export function addSearchTerm(category) {
  const action = { type: ADD_SEARCH_TERM, category };
  return action;
}

export function removeSearchTerm(category) {
    const action = { type: REMOVE_SEARCH_TERM, category};
    return action;
}
/* ------------       REDUCER     ------------------ */

export default function reducer (searchTerms = [], action) {
  switch (action.type) {

    case ADD_SEARCH_TERM:
      return [action.category, ...searchTerms];
    case REMOVE_SEARCH_TERM:
        return searchTerms.filter(searchTerm => searchTerm.id !== action.category.id);
     default:
      return searchTerms;
  }
}


/* ------------   THUNK CREATORS     ------------------ */


export const fetchCategoryForFilter = (categoryId) => dispatch => {
  axios.get(`/api/categories/${categoryId}`)
       .then(res => {
           dispatch(addSearchTerm(res.data));
       });

};
