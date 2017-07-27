import axios from 'axios';

/* -----------------    ACTION TYPES ------------------ */

const SINGLE_CHARACTER = 'SINGLE_CHARACTER';

/* ------------   ACTION CREATORS     ------------------ */

export function getSingleCharacter(character) {
  const action = { type: SINGLE_CHARACTER, character };
  return action;
}

/* ------------       REDUCER     ------------------ */

export default function reducer (character = {}, action) {
  switch (action.type) {

    case SINGLE_CHARACTER:
      return action.character;
     default:
      return character;
  }
}


/* ------------   THUNK CREATORS     ------------------ */

export const fetchCharacter = (characterId) => dispatch => {
  axios.get(`/api/characters/${characterId}`)
       .then(res => {
           dispatch(getSingleCharacter(res.data));
       });

};
