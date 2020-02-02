//An add action
//Const lets us easily change name later
export const ADD_NOTE = "ADD_NOTE";

//This function creates the JavaScript object needed for redux actions
export function addNote(title, content) {
  return { type: ADD_NOTE, title: title, content: content };
}

//Add our delete action
export const REMOVE_NOTE = "REMOVE_NOTE";

export function removeNote(id) {
  return { type: REMOVE_NOTE, id: id };
}
