import axios from 'axios';


/* -----------------    ACTIONS     ------------------ */
const GET_REVIEW = 'GET_REVIEW';
const GET_ALL_REVIEWS = 'GET_ALL_REVIEWS';
const ADD_REVIEW = 'ADD_REVIEW';
const UPDATE_REVIEW = 'UPDATE_REVIEW';
const DELETE_REVIEW = 'DELETE_REVIEW';

/* ------------   ACTION CREATORS     ------------------ */

export function getAllReviews(reviews) {
  const action = { type: GET_ALL_REVIEWS, reviews };
  return action;
}
export function getReview(review) {
  const action = { type: GET_REVIEW, review };
  return action;
}

export function addReview (review) {
  const action = { type: ADD_REVIEW, review };
  return action;
}
export function updateReview(review) {
  const action = { type: UPDATE_REVIEW, review };
  return action;
}
export function deleteReview(id) {
  const action = { type: DELETE_REVIEW, id: id };
  return action;
}


/* ------------       REDUCERS     ------------------ */

const initialState = {
  review: {},
  reviews: []
};

export default function reducer(state = initialState, action) {
    let newState = Object.assign({}, state);
  switch (action.type) {

    case GET_ALL_REVIEWS:
      newState = action.reviews;
      break;
    case GET_REVIEW:
      newState = action.review;
      break;
    case ADD_REVIEW:
      newState = [...state, action.review];
      break;
    case DELETE_REVIEW:
     newState = state.filter(review => review.id !== action.id);
      break;
    default:
      return state;
  }
    return newState;
}

/* ------------       DISPATCHERS     ------------------ */

export const fetchAllReviews = () => dispatch => {
axios.get('/api/characters')
       .then(res => {
           dispatch(getAllReviews(res.data));
       });
};

export const getOneReview = (id) => dispatch => {
    axios.get(`/api/reviews/${id}`)
    .then(res => dispatch(getReview(res.data)))
    .catch(err => console.error(err));

}

// not sure
export const addNewReview = (review, characterId) => (dispatch) => {
      axios.post(`/api/characters/${characterId}/reviews`, review)
        .then(res => dispatch(addReview(res.data)))
        .catch(err => console.error('Adding review unsuccesful', err));
 };

export const removeReview = id => dispatch => {
  dispatch(deleteReview(id));
  axios.delete(`/api/reviews/${id}`)
       .catch(err => console.error(`Removing review unsuccessful`, err));
};


export const updateOneReview = (id, review) => dispatch => {
  axios.put(`/api/reviews/${id}`, review)
       .then(res => dispatch(updateReview(res.data)))
       .catch(err => console.error(`Updating review unsuccessful`, err));
};
