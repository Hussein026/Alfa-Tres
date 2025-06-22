CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

INSERT INTO books (title, author, price) VALUES
('Book 1', 'Author 1', 10.99),
('Book 2', 'Author 2', 12.99),
('Book 3', 'Author 3', 14.99);