function fetchBooks() {

  return fetch('https://anapioficeandfire.com/api/books')
  .then((r)=>r.json())
  .then((books)=>
    renderBooks(books)
  )}
  //  fetch('https://anapioficeandfire.com/api/books', {
  //       method: "POST",
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify()
  //     })
  //         .then(r=>r.json())
  //         .then(books=>{
  //           fetchBooks(books)
  //         })


  
  

   


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
