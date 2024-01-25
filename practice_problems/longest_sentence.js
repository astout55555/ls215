let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

function sortByWordCount(sentence1Words, sentence2Words) {
  return (sentence1Words.length - sentence2Words.length);
}

// longestSentence and secondLongestSentence refactored to fix matching
function longestSentence(text) {
  let matchData = text.matchAll(/[^!?.]+[.?!]/g);
  let sentences = Array.from(matchData).map(match => match[0]);

  let wordsInSentences = sentences.map(sentence => sentence.trim().split(/ +/));
  let sortedByWordCount = wordsInSentences.sort(sortByWordCount);

  let wordsOfLongestSentence = sortedByWordCount[sortedByWordCount.length - 1];
  let longestSentence = wordsOfLongestSentence.join(' ');

  console.log(`${longestSentence}\n\n` +
    `The longest sentence has ${wordsOfLongestSentence.length} words.`);
}

longestSentence(longText);

function secondLongestSentence(text) {
  let matchData = text.matchAll(/[^!?.]+[.?!]/g);
  let sentences = Array.from(matchData).map(match => match[0]);

  let wordsInSentences = sentences.map(sentence => sentence.trim().split(/ +/));
  let sortedByWordCount = wordsInSentences.sort(sortByWordCount);

  sortedByWordCount.pop();

  let wordsOfLongestSentence = sortedByWordCount[sortedByWordCount.length - 1];
  let longestSentence = wordsOfLongestSentence.join(' ');

  console.log(`${longestSentence}\n\n` +
    `The second longest sentence has ${wordsOfLongestSentence.length} words.`);
}

secondLongestSentence(longText);

// rewrote functions to also preserve internal sentence spacing

function sortByWordCount2(sentence1Object, sentence2Object) {
  return (sentence1Object.words.length - sentence2Object.words.length);
}

function longestSentence2(text) {
  let matchData = text.matchAll(/[^!?.]+[.?!]/g);
  let sentences = Array.from(matchData).map(match => match[0]);

  let sentencesData = sentences.map(sentence => {
    return {
      sentence: sentence.trim(),
      words: sentence.trim().split(/ +/),
    };
  });
  let sortedByWordCount = sentencesData.sort(sortByWordCount2);

  let longestSentenceData = sortedByWordCount[sortedByWordCount.length - 1];

  console.log(`${longestSentenceData.sentence}\n\n` +
    `The longest sentence has ${longestSentenceData.words.length} words.`);
}

console.log('-----------------------'); // to make reading output easier

longestSentence2(longText); // still prints the same as before

longestSentence2("Hello there! Why oh   why  not? Goodbye.");
// prints while preserving spaces:
// Why oh  why  not?

// The longest sentence has 4 words.

longestSentence2("Hello there %#$^ (hello)! What? Hello, there.");
// prints correctly (doesn't match '^' literally):
// Hello there %#$^ (hello)!

// The longest sentence has 4 words.
