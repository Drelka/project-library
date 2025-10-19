const myLibrary = [];

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const wasItRead = document.querySelector("#read");
const buttonAdd = document.querySelector("#button-add")
const library = document.querySelector(".library");

// Book constructor (a function) creating a Book object with it's properties like "author" and "title"

function Book(title, author, pages, wasItRead) {
    if(!new.target) {
        throw Error("Please use the \"new\" keyword with object constructors!");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.wasItRead = wasItRead;
}

// function adding book to the library by:
// 1. creating variables (const) and passing them values from the HTML input fields (given by the user)
// 2. creating new Book object (using the above seen object constructor), then passing it values from previously created variables
//    in form of functions arguments
// 3. pushing new Book object (named newBook) into the myLibrary array

function addBookToLibrary() {
    const bookTitle = title.value;
    const bookAuthor = author.value;
    const bookPages = pages.value;
    const bookReadStatus = wasItRead.value;

    const newBook = new Book(bookTitle, bookAuthor, bookPages, bookReadStatus);

    myLibrary.push(newBook);
}

// function "printing" the library on the screen:
// 1. clears the HTML code of a library DOM object
// 2. performs tasks on every element of the myLibrary array:
//   - creates new div element (gives it a "div" name) and adds a ".library" class to it's class list
//   - creates new paragraphs for all 4 book properties and sets its textContent to "key" + "value"
// 3. appends all 4 newly created paragraphs to the newly created div
// 4. appends new div to the library DOM element

function printBook() {
    library.innerHTML = "";

    myLibrary.forEach(book => {
        let div = document.createElement("div");
        div.classList.add("library");

        let titlePara = document.createElement("p");
        titlePara.textContent = `title ${book.title}`;
        let authorPara = document.createElement("p");
        authorPara.textContent = `author ${book.author}`;
        let pagesPara = document.createElement("p");
        pagesPara.textContent = `pages ${book.pages}`;
        let wasItReadPara = document.createElement("p");
        wasItReadPara.textContent = `wasItRead ${book.wasItRead}`;

        div.append(titlePara, authorPara, pagesPara, wasItReadPara);

        library.append(div);
    });
}

// button, with on click action that calls 2 above functions

buttonAdd.addEventListener("click", (e) => {
    e.preventDefault();
    
    addBookToLibrary();
    printBook();
});