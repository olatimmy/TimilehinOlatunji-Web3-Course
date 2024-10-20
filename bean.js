function countChar(string, char) {
    let count = 0; // Initialize a counter
    for (let i = 0; i < string.length; i++) { // Loop through each character in the string
        if (string[i] === char) { // Check if the character matches the one we are counting
            count++; // Increment the counter
        }
    }
    return count; // Return the total count
}

// Function to count uppercase 'B' characters using countChar
function countBs(string) {
    return countChar(string, 'B'); // Call countChar to count 'B' characters
}

// Testing the functions
console.log(countBs("BOB")); // → 2
console.log(countChar("kakkerlak", "k")); // → 4
