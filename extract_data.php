<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "form";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to select all data from a table
$sql = "SELECT * FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $data = "";
    while($row = $result->fetch_assoc()) {
        $data .= implode(",", $row) . "\n";
    }

    // Specify the path where you want to save the file
    $file = 'D:\user_data\data.csv';

    // Write data to file
    file_put_contents($file, $data);
} else {
    echo "0 results";
}

$conn->close();
?>
