const books = document.querySelector('.books-list');

const myLibrary = [{
  title: 'Educated',
  author: 'Tara Westover',
  pages: 300,
  read: true,
}, {
  title: 'Song of Achilles',
  author: 'Madeline Miller',
  pages: 400,
  read: true,
}, {
  title: '7 Habits of Highly Effective People',
  author: 'Stephen Covey',
  pages: 350,
  read: true,
}
];

let title = document.getElementById('title').value;
let author = document.getElementById('author').value;
let pages = document.getElementById('pages').value;
const addForm = document.querySelector('#button');
addForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // const data = new FormData(e.target);
  // for (let [name, value] of data) {
  //   if (name === input[type = 'checkbox'].checked) {
  //     newBook['read-checked'] = true;
  //   } else {
  //     newBook[name] = value;
  //   }

  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
  renderBooks();
});
  
class Book {
  constructor(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  }
}

function createBookElement(el, content, className) {
  const element = document.createElement(el);
  element.textContent = content;
  element.setAttribute('class', className);
  return element;
}

// function checkReadStatus(bookItem, book) {
//   const read = document.createElement('div');
//   read.setAttribute('class', 'book-read');
//   read.appendChild(createBookElement('h1', 'Read', 'book-read-title'));
//   let input = document.createElement('input');
//   input.type = 'checkbox';
//   input.addEventListener('click', (e) => {
//     if (e.target.checked) {
//       bookItem.setAttribute('class', 'card book read-checked');
//       book.read = true;
//     } else {
//       bookItem.setAttribute('class', 'card book read-unchecked');
//       book.read = false;
//     }
//     if (book.read) {
//       input.checked = true;
//       bookItem.setAttribute('class', 'card book read-checked')
//     }
//     read.appendChild(input);
//     return read;
//   });


function deleteBook(index) {
  myLibrary.splice(index, 1);
  renderBooks();
}

function createBookItem(book, index) {
  const bookItem = document.createElement('div');
  
  bookItem.setAttribute('id', index);
  bookItem.setAttribute('key', index);
  bookItem.setAttribute('class', 'card book');

  bookItem.appendChild(createBookElement('h1', `Title: ${book.title}`, 'book-title'));
  bookItem.appendChild(createBookElement('h1', `Author: ${book.author}`, 'book-author'));
  bookItem.appendChild(createBookElement('h1', `Pages: ${book.pages}`, 'book-pages'));
  // bookItem.appendChild(checkReadStatus(bookItem, book));
  let img = document.createElement('img');
  img.setAttribute('class', 'delete-btn');
  img.src = 'images/close-circle-outline.svg';
  bookItem.appendChild(img);

  bookItem.querySelector('.delete-btn').addEventListener('click', () => {
    deleteBook(index);
  });
  books.insertAdjacentElement("afterbegin", bookItem);
}

function renderBooks() {
  books.textContent = '';
  myLibrary.map((book, index) => {
    createBookItem(book, index);
  })
};

renderBooks();
