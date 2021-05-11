function findAuthorById(authors, id) {
 //loop through authors to find the author.id that matches id
 //return author
const result = authors.find((author) => 
author.id === id  
) 
return result
}

function findBookById(books, id) {
  const answer = books.find((book) => 
  book.id === id)
  return answer
}

function partitionBooksByBorrowedStatus(books) {
  //not sure why it's not returning 
  const arr = []
  //for (let a = 0; a < books.length; a++) {
    let booksBorrowed = books.filter((book)=>{
      return book.borrows.some((item) => {
        return item.returned === false
      })
    })
    arr.push(booksBorrowed)
  console.log(arr)
 //for (let b = 0; b < books.length; b++) {
   let booksReturned = books.filter((bookB) => {
     return bookB.borrows.every((item2) => {
       return item2.returned === true 
     })
   })
   arr.push(booksReturned)
   console.log(arr)
  return arr
} 

  function getBorrowersForBook(book, accounts) {
    const found = book.borrows.map((borrow) => {
      return { ...accounts.find(account => account.id === borrow.id), returned: borrow.returned }
      })
      if (found.length > 10) {
        return found.slice(0,10)
      }
      return found
  }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
