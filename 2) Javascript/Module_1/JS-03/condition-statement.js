// Example with if else
var result = 35;

if (result >= 50) {
    console.log("You passed the exam Bro!");
}
else if (result >= 30 && result <= 40) {
    console.log("You have a second chance to pass the exam.");
}
else {
    console.log("You did not pass the exam... Bro");
}

// Example with switch and else if logic
var place = "city"; 

switch (place) { // switch checks both value and type of 'place' (strict comparison with ===)
    case "city":
        console.log("You live in a city.");
        break; // Without break, execution continues into the next case (fall through)
    case "suburb":
        console.log("You live in the suburbs.");
        break;
    case "village":
        console.log("You live in a village.");
        break;
    default:
        console.log("You live in a place far away from civilization.");
}

// Example with break inside a loop
for (let i = 1; i <= 5; i++) { 
    // Using let because 'i' is a block-scoped variable and does not exist outside the loop (loop scope)
    if (i === 3) {
        break; // Stop the loop when i equals 3
    }
    console.log(i); // Prints numbers 1 and 2
}
