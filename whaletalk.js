//String to be converted into whale speak
let input = 'tuprentine and turtles';

//Array of letters to look for inside 'Input' string to convert from normal speak to  whale speak
let vowels = ['a', 'e', 'i', 'o', 'u'];

//Array to store vowels found inside of 'Input' string.  This will an empty array initially.
let resultArray = [];

//Logic that compares 'Input' variable text to the 'vowels' array.  Goal is to find all the vowels inside the 'Input' string.  We will use a for loop
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  //Note: Commented log below to check work!
  //console.log(inputIndex);
  for (let vowelCheck = 0; vowelCheck < vowels.length; vowelCheck++) {
  //console.log(vowelCheck);
    if (input[inputIndex] === vowels[vowelCheck]) {
      resultArray.push(input[inputIndex]);
    }
  }
  if (input[inputIndex] === 'e' || input[inputIndex] === 'u') {
    resultArray.push(input[inputIndex]);

}
}
console.log(resultArray.join('').toUpperCase());