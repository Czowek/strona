<?php
$counterFile = 'counter.txt'; // File to store the visit count

// Read the current count from the file
$counter = file_get_contents($counterFile);

// Increment the count
$counter++;

// Write the new count back to the file
file_put_contents($counterFile, $counter);

// Return the count
echo $counter;
?>
