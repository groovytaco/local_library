function findAuthorById(authors, id) {
  let author = authors.find((author) => author.id === id);
  return author;
}

function findBookById(books, id) {
  let book = books.find((book) => book.id === id);
  return book;
}

function partitionBooksByBorrowedStatus(books) {
  let borrowed = [];
  let returned = [];
  for (let book in books) {
    let theBook = books[book];
    for (let borrow in theBook.borrows) {
      if (theBook.borrows[0].returned === false) {
        borrowed.push(theBook);
        break;
      } else {
        returned.push(theBook);
        break;
      }
    }
  }
  let result = [borrowed, returned];
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
  borrows.length > 10 ? result = borrows.slice(0, 10) : result = borrows;
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
