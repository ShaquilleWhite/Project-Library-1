function findAccountById(accounts, id) {
  /*let match = {}
  for (let i =0; i < accounts.length; i++) {
    if (accounts[i].id === id) {
  match = accounts[i]
    }    
} return match */
let match = accounts.find((user) => 
user.id === id)
return match
}

function sortAccountsByLastName(accounts) {
let result = accounts.sort((accountA, accountB) => {
  return accountA.name.last < accountB.name.last ? -1 : 1 
}) 
return result
  }
    // got through book and find how many times their id pops up in books.borrowed.id[array] 
   /*function getTotalNumberOfBorrows(account, books) {
      let total = 0
    for (let a = 0; a < books.length; a ++) {
      for (let b = 0; b < books.borrow.length; b++) {
      if (books[a].borrows[b].id === account.id) {
        total += 1
      }
      }
    }
    console.log(books[0].borrows[1].id)
    return total
    }*/

    function getTotalNumberOfBorrows(account, books) {
      let total = 0
    for (let a = 0; a < books.length; a++) {
      let borrowList = books[a].borrows.filter((borrow)=>{
        return borrow.id === account.id
      })
      console.log(borrowList)
        if(borrowList.length){
        total++;
      }
    }
      return total
    }

 

function getBooksPossessedByAccount(account, books, authors) {
  //for (let b = 0; b < books.length; b++) {
  let filtered = books.filter((book) => {
    return book.borrows.some((item) => {
      return item.id === account.id && item.returned === false
    })
  })
  for (let b =0; b < filtered.length; b++) {
    filtered[b].author = authors.find((item) => {
      return item.id === filtered[b].authorId
    })
    }
    console.log(filtered)
  return filtered
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
