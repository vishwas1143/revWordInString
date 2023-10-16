//To solve this Convert the input Into into array Of words and then Reverse each word then appened into an string 
//For that we are creating 3 variables revString(To store reverse sentence) revWord(To store reversed word) word(To split input )
function reverseEachWords(str) {
    // Spliting the input sentence into words
    const words = str.split(" ");
    let revString = ""; // Initializing an empty string to store the reversed sentence

    // Loop through each word in the array
    for (let i = 0; i < words.length; i++) {
        const word = words[i]; // Getting the current word
        let revWord = ""; // Initializing an empty string to store the reversed word

        // Looping through each character of the word  
        for (let j = word.length - 1; j >= 0; j--) {
            revWord = revWord + word.charAt(j); // Building the reversed word character by character
        }

        // Adding the reversed word to the reversed sentence  
        revString = revString + revWord + " ";
    }

     
    console.log(revString);
}

 
const inputString = "This is a sunny day";
reverseEachWords(inputString);  
