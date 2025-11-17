function Books(title, author, pages, id, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = id;
    this.read = read;
}

const myLibrary = [];

function addBookToMyLibrary(title, author, pages, checkboxReadBook) {
let uuid = crypto.randomUUID()
    const newBook = new Books(title, author, pages, uuid, checkboxReadBook);
    myLibrary.push(newBook);
    
}

console.log(myLibrary);


function displayBooks() {
const bookList = document.querySelector("#book-list");
bookList.innerHTML = ""; // Clear bookList, so we dont get double displaying old and new book.
    let i = 0;
    while (i < myLibrary.length) {
        let currentBook = myLibrary[i];
        let tr = document.createElement("tr");
        let tdTtile = document.createElement("td");
        let tdAuthor = document.createElement("td");
        let tdPages = document.createElement("td");
        let tdButton = document.createElement("button");
        tdButton.classList.add("removebtn");
        tdButton.id = currentBook.id;
        let tdToggleButton = currentBook.read;
        tdToggleButton = document.createElement("button");
        tdToggleButton.classList.add("togglebtn");
        tdToggleButton.id = currentBook.id;
        if (currentBook.read === true) {
        tdToggleButton.textContent = "Has read";
        } else {
        tdToggleButton.textContent = "Has not read yet";
        }

        tdTtile.textContent = currentBook.title;
        tdAuthor.textContent = currentBook.author;
        tdPages.textContent = currentBook.pages;
        tdButton.textContent = "Remove Book";
        tr.append(tdTtile, tdAuthor, tdPages, tdButton, tdToggleButton);
        bookList.append(tr);
        i++;
    }}


const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const submitBook = document.querySelector("#submitnewbook");
const nameOfBookField = document.querySelector("#bookname"); // Inside the form
const nameOfAuthorField = document.querySelector("#author"); // Inside the form
const amountOfPagesField = document.querySelector("#pages"); // Inside the form
const bookCheckboxRead = document.querySelector("#checkbox");
const removeBook = document.querySelector("#book-list");
const removeAllBooks = document.querySelector(".removeall");
const formErrorOnSubmitBook = document.querySelector("#formerror");



showButton.addEventListener("click" , () => { 
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

submitBook.addEventListener("submit", () => {
   event.preventDefault();

    let inputFieldBook = nameOfBookField.value;
   let inputFieldAuthor = nameOfAuthorField.value;
   let inputFieldPages = amountOfPagesField.value;
   let checkboxReadBook = bookCheckboxRead.checked;

   if (inputFieldAuthor === "" || inputFieldBook === "" || inputFieldPages === "") {
    formErrorOnSubmitBook.textContent = "All fields are required to submit book";
    formErrorOnSubmitBook.style.color = "red";
    formErrorOnSubmitBook.style.fontSize = "20px";

} else {
       addBookToMyLibrary(inputFieldBook, inputFieldAuthor, inputFieldPages, checkboxReadBook);
    displayBooks();
    console.log(checkboxReadBook, inputFieldAuthor, inputFieldBook, inputFieldPages)
}
});

removeBook.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    if (!button) return;
    if (button.classList.contains("removebtn")) {
    const bookId = button.id;
    let buttonToRemove = myLibrary.findIndex(book => book.id === bookId);
    myLibrary.splice(buttonToRemove,1);
    console.log(myLibrary)
    displayBooks();

    } else if
        (button.classList.contains("togglebtn")); // < Needs an ID
        const bookId = button.id;
        let buttonToggle = myLibrary.findIndex(book => book.id === bookId);
        const toggleButton = myLibrary[buttonToggle];
        toggleButton.toggleRead();
        displayBooks();


    });


Books.prototype.toggleRead = function() {
    this.read = !this.read;
    }


removeAllBooks.addEventListener("click", () => {
    removeBook.innerHTML = "";
    myLibrary.length = 0;

    console.log(myLibrary)
    
});
   

    