    // Function to check if a number is prime
    function primeNum(num) {

    if (num <= 1) return false; // prime numbers are greater than 1
    
    // Check for divisibility by numbers up to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Not a prime number
        }
    }
    
    return true; // prime number
}
primeNum() // call function to che if a number is a prime number

// Function to filter out prime numbers from an array
function getPrimeNumbers(arr) {
    return arr.filter(num => PrimeNum(num));
}

// Example usage
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = getPrimeNumbers(numbers);
console.log(primeNumbers); // should Output [2, 3, 5, 7]
    
