const addBtn = document.getElementById("addNote");
const noteField = document.getElementById("noteInput");
let arrayNote = []; 

function createNote(note) {
    let div = document.createElement('div');
    div.className = "alert alert-primary";
    div.role = "alert";
    let btnClear = document.getElementById("btn_clear_node");
    let parent = document.getElementById("parent");
    div.innerHTML = note;
    parent.insertBefore(div, btnClear);
}

document.addEventListener("DOMContentLoaded", function (event) {
    if (localStorage.getItem('note') != null) {
        arrayNote = JSON.parse(localStorage.getItem('note'));
        for(let i = 0; i < arrayNote.length; i++){
            createNote(arrayNote[i]);
        }
    }
});

addBtn.addEventListener("click", () => {
    if (!noteField.value) return;
    arrayNote.push(noteField.value);
    localStorage.setItem('note', JSON.stringify(arrayNote));
    createNote(noteField.value);
    noteField.value = "";
});

btn_clear_node.addEventListener("click", () => {
    const noteContainer = document.querySelectorAll(".alert");
    for (let i = noteContainer.length; i--;) {
        noteContainer[i].remove();
    }
    noteField.value = "";
    localStorage.clear();
    arrayNote = [];
});