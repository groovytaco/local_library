function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let result = [];
  books.reduce((acc, book) => {
    if (!book.borrows[0].returned) {
      acc++;
      result.push(book);
    }
  });
  return result.length;
}

function returnTopResults(rawTopResults) {
  const result = rawTopResults.slice(0, 5);
  return result;
}

function getMostCommonGenres(books) {
  let genres = [];
  for (let book in books) {
    let found = genres.find((genre) => genre.name === books[book].genre);
    found
      ? (found.count += 1)
      : genres.push({ name: books[book].genre, count: 1 });
  }
  genres.sort((genreA, genreB) => (genreA.count > genreB.count ? -1 : 1));
  return returnTopResults(genres);
}

function getMostPopularBooks(books) {
  let topBooks = [];
  for (let book in books) {
    topBooks.push({
      name: books[book].title,
      count: books[book].borrows.length,
    });
  }
  topBooks.sort((bookA, bookB) => (bookA.count > bookB.count ? -1 : 1));
  return returnTopResults(topBooks);
}

function getMostPopularAuthors(books, authors) {
  let topAuthors = [];
  for (let book in books) {
    let authorName = authors.find(
      (author) => author.id === books[book].authorId
    );
    let bookReadCount = books[book].borrows.length;
    let found = topAuthors.find((author) => author.name === authorName);
    found
      ? (found.count += bookReadCount)
      : topAuthors.push({
          name: `${authorName.name.first} ${authorName.name.last}`,
          count: bookReadCount,
        });
  }
  topAuthors.sort((authorA, authorB) =>
    authorA.count > authorB.count ? -1 : 1
  );
  return returnTopResults(topAuthors);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
