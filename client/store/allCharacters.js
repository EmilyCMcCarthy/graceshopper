import axios from 'axios';

/* -----------------    ACTION TYPES ------------------ */

const ALL_CHARACTERS = 'ALL_CHARACTERS';

/* ------------   ACTION CREATORS     ------------------ */

export function getCharacters(characters) {
  const action = { type: ALL_CHARACTERS, characters };
  return action;
}

/* ------------       REDUCER     ------------------ */

export default function reducer (characters = [], action) {
  switch (action.type) {

    case ALL_CHARACTERS:
      return action.characters;
     default:
      return characters;
  }
}


/* ------------   THUNK CREATORS     ------------------ */

export const fetchCharacters = () => dispatch => {
  axios.get('/api/characters')
       .then(res => {
           dispatch(getCharacters(res.data));
       });

};

