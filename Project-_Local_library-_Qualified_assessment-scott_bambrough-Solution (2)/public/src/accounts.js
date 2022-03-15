function findAccountById(accounts, id) {
  return accounts.find((person) => person.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((account1, account2) => (account1.name.last > account2.name.last) ? 1: -1 )
}

function getTotalNumberOfBorrows(account, books) {
  let numberOfBorrows = books.reduce((result, book) => {
    for (let i = 0; i < book.borrows.length; i++){
      const bookBorrows = book.borrows[i].id
      if (bookBorrows === account.id) result += 1};
    return result}, 0)
  return numberOfBorrows
}

function getBooksPossessedByAccount(accounts, books, authors) {
  let list = []
  for (const book of books){
    if (book.borrows[0].id === accounts.id && book.borrows[0].returned === false) {
      book.author = authors.find(author => author.id === book.authorId)
      list.push(book)
    }
  }
  return list
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
