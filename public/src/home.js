function getTotalBooksCount(books) {
  return books.length
} 

function getTotalAccountsCount(accounts) {
  return accounts.length
}


function getBooksBorrowedCount(books) {
  let total = 0
  for (let a = 0; a < books.length; a++) {
    let borrowed = books[a].borrows.filter((lent)=>{
      return lent.returned == false
  }) 
  if(borrowed.length){
  total++
  }
}
return total
}

/*function getMostCommonGenres(books) {
  const result = []
  const genres = books.map((book) => {
    return book.genre
  })
  console.log(genres)
  console.log(books)

}*/

function getMostCommonGenres(books) {
  const reesult = []
  for (let a = 0; a < books.length; a++) {
      if (reesult.find((item) => {
        return item.name === books[a].genre
  }))
{ let temp = reesult.find((item) => {
  return item.name === books[a].genre}  
) 
temp.count++
}
else {
  reesult.push({name: books[a].genre, count: 1})
}
}
reesult.sort((bookA, bookB) => 
(bookA.count < bookB.count ? 1 : -1))
if (reesult.length > 5) {
  return reesult.slice(0,5)
  }
  return reesult
}


function getMostPopularBooks(books) {
const result = []
for (let x = 0; x < books.length; x++) {
result.push({name: books[x].title, count: books[x].borrows.length})
}
result.sort((bookA, bookB) => 
(bookA.count < bookB.count ? 1 : -1))
if (result.length > 5) {
return result.slice(0,5)
}
return result
}

/*function getMostPopularAuthors(books, authors) {
  const match = []
  // loop through books and create a match-array that has ID = author.id and count = borrows.length
  // if ID is already found count += borrows.length
  // map new array and authors.find or loop through authors to find ID === author.id => [name] : authors.name.first + ' ' + authors.name.last, count: match-array.count
  for (let o = 0; o < books.length; o++) {
    if (match.find((found) => {
      books[o].authorID === found.ID
    }))
    { let temp = (match.find((found) => {
      books[o].authorID === found.ID}
    )
    match.count += books[o].borrows.length
    )
  }else {
    match.push({})
  }
  };
}

const authorss= []
for (let a = 0; a < authors.length; a++) {
  authorss.push({name:authors[a].name.first + ' ' + authors.name.last})
}
console.log(authorss)*/


/*function getMostPopularAuthors(books, authors) {
  const found = []
  for (let y = 0; y < books.length; y++) {
if (found.find((item) => {
  item.name === books[y].name.first + ' ' + books[y].name.last
}))
{ let count = found.find((book) => {
  return book.name === books[y].name.first + ' ' + books[y].name.last}  
) 
count.count += books[y].borrows.length
  }
  else {
    found.push({name: books[y].name.first + ' ' + books[y].name.last, count: 0})
  }
}
console.log(found)
} */

function getMostPopularAuthors(books, authors){
const result = []
const authorss= []
for (let a = 0; a < authors.length; a++) {
  authorss.push({name: authors[a].name.first + " " + authors[a].name.last, ID: authors[a].id})
}
console.log(authorss)

const bookss = []
for (let b = 0; b < books.length; b++) {
  if (bookss.find((item) => {
    return item.ID === books[b].authorId
  }))
{  let temp = bookss.find((item) => {
  return item.ID === books[b].authorId}
  )
  temp.count += books[b].borrows.length
  }
  else{
  bookss.push({ID: books[b].authorId, count: books[b].borrows.length})
}
}
console.log(bookss)
for (let c = 0; c < bookss.length; c++){
  for (let d = 0; d < authorss.length; d++){
  if (bookss[c].ID === authorss[d].ID) {
    result.push({name: authorss[d].name, count: bookss[c].count})
  }
  }
  }
  console.log(result)
  result.sort((bookA, bookB) => 
(bookA.count < bookB.count ? 1 : -1))
if (result.length > 5) {
return result.slice(0,5)
}
return result
}






module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
