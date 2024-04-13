<?php
$counterFile = 'counter.txt'; // File to store the visit count
$counter = file_get_contents($counterFile); // Read the current count from the file
$counter++; // Increment the count
file_put_contents($counterFile, $counter); // Write the new count back to the file
echo $counter; // Return the count
?>
