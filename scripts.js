const books = document.querySelector('.books-list');

let myLibrary = [];

const addBook = document.querySelector('#new-book-button');
addBook.addEventListener('click', function () {
  let newBookForm = document.querySelector('#new-book-form');
  newBookForm.style.display = "block";
});
  
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#checkbox').checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

function render() {
  let libraryEl = document.querySelector('#book-list');
  libraryEl.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement('div');
    bookEl.classList.add('card');
    bookEl.innerHTML = `
      <p>Title: ${book.title}</p>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <button class="read-button" onclick="toggleRead(${i})">Read: ${book.read ? "Yes" : "Not yet"}</button>
      <img class="delete-btn" src="images/close-circle-outline.svg" alt="letter x" onclick="deleteBook(${i})"/>
  `;
    libraryEl.appendChild(bookEl);
    showLibraryInfo(book);
  };
} 

document.querySelector('#new-book-form').addEventListener('submit', function(event) {
  event.preventDefault();
  addBookToLibrary();
})

Book.prototype.toggleRead = function () {
  this.read = !this.read;
}

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
  showLibraryInfo(book);
}

function deleteBook(index) {
  myLibrary.splice(index, 1);
  render();
}

function showLibraryInfo(book) {
  const booksRead = document.querySelector('#books-read');
  const booksUnread = document.querySelector('#books-unread');
  const totalBooks = document.querySelector('#total-books');
  let booksReadCount = 0;
  let booksUnreadCount = 0;
  booksRead.textContent = booksReadCount;
  booksUnread.textContent = booksUnreadCount;
  for (let i = 0; i < myLibrary.length; i++) {
    if (book.read === true) {
      booksReadCount += 1;
      booksRead.textContent = booksReadCount;
      ;
    } else if (book.read === false) {
      booksUnreadCount += 1;
      booksUnread.textContent = booksUnreadCount;
    } else return;
  }  
  totalBooks.textContent = myLibrary.length;
}
