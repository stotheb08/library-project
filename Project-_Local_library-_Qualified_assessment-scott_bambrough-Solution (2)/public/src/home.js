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


//Changed getMostPopularbooks now using map function
 
function getMostPopularBooks(books) {
  return books
    .map(book => ({
      name: book.title,
      count: book.borrows.length,
    }))
    .sort((count1, count2) => count2.count > count1.count ? 1 : -1)
    .slice(0, 5)
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

  let organizedAuthorsList = organizeAuthors(authorsList)
  return organizedAuthorsList
}

//helper function for getMostPopularAuthors to sort the final list 
function organizeAuthors(list){
  list.sort((count1, count2) => (count2.count >count1.count ? 1: -1))
  return list.slice(0,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
