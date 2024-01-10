// const phrase = "Hello my name is sushant luitel";
// function frequencyInLetter(phrase) {
//   const frequency = {};
//   for (const letter of phrase) {
//     if (letter in frequency) frequency[letter] += 1;
//     else frequency[letter] = 1;
//   }
//   return frequency;
// }
// console.log(frequencyInLetter(phrase));

function frequencyInWords(phrase) {
  let frequency = {};
  const phraseinArray = phrase.split(" ");
  for (word of phraseinArray) {
    if (word in frequency) frequency[word] += 1;
    else frequency[word] = 1;
  }
  return frequency;
}
console.log(frequencyInWords("hello sushant hello wow wow wow haha haha lol"));
