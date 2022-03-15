function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let count = 0
  books.forEach(book => {
    if (book.borrows[0].returned === false) count += 1
  })
  return count
}

function getMostCommonGenres(books) {
  let genreList = books.reduce((list, book) => {
    if (list.some(genreToAddTo => genreToAddTo.name === book.genre)) {
      let findGenre = list.find(genreName => genreName.name === book.genre) 
      findGenre.count += 1
    }
    else {
      let genre = {name: book.genre, count: 1}
      list.push(genre)
    }
    return list
  }, [])
  genreList.sort((count1, count2) => (count2.count > count1.count ? 1 : -1))
  return genreList.slice(0,5)
}

function getMostPopularBooks(books) {
  let listByPopularity = []
  for (const book of books){
    let popularity = book.borrows.length
    const bookEntry = {name: book.title, count: popularity}
    listByPopularity.push(bookEntry)
  }
  listByPopularity.sort((count1, count2) => (count2.count > count1.count ? 1 : -1))
  return listByPopularity.slice(0,5)
}

function getMostPopularAuthors(books, authors) {
  let authorsList = []
  for (const author of authors){
    let count = 0
    for (const book of books){
      if (author.id === book.authorId) {
        count += book.borrows.length
      }
    }
    let authorName = author.name.first + ' ' + author.name.last
    let authorEntry = {name: authorName, count: count}
    authorsList.push(authorEntry)
  }
  authorsList.sort((count1, count2) => (count2.count > count1.count ? 1: -1))
  return authorsList.slice(0,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
