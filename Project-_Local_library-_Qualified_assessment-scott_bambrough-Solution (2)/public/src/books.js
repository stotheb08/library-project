function findAuthorById(authors, id) {
  return authors.find(authorId => authorId.id === id)
}

function findBookById(books, id) {
  return books.find(bookId => bookId.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let checkedOut = books.filter((book) => book.borrows[0].returned === false)
  let returned = books.filter((book) => book.borrows[0].returned === true)
  const allBooks = [checkedOut, returned]
  return allBooks
}

function getBorrowersForBook({borrows}, accounts) {
  let list = []
  borrows.forEach(borrower => {
    for (let i = 0; i < accounts.length; i++){
      if (accounts[i].id === borrower.id) {
        accounts[i].returned = borrower.returned;
        list.push(accounts[i])
      }
    }
  })
  return list.slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
