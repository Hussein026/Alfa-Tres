<?php
// Connect to the database
$pdo = new PDO('mysql:host=localhost;dbname=bookstore', 'username', 'password');

// Fetch books from the database
$statement = $pdo->query('SELECT * FROM books');
$books = $statement->fetchAll(PDO::FETCH_ASSOC);

// Return books as JSON
header('Content-Type: application/json');
echo json_encode($books);
?>