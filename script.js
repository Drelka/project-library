const myLibrary = [];

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const wasItRead = document.querySelector("#was-it-read");
const buttonAdd = document.querySelector("#button-add")
const library = document.querySelector("#library");

function Book(title, author, pages, read) {
    if(!new.target) {
        throw Error("Please use the \"new\" keyword with object constructors!");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const a = new Book();
    myLibrary.push(a);
}

function printBook() {
    myLibrary.forEach(Book => {
        // create div element (whole book)
        let div = document.createElement("div");
        library.append(div);
        let p = document.createElement("p");
        div.append("p");
        p.textContent = Book.innerHTML;
        //give it text content of key:values / single paras?
    });
}

buttonAdd.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary();
    console.log(myLibrary);
    printBook();
})


