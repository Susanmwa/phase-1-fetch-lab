
document.addEventListener('DOMContentLoaded', fetchBooks); 

function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(renderBooks);
}
  

// const tittle = document.createElement("tittle");
function renderBooks(data) {
  const main = document.querySelector('main');
  data.map(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    //tittle.appendChild(main);
    main.appendChild(h2);
  });
}




