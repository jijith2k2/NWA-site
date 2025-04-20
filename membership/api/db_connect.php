<?php
$host = 'localhost';      // Change if your database is on another server
$dbname = 'nwa_membercard';
$username = 'jijit';       // Replace with your MySQL username
$password = 'jith@2002'; // Replace with your MySQL password

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ATTR_ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}