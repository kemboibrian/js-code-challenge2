function swapCase(string) {
    return string.split('').map(char => {
     if (char === char.toUpperCase()) {
         return char.toLowerCase()
         
     } else {
         return char.toUpperCase()
         
     }
    }
    ).join('') // joins the elements after swapping
     
 }
 swapCase('string') // call function to check the string
 //console.log(swapCase('')); // tests the function to provide the correct output 
 // in this case
 console.log(swapCase('The Quick Brown Fox')); // should output 'tHE qUICK bROWN fOX'
 