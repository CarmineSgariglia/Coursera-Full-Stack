// Exercises

// if...else if...else
var age = 10;

if (age >= 65) {
    console.log("Your income comes from a pension.");
} else if (age < 65 && age >= 18) {
    console.log("You receive a monthly salary.");
} else if (age < 18) {
    console.log("You receive an allowance.");
}

// Switch case
var day = "Sunday";

switch (day) {
    case "Monday":
        console.log("Today is Monday.");
        break;
    case "Tuesday":
        console.log("Today is Tuesday.");
        break;
    case "Wednesday":
        console.log("Today is Wednesday.");
        break;
    case "Thursday":
        console.log("Today is Thursday.");
        break;
    case "Friday":
        console.log("Today is Friday.");
        break;
    case "Saturday":
        console.log("Today is Saturday.");
        break;
    case "Sunday":
        console.log("Today is Sunday.");
        break;
    default:
        console.log("The day entered is not valid.");
}
