function createChessboard(size) {
    let chessboard = ''; // Initialize an empty string for the chessboard

    // Loop through each row
    for (let row = 0; row < size; row++) {
        // Loop through each column in the row
        for (let col = 0; col < size; col++) {
            // Determine whether to add a space or a '#' character
            if ((row + col) % 2 === 0) {
                chessboard += ' '; // Add space for even positions
            } else {
                chessboard += '#'; // Add '#' for odd positions
            }
        }
        chessboard += '\n'; // Add a newline character at the end of each row
    }

    return chessboard; // Return the completed chessboard string
}

let size = 8; // Define the size of the chessboard
console.log(createChessboard(size)); // Output the chessboard to the console