// Operators in JavaScript

val1 = 5 + 3; // Addition
val2 = 10 - 2; // Subtraction
val3 = 4 * 2; // Multiplication
val4 = 16 / 4; // Division
val5 = 17 % 3; // Modulo
val6 = 2 ** 3; // Exponentiation

val1 < val2; // Less than
val3 <= val4; // Less than or equal to
val5 > val6; // Greater than
val1 >= val2; // Greater than or equal to
val3 == val4; // Equal to
val5 != val6; // Not equal to
val1 === val2; // Equal in value and type (strict equality)
val3 !== val4; // Different in value or type (strict inequality)

val1 && val2; // Logical AND
val3 || val4; // Logical OR
!val5; // Logical NOT

val1++; // Increment by 1
val2--; // Decrement by 1

val3 += 2; // Adds 2 to val3
val4 -= 2; // Subtracts 2 from val4
val5 *= 2; // Multiplies val5 by 2
val6 /= 2; // Divides val6 by 2
val1 %= 2; // Assigns to val1 the remainder of division by 2
val2 **= 2; // Raises val2 to the power of 2

val3 = (val4 + val5) * val6; // Using parentheses to change the order of operations


// CONSOLE.LOG IN JAVASCRIPT with operations

console.log(((2+2-1)*3)/2); // Prints the result of the operation in the console
console.log(3>1); // Prints the result of the comparison 3 > 1
console.log(10 == 10); // Prints the result of the comparison 10 == 10

a = 5;
console.log(a>2 && a>0); // Prints the result of (a>2 AND a>0)
console.log(a>=1 || a<10); // Prints the result of (a>=1 OR a<10)

vero = true;
console.log(!vero); // Prints the result of the negation of vero

console.log(5 === "5") // Prints the result of the strict comparison 5 === "5"
console.log(5 !== "5") // Prints the result of the strict inequality


"inter" + "net" // = "internet" // String concatenation with the + operator
365 + "days" // = "365days" // Number + string concatenation with the + operator

/*
    The value conversion process in JavaScript is called "coercion".
    JavaScript converts a numeric value into a string
    so it can execute the + operator on different data types.
*/

1 + "2" // = "12" // The number 1 is converted to a string and concatenated with "2"

// Example of using the += operator to concatenate strings
var longString = "";
longString += "This ";
longString += "is ";
longString += "a ";
longString += "long ";
longString += "string.";
console.log(longString); // Prints "This is a long string."

// Operator associativity
var result = 10 - 5 + 2; // Left-to-right associativity
var result2 = 10; // Right-to-left associativity
5 > 3 > 1; // Left-to-right associativity
