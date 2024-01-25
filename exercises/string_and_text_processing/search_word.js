// Part 1

// my solution
function searchWord(word, text) {
  return text.match(/\S+/gi)
    .filter(match => match.toLowerCase() === word.toLowerCase()).length;
}

// LS Solution: matches with partial words, could lead to errors

// function searchWord(word, text) {
//   const regex = new RegExp(word, 'gi'); // can create regexp using variables!
//   const matches = text.match(regex); // can then use the regex variable here

//   return matches ? matches.length : 0; // returns 0 instead of null
// }

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3

// FE: refactor to handle input verification in case arguments are missing

function searchWord2(word, text) {
  if (arguments.length < 2) {
    return 'Error: Please provide a search word and the text to search as arguments.';
  }

  return text.match(/\S+/gi)
    .filter(match => match.toLowerCase() === word.toLowerCase()).length;
}

console.log(searchWord2(text));      // error

// Student FE solution which shows how to combine variable and regex literal:

function searchWord3(target = '', text = '') {
  let regex = new RegExp(`\\b${target}\\b`, 'gi'); // must escape the escape
  let matches = text.match(regex);
  return matches ? matches.length : 0;
}

console.log(searchWord3('sed', text));      // 3

// Part 2

// my solution, building off the student solution above:
function highlightWord(wordToFind = '', text = '') {
  let regex = new RegExp(`\\b${wordToFind}\\b`, 'gi');
  return text.split(' ').map(word => {
    if (word.match(regex)) {
      return `**${word.toUpperCase()}**`;
    } else {
      return word;
    }
  }).join(' ');
}

// LS Solution: using `replace` is much more concise!
function highlightWord2(word, text) {
  const regex = new RegExp(word, 'gi'); // still matches partial words though
  return text.replace(regex, `**${word.toUpperCase()}**`);
}

// could combine to match only full words, and use `replace` with that regex

console.log(highlightWord('sed', text));

console.log(highlightWord2('sed', text));
