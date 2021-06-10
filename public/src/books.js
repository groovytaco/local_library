function findAuthorById(authors, id) {
  let author = authors.find((author) => author.id === id);
  return author;
}

function findBookById(books, id) {
  let book = books.find((book) => book.id === id);
  return book;
}

function partitionBooksByBorrowedStatus(books) {
  let borrowedBooks = [];
  let returnedBooks = [];
  const theBook = books.map((book) => book.borrows[0].returned);
  console.log(theBook);
  for (let returned in theBook) {
    !theBook[returned] ? borrowedBooks.push(books[returned]) : returnedBooks.push(books[returned]);
  }
  let result = [borrowedBooks, returnedBooks];
  return result;
}

function getBorrowersForBook(book, accounts) {
  let borrows = [];
  let result = [];
  for (let borrow in book.borrows) {
    let acc = accounts.find((acc) => acc.id === book.borrows[borrow].id);
    acc.returned = book.borrows[borrow].returned;
    borrows.push(acc);
  }
  borrows.length > 10 ? (result = borrows.slice(0, 10)) : (result = borrows);
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
