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

  //const borrowed = []
  //loop through books 
  //if every books.borrowed.return === true push to returned
  //else push to borrowed
/* function partitionBooksByBorrowedStatus(books) {
  const arr = []
  for (let a = 0; a < books.length; a++) {
    let booksBorrowed = books.filter((book)=>{
      return book.borrows.some((item) => {
        return item.returned === false
      })
    })
    console.log(booksBorrowed)
  }
 for (let b = 0; b < books.length; b++) {
   let booksReturned = books.filter((bookB) => {
     return bookB.borrows.some((item2) => {
       return item2.returned === true 
     })
   })
   console.log(booksReturned)
  }
} */





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

  

//loop through book.borrows.id to gather id 
//if id matches accounts.id then filter into a new array
//return array 
//filtered[b].author = authors.find((item) => {



  function getBorrowersForBook(book, accounts) {
    const found = book.borrows.map((borrow) => {
      return { ...accounts.find(account => account.id === borrow.id), returned: borrow.returned }
      })
      if (found.length > 10) {
        return found.slice(0,10)
      }
      return found
  }



  // need to add account object into the new filter but only the keys amd values, not as an object 
 /* let borrowID = book.borrows.filter((item) => {
return item.id
  })
  console.log(borrowID)
  for (let c = 0; c < borrowID.length; c++){
    const account = accounts.find((person) => {
      return person.id === account.id
      /*if (borrowID.length === 10) {
        return borrowID
      }*/
    /*})
    }
    for (let key in account) {
     borrowID.key = account[key]
    console.log(borrowID)
  }
  return borrowID
}*/

  /*let borrowList = book.borrows.filter((borrow)=>{
    return borrow.id === accounts.id
  })
  console.log(borrowList)*/




module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
