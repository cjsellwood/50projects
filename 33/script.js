"use strict";
const addNoteButton = document.getElementById("add-button");
const noteContainer = document.getElementById("note-container");
let notes = [];
let id = 0;
window.addEventListener("load", () => {
    notes = loadNotes();
    id = Number(localStorage.getItem("id") || 0);
    notes.forEach((note) => {
        renderNote(note);
    });
});
const addNewNote = () => {
    const noteId = id;
    id++;
    localStorage.setItem("id", id.toString());
    const newNote = { id: noteId, text: "" };
    notes.push(newNote);
    renderNote(newNote);
};
const renderNote = (note) => {
    const noteElement = constructNote(note.text);
    noteContainer.append(noteElement);
    addNoteControls(noteElement, note);
};
const constructNote = (text) => {
    const noteElement = document.createElement("div");
    noteElement.classList.add("note");
    noteElement.innerHTML = `
    <div class="note-top">
      <button class="edit-button"><img src="./edit.svg" /></button>
      <button class="delete-button"><img src="./delete.svg" /></button>
    </div>
    <div class="note-bottom">
      <textarea class="note-input" ${text !== "" && "disabled"}>${text}</textarea>
    </div>
  `;
    return noteElement;
};
const addNoteControls = (noteElement, note) => {
    const editBtn = noteElement.querySelector(".edit-button");
    const noteInput = noteElement.querySelector(".note-input");
    const deleteBtn = noteElement.querySelector(".delete-button");
    editBtn.addEventListener("click", () => {
        noteInput.disabled = !noteInput.disabled;
    });
    deleteBtn.addEventListener("click", () => {
        noteElement.remove();
        notes = [...notes].filter((arrayNote) => arrayNote.id !== note.id);
        saveNotes();
    });
    noteInput.addEventListener("input", () => {
        const noteIndex = notes.findIndex((arrayNote) => arrayNote.id === note.id);
        notes[noteIndex] = Object.assign(Object.assign({}, notes[noteIndex]), { text: noteInput.value });
        saveNotes();
    });
};
const saveNotes = () => {
    localStorage.setItem("notes", JSON.stringify(notes));
};
const loadNotes = () => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
};
addNoteButton.addEventListener("click", addNewNote);
