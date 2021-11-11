function isPalindrome(word) {
  let length = word.length; 
  for (let i=0; i<= (length/2)-1; i++){
    if (word.charAt(i) != word.charAt(length-1-i)){
      return false;
    }
  }
  return true; 
}

isPalindrome("racecar")

/* 
  Add your pseudocode here
  ---
  length = length of the word 
  loop (n=0, <=(length/2-1), n++) 
    if char at n != char at length-n-1
      {return false}
  return true 
*/

/*
  Add written explanation of your solution here
  ---
  Get the length of the word, then use a loop to compare the first letter to the last letter, 
  second from first to second from last, and so on. Do this until you have gone through the first half, 
  and compared them to the reverse order second half. This is determened by dividing the length of the word in half 
  and using less than or equal (e.g., if it has 5 letters, half is 2.5; if it has 4, half is 2. In either case
    you want the first 2 letters checked against the last 2)
  

*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome('noon'));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log('=>', isPalindrome('moon'))
}

module.exports = isPalindrome;
