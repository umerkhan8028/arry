// Declare and initialize an empty multidimensional array in JavaScript
// var empty_multidimensional_array = new Array(rows);
// for (var i = 0; i < rows; i++) {
//     empty_multidimensional_array[i] = [];
// }


// Declare and initialize the multidimensional array representing the matrix
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];


// Program to print numeric counting from 1 to 10
for (var i = 1; i <= 10; i++) {
    console.log(i);
}


// Program to print multiplication table of any number using for loop

// Take input from the user for the table number and length
var table_number = parseInt(prompt("Enter the number for multiplication table:"));
var table_length = parseInt(prompt("Enter the length of the table:"));

// Print the multiplication table
console.log(`Multiplication table of ${table_number} up to ${table_length}:`);

for (var i = 1; i <= table_length; i++) {
    var result = table_number * i;
    console.log(`${table_number} x ${i} = ${result}`);
}




// Array of fruits
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// Print items of the array using for loop
console.log("Printing items of the array using for loop:");
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


 // a. Counting: 1 to 15
 var counting = '';
 for (var i = 1; i <= 15; i++) {
     counting += i + ', ';
 }
 document.getElementById('counting').textContent = counting;

 // b. Reverse counting: 10 to 1
 var reverseCounting = '';
 for (var i = 10; i >= 1; i--) {
     reverseCounting += i + ', ';
 }
 document.getElementById('reverseCounting').textContent = reverseCounting;

 // c. Even: 0 to 20
 var even = '';
 for (var i = 0; i <= 20; i += 2) {
     even += i + ', ';
 }
 document.getElementById('even').textContent = even;

 // d. Odd: 1 to 19
 var odd = '';
 for (var i = 1; i <= 19; i += 2) {
     odd += i + ', ';
 }
 document.getElementById('odd').textContent = odd;

 // e. Series: 2k to 20k
 var series = '';
 for (var i = 2; i <= 20; i += 2) {
     series += (i * 1000) + 'k, ';
 }
 document.getElementById('series').textContent = series;



 // Array of items
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Function to search for an item in the array
function searchItem(item) {
    for (var i = 0; i < A.length; i++) {
        if (A[i] === item) {
            return true; // Item found
        }
    }
    return false; // Item not found
}

// Prompt user for input
var userInput = prompt("Enter an item to search:");

// Convert user input to lowercase for case-insensitive search
userInput = userInput.toLowerCase();

// Check if the item is found in the array
if (searchItem(userInput)) {
    alert(`Yes, "${userInput}" is found in the list.`);
} else {
    alert(`No, "${userInput}" is not found in the list.`);
}



// Array of numbers
var A = [24, 53, 78, 91, 12];

// Initialize a variable to store the largest number, assuming the first element is the largest
var largestNumber = A[0];

// Iterate through the array to find the largest number
for (var i = 1; i < A.length; i++) {
    if (A[i] > largestNumber) {
        largestNumber = A[i];
    }
}

// Output the largest number
console.log("The largest number in the array is:", largestNumber);



// Array of numbers
var A = [24, 53, 78, 91, 12];

// Initialize a variable to store the smallest number, assuming the first element is the smallest
var smallestNumber = A[0];

// Iterate through the array to find the smallest number
for (var i = 1; i < A.length; i++) {
    if (A[i] < smallestNumber) {
        smallestNumber = A[i];
    }
}

// Output the smallest number
console.log("The smallest number in the array is:", smallestNumber);



// Iterate from 1 to 100
for (var i = 1; i <= 100; i++) {
    // Check if the number is a multiple of 5
    if (i % 5 === 0) {
        console.log(i); // Print the multiple of 5
    }
}



