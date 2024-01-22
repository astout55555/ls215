function buyFruit(itemsAndAmounts) {
  let shoppingList = [];

  itemsAndAmounts.forEach(itemAndAmount => {
    let item = itemAndAmount[0];

    for (let amount = itemAndAmount[1]; amount > 0; amount--) {
      shoppingList.push(item);
    }
  });

  return shoppingList;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// LS Solution uses more abstracted, list processing methods:

// map to array of repeated names, then reduce with concat:
// function buyFruit(fruitsList) {
//   return fruitsList.map(fruit => repeat(fruit))
//     .reduce((groceryList, fruit) => groceryList.concat(fruit));
// }

// function repeat(fruit) {
//   const result = [];

//   for (let i = 0; i < fruit[1]; i += 1) {
//     result.push(fruit[0]);
//   }

//   return result;
// }
