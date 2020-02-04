const todos = [
  "Clean kitchen",
  "Water the plant",
  "Go to the post office",
  "Buy groceries",
  "Do yoga"
];

// delete the third item, (starting index, # of items to delete)
todos.splice(2, 1);

// add a new item on the end
todos.push("Meditate");

// remove the first item from the list
todos.shift();

console.log(todos.length);

console.log(`You have ${todos.length} todos.`);

// console.log(`To do: ${todos[0]}`);
// console.log(`To do: ${todos[todos.length - 2]}`);

// console.log(todos);

todos.forEach(function(item, index) {
  const num = index + 1;
  console.log(`${num}. ${item}`);
});
