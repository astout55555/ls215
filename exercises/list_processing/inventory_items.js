// Inventory Item Transactions

function transactionsFor(itemID, listOfTransactions) {
  return listOfTransactions.filter(transaction => {
    return transaction.id === itemID;
  });
}

const transactions = [
  { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 15 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 },
];

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

// Inventory Item Availability

function isItemAvailable(itemID, listOfTransactions) {
  let leftInStock = 0;
  transactionsFor(itemID, listOfTransactions).forEach(transaction => {
    if (transaction.movement === 'in') {
      leftInStock += transaction.quantity;
    } else if (transaction.movement === 'out') {
      leftInStock -= transaction.quantity;
    }
  });

  return (leftInStock > 0);
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
