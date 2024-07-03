const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

// Function to show notes from localStorage
function showNotes() {
    let savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        notesContainer.innerHTML = savedNotes;
    }
}

// Show notes when the page loads
showNotes();

// Function to update localStorage
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Event listener for creating a new note
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage(); // Update localStorage after adding a new note
});

// Event listener for deleting notes and updating storage
notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage(); // Update localStorage after deleting a note
    }
});

// Event listener for editing notes and updating storage
notesContainer.addEventListener("input", function(e) {
    if (e.target.classList.contains("input-box")) {
        updateStorage(); // Update localStorage after editing a note
    }
});

// Prevent Enter key from creating a div instead of a line break
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
