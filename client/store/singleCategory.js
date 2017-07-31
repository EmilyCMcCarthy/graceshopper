import axios from 'axios';

/* -----------------    ACTION TYPES ------------------ */

const SINGLE_CATEGORY = 'SINGLE_CATEGORY';

/* ------------   ACTION CREATORS     ------------------ */

export function getSingleCategory(category) {
  const action = { type: SINGLE_CATEGORY, category };
  return action;
}

/* ------------       REDUCER     ------------------ */

export default function reducer (category = {}, action) {
  switch (action.type) {

    case SINGLE_CATEGORY:
      return action.category;
     default:
      return category;
  }
}


/* ------------   THUNK CREATORS     ------------------ */

export const fetchCategory = (categoryId) => dispatch => {
  axios.get(`/api/categories/${categoryId}`)
       .then(res => {
           dispatch(getSingleCategory(res.data));
       });

};
