function findAccountById(accounts, id) {
  for (let acc in accounts) {
    if (accounts[acc].id === id) {
      return accounts[acc];
    }
  }
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accA, accB) => (accA.name.last > accB.name.last ? 1 : -1));
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  const userId = account.id;
  let borrows = 0;
  for (let book in books) {
    for (let borrow in books[book].borrows) {
      if (books[book].borrows[borrow].id === userId) {
        borrows += 1;
      }
    }
  }
  return borrows;
}

function getBooksPossessedByAccount(account, books, authors) {
  const userId = account.id;
  let result = [];
  for (let book in books) {
    for (let borrow in books[book].borrows) {
      if (books[book].borrows[borrow].id === userId && books[book].borrows[borrow].returned === false) {
        let revisedBook = books[book];
        revisedBook.author = authors.find((author) => author.id === revisedBook.authorId);
        result.push(revisedBook);
      }
    }
  }
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
