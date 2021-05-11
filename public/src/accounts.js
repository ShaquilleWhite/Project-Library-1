function findAccountById(accounts, id) {
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
  


    function getTotalNumberOfBorrows(account, books) {
      let total = books.reduce((acc, book) => {
        let borrowList = book.borrows.filter((borrow)=> {
          return borrow.id === account.id
        })
          if(borrowList.length){
          return acc += 1
        }
        else {
          return acc
        }
      },0)
      console.log(total)
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
