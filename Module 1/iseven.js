function isEven(n) {
    // Check for invalid input
    if (n < 0) {
        return "Input must be a positive whole number."; // Handle negative input
    }
    // Base cases
    if (n === 0) return true;  // Zero is even
    if (n === 1) return false; // One is odd
    
    // Recursive case
    return isEven(n - 2); // Check the evenness of n - 2
}