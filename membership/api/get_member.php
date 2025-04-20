<?php
header('Content-Type: application/json');
require 'db_connect.php';

// Get member ID from query parameters
$memberId = $_GET['member_id'] ?? '';

if (empty($memberId)) {
    echo json_encode([
        'success' => false,
        'message' => 'Member ID is required'
    ]);
    exit;
}

try {
    // Prepare and execute query
    $stmt = $pdo->prepare("
        SELECT 
            name,
            email,
            mobile,
            address,
            photo,
            member_id,
            created_at
        FROM members 
        WHERE member_id = :member_id
    ");
    
    $stmt->execute([':member_id' => $memberId]);
    $member = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($member) {
        // Format dates for better display
        $joinDate = new DateTime($member['created_at']);
        $member['created_at'] = $joinDate->format('Y-m-d H:i:s');
        
        echo json_encode([
            'success' => true,
            'member' => $member
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'Member not found'
        ]);
    }
} catch (PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Database error: ' . $e->getMessage()
    ]);
}
?>