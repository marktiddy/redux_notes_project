import { ADD_NOTE, REMOVE_NOTE } from "../actions/actions";

const initialState = {
  //set initial state
  secondSet: [],
  notes: []
};

//Root reducer creation
//Our reducer has two arguments, previous state and our action
function rootReducer(state = initialState, action) {
  //Switch statement to pick up what we're being asked to do
  switch (action.type) {
    //Add Note is our variable allowing us to change name
    case ADD_NOTE:
      return {
        ...state, //This means we only update the notes property of our state and return the rest as is, otherwise we'd only have states in our store after this!
        notes: [
          ...state.notes,
          {
            title: action.title,
            content: action.content
          }
        ]
      };
    case REMOVE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note, index) => index != action.id)
      };

    //If our criteria isn't matched we return the state
    default:
      return state;
  }
}

export default rootReducer;
