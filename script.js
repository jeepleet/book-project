function Books(title, author, pages, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = id;
}

const myLibrary = [];

function addBookToMyLibrary(title, author, pages,) {
let uuid = crypto.randomUUID()
    const newBook = new Books(title, author, pages, uuid);
    myLibrary.push(newBook);
    
}
addBookToMyLibrary("harry puppter", "Jeppe", 250);
addBookToMyLibrary("lord of rungs", "Jeppe", 350);

console.log(myLibrary);


function displayBooks() {
const bookList = document.querySelector("#book-list");
    let i = 0;
    while (i < myLibrary.length) {
        let currentBook = myLibrary[i];
        let tr = document.createElement("tr");
        let tdTtile = document.createElement("td");
        let tdAuthor = document.createElement("td");
        let tdPages = document.createElement("td");

        tdTtile.textContent = currentBook.title;
        tdAuthor.textContent = currentBook.author;
        tdPages.textContent = currentBook.pages;
        tr.append(tdTtile, tdAuthor, tdPages);
        bookList.append(tr);
        i++;
    }
}
displayBooks();

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const submitBook = document.querySelector("#submitnewbook");
const nameOfBookField = document.querySelector("#bookname"); // Inside the form
const nameOfAuthorField = document.querySelector("#author"); // Inside the form
const amountOfPagesField = document.querySelector("#pages"); // Inside the form


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
   console.log(inputFieldBook, inputFieldAuthor, inputFieldPages);
    addBookToMyLibrary(inputFieldBook, inputFieldAuthor, inputFieldPages);
     });
    

