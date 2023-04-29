let input = "I am learning Whale Talk.";
const vowels = ["a", "e", "i", "o", "u"];

let whaleTalk = "";

for (let i = 0; i < input.length; i++) {
  let char = input[i].toLowerCase();
  if (vowels.includes(char)) {
    whaleTalk += char;
    if (char === "e" || char === "u") {
      whaleTalk += char;
    }
  }
}

console.log(whaleTalk.toUpperCase());