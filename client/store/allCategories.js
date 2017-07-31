import axios from 'axios';

/* -----------------    ACTION TYPES ------------------ */

const ALL_CATEGORIES = 'ALL_CATEGORIES';

/* ------------   ACTION CREATORS     ------------------ */

export function getCategories(categories) {
  const action = { type: ALL_CATEGORIES, categories };
  return action;
}

/* ------------       REDUCER     ------------------ */

export default function reducer (categories = [], action) {
  switch (action.type) {

    case ALL_CATEGORIES:
      return action.categories;
     default:
      return categories;
  }
}


/* ------------   THUNK CREATORS     ------------------ */

export const fetchCategories = () => dispatch => {
  axios.get('/api/categories')
       .then(res => {
           dispatch(getCategories(res.data));
       });

};
