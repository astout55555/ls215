// original

// let ladder = ''

// ['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
//   if (ladder !== '') {
//     ladder += '-'
//   }

//   ladder += word
// })

// console.log(ladder)  // expect: head-heal-teal-tell-tall-tail

// debugged - was missing `;` throughout

let ladder = ''; // this was the one that caused the error

// JS read this as:
// let ladder = ''['head', ... ].forEach(// other code here)
// [] bracket accessor on the empty string returns undefined,
// then we call forEach on undefined.

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-';
  }

  ladder += word;
});

console.log(ladder);  // expect: head-heal-teal-tell-tall-tail
