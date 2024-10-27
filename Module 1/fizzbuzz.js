for (let i = 1; i <= 100; i++) {
    // Check for divisibility by both 3 and 5 first
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } 
    // Check for divisibility by 3
    else if (i % 3 === 0) {
        console.log("Fizz");
    } 
    // Check for divisibility by 5
    else if (i % 5 === 0) {
        console.log("Buzz");
    } 
    // Print the number if not divisible by 3 or 5
    else {
        console.log(i);
    }
}
