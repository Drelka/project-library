const myLibrary = [];

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const wasItRead = document.querySelector("#was-it-read");
const buttonAdd = document.querySelector("#button-add")
const library = document.querySelector("#library");

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

function addBookToLibrary() {
    const bookTitle = title.value;
    const bookAuthor = author.value;
    const bookPages = pages.value;
    const bookReadStatus = wasItRead.value;

    const newBook = new Book(bookTitle, bookAuthor, bookPages, bookReadStatus);

    myLibrary.push(newBook);
}

function printBook() {
    library.innerHTML = "";

    myLibrary.forEach(book => {
            // create div element (whole book)
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

        library.append("div");
    });
}

buttonAdd.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary();
    console.log(myLibrary);
    printBook();
})


