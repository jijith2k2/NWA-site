<?php
header('Content-Type: application/json');
require 'db_connect.php';

$data = json_decode(file_get_contents('php://input'), true);

try {
    // Prepare SQL statement
    $stmt = $pdo->prepare("
        INSERT INTO members (
            name, 
            email, 
            mobile, 
            address, 
            photo, 
            payment_id, 
            member_id, 
            amount, 
            created_at
        ) VALUES (
            :name, 
            :email, 
            :mobile, 
            :address, 
            :photo, 
            :payment_id, 
            :member_id, 
            :amount, 
            :created_at
        )
    ");
    
    // Execute with data
    $success = $stmt->execute([
        ':name' => $data['name'],
        ':email' => $data['email'],
        ':mobile' => $data['mobile'],
        ':address' => $data['address'],
        ':photo' => $data['photo'],
        ':payment_id' => $data['payment_id'],
        ':member_id' => $data['member_id'],
        ':amount' => $data['amount'],
        ':created_at' => $data['timestamp']
    ]);
    
    echo json_encode(['success' => $success, 'member_id' => $data['member_id']]);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}
?>