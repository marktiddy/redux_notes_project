//Import our store and actions
import store from "./store/store";
import { addNote, removeNote } from "./actions/actions";

//Let's check our store is working. store.getState() is a redux function to get our state from the store
// console.log("Before", store.getState());
// store.dispatch(addNote("one", "One content"));
// store.dispatch(addNote("two", "second content"));
// console.log("after", store.getState());

// ------ HTML references ------
let notesUList = document.getElementById("notes"); //this is the UL tag
let addNoteForm = document.getElementById("add-note"); //This is the form ID
let addNoteTitle = addNoteForm["title"]; //This is the title input box
let addNoteContent = addNoteForm["content"]; //this is the content input box

// ------ Redux ------
function deleteNote(index) {
  store.dispatch(removeNote(index));
  // console.log(index);
}

function renderNotes() {
  //We might not need this in somehting like React that automatically detects changes in the state
  //Assign the store to our notes property of the store
  let notes = store.getState().notes;

  //Clear our notes UL
  notesUList.innerHTML = "";
  //Map our notes object
  notes.map((note, index) => {
    console.log("running");
    let noteItem = `<li>
    <b>${note.title}</b>
    <button data-id="${index}">x</button>
    <br />
    <span>${note.content}</span>
    </li>`;
    notesUList.innerHTML += noteItem;
  });
  //Finally set the button listeners for all our x buttons
  setDeleteNoteButtonsEventListeners();
}

// ------ Event Listeners ------
addNoteForm.addEventListener("submit", e => {
  //Listening to the form. We start by preventing the default
  e.preventDefault();

  //Let's set up our dispatch for our addNote action
  let title = addNoteTitle.value;
  let content = addNoteContent.value;
  store.dispatch(addNote(title, content));

  // console.log('Title:', addNoteTitle.value, 'Content:', addNoteContent.value);
});

function setDeleteNoteButtonsEventListeners() {
  //Create an array of buttons that we're listening to
  let buttons = document.querySelectorAll("ul#notes li button");

  //Work out which button is listen'ed to
  for (let button of buttons) {
    button.addEventListener("click", () => {
      deleteNote(button.dataset.id);
    });
  }
}

// ------ Render the initial Notes ------
renderNotes();

//Subscribe to the store so we are notified of object changes. This will call the render notes
store.subscribe(() => {
  renderNotes();
});
