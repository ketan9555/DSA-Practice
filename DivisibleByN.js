// Problem Statement:

// You are provided an integer N. Depending upon the value, you have to print a string as per the following rules:
// Print "Masai" (without quotes) if the integer is a multiple of 7
// Print "School" (without quotes) if the integer is a multiple of 5
// Print "Masai School" (without quotes) if the integer is a multilpe of 35
// Else in all other cases print "Hurray!" (without quotes)

let n = 35;

if (n % 7 === 0 && n % 5 === 0) {
  console.log("Masai School");
} else if (n % 7 === 0) {
  console.log("Masai");
} else if (n % 5 === 0) {
  console.log("School");
} else console.log("Hurray!");
