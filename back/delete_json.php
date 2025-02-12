<?php
// Define the mail folder
$mailFolder = realpath(__DIR__ . '/mail');

// Get the file name from the query parameter
$fileName = isset($_GET['file']) ? basename($_GET['file']) : null;

if (!$fileName) {
    echo "Error: No file specified.";
    exit;
}

// Construct the full path to the file
$filePath = $mailFolder . '/' . $fileName;

// Check if the file exists and is within the allowed directory
if (!file_exists($filePath)) {
    echo "Error: File not found.";
    exit;
}

if (strpos(realpath($filePath), $mailFolder) !== 0) {
    echo "Error: Access denied.";
    exit;
}

// Attempt to delete the file
if (unlink($filePath)) {
    echo "File successfully deleted.";
} else {
    echo "Error: Unable to delete file.";
}

// Redirect back to the control panel
header("Location: panel.php");
exit;
?>
