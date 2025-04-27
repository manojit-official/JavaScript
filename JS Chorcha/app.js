// Write a JavaScript function checkNumber that:

// Takes a single parameter num (a number).
// Uses if-else statements to determine whether the number is positive, negative, or zero, and logs the appropriate message:
// If num is greater than 0, log "The number is positive."
// If num is less than 0, log "The number is negative."
// If num is 0, log "The number is zero."





function checkNumber(num) {
    if (num > 0) {
      console.log("The number is positive.");
    } else if (num < 0) {
      console.log("The number is negative.");
    } else {
      console.log("The number is zero.");
    }
  }

    checkNumber(5);
    checkNumber(-3);
    checkNumber(0);


//     Write a JavaScript function categorizeNumber that:

// Takes a single parameter num (a number).
// Uses a switch-case statement to categorize num as follows:
// If num is 1, log "One".
// If num is 2, log "Two".
// If num is 3, log "Three".
// For any other number, log "Unknown number".


function categorizeNumber(num) {
    switch (num) {
      case 1:
        console.log("One");
        break;
      case 2:
        console.log("Two");
        break;
      case 3:
        console.log("Three");
        break;
      default:
        console.log("Unknown number");
    }
  }
  
  categorizeNumber(1); // Output: One
  categorizeNumber(2); // Output: Two
  categorizeNumber(3); // Output: Three
  categorizeNumber(5); // Output: Unknown number