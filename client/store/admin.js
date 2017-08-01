import axios from 'axios';

/* -----------------    ACTION TYPES ------------------ */

const ALL_USERS = 'ALL_USERS';
const SINGLE_USER = 'SINGLE_USER';
const DELETE_USER = 'DELETE_USER';
const ADD_CHARACTER = 'ADD_CHARACTER';
const UPDATE_CHARACTER = 'ADD_CHARACTER';
const DELETE_CHARACTER = 'DELETE_CHARACTER';
// const ONE_MOVIE = 'ONE_MOVIE';
// const ALL_MOVIES = 'ALL_MOVIES';
// const ALL_CHARACTERS_IN_MOVIE = 'ALL_CHARACTERS_IN_MOVIE';
// const ADD_MOVIE = 'ADD_MOVIE';
// const UPDATE_MOVIE = 'UPDATE_MOVIE';
// const DELETE_MOVIE = 'DELETE_MOVIE';

/* ------------   ACTION CREATORS     ------------------ */

export function getAllUsers(users) {
  const action = { type: ALL_USERS, users };
  return action;
}

export function getSingleUser(user) {
  const action = { type: SINGLE_USER, user };
  return action;
}

export function removeUser(id) {
  const action = { type: DELETE_USER, id };
  return action;
}

export function createCharacter(character) {
  const action = { type: ADD_CHARACTER, character};
  return action;
}

export function updateCharacter(character) {
  const action = { type: UPDATE_CHARACTER, character};
  return action;
}
export function removeCharacter(id) {
  const action = { type: DELETE_CHARACTER, id};
  return action;
}
// export function getSingleMovie(movie) {
//   const action = { type: ONE_MOVIE, movie};
//   return action;
// }

// export function getAllMovies(movies) {
//   const action = { type: ALL_MOVIES, movies};
//   return action;
// }

// export function createMovie(movie) {
//   const action = { type: ADD_MOVIE, movie};
//   return action;
// }

// export function updateMovie(movie) {
//   const action = { type: UPDATE_MOVIE, movie};
//   return action;
// }

// export function removeMovie(id) {
//   const action = { type: DELETE_MOVIE, id };
//   return action;
// }
/* ------------       REDUCER     ------------------ */

export default function reducer (users = [], action) {
  switch (action.type) {

    case ALL_USERS:
      return action.users;
    case DELETE_USER:
      return users.filter(user => user.id !== action.id);
     default:
      return users;
  }
}
export function singleUserReducer (user = {}, action) {
  switch (action.type) {

    case SINGLE_USER:
      return action.user;
     default:
      return user;
  }
}


export function charactersReducer (characters = [], action) {
  switch (action.type) {

    case ADD_CHARACTER:
      return [action.characrer, ...characters];

    case DELETE_CHARACTER:
      return characters.filter(character => character.id !== action.id);

    case UPDATE_CHARACTER:
      return characters.map(character => (
        action.character.id === character.id ? action.character : character
      ));

    default:
      return characters;
  }
}



/* ------------   THUNK CREATORS     ------------------ */

export const fetchUsers = () => dispatch => {
  axios.get('/api/users')
       .then(res => {
           dispatch(getAllUsers(res.data));
       });

};

export const fetchOneUser = (id) => dispatch => {
  axios.get(`/api/users/${id}`)
       .then(res => {
           dispatch(getSingleUser(res.data));
       });

};

export const deleteUser = id => dispatch => {
  dispatch(removeUser(id));
  axios.delete(`/api/users/${id}`)
       .catch(err => console.error(`Removing user: ${id} unsuccessful`, err));
};


export const addCharacter = character => dispatch => {
  axios.post('/api/characters', character)
       .then(res => dispatch(createCharacter(res.data)))
       .catch(err => console.error(`Creating character: ${character} unsuccessful`, err));
};

export const changeCharacter = (id, character) => dispatch => {
  axios.put(`/api/characters/${id}`, character)
       .then(res => dispatch(updateCharacter(res.data)))
       .catch(err => console.error(`Updating character: ${character} unsuccessful`, err));
};


export const deleteCharacter = id => dispatch => {
  dispatch(removeCharacter(id));
  axios.delete(`/api/characters/${id}`)
       .catch(err => console.error(`Removing user: ${id} unsuccessful`, err));
};
