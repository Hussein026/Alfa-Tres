document.addEventListener("DOMContentLoaded", function() {
    // Fetch books from the server and display them
    fetchBooks();
});

function fetchBooks() {
    fetch('get_books.php')
    .then(response => response.json())
    .then(books => displayBooks(books))
    .catch(error => console.error('Error fetching books:', error));
}

function displayBooks(books) {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book');
        bookItem.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Price: $${book.price}</p>
            <button onclick="addToCart(${book.id})">Add to Cart</button>
        `;
        bookList.appendChild(bookItem);
    });
}

function addToCart(bookId) {
    // Implement adding book to cart functionality
}