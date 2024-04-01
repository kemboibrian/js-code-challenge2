//array generator that accepts two fucntions

function arrayRange(start, end) {
    let direction; 
    if (start < end) { // case where the start is less than the end
        direction = 1;
    } else if (start > end) { // case where the start is greater than the end
        direction = -1;
    } else { 
        direction = 0;
    }

    const length = Math.abs(end - start) + 1;
    return Array.from({ length }, (_, i) => start + i * direction);
}
arrayRange() // call function to check array generated

console.log(arrayRange(4, 7)); //  should Outpu  [4, 5, 6, 7]
console.log(arrayRange(-4, 7)); // should output [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]