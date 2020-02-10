const todos = [
  {
    text: "Order cat food",
    completed: false
  },
  {
    text: "Clean kitchen",
    completed: true
  },
  {
    text: "Buy food",
    completed: true
  },
  {
    text: "Do work",
    completed: false
  },
  {
    text: "Exercise",
    completed: true
  }
];

const deleteTodo = function(todos, todoText) {
  const index = todos.findIndex(function(todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });

  if (index > -1) {
    todos.splice(index, 1);
  }
};

// filter the todos that have a value of false

const getThingsToDo = function(todos) {
  return todos.filter(function(todo, index) {
    return !todo.completed;

    // const isTextMatch = todo.text.toLowerCase().includes(query.toLowerCase());
    // const isCompletedMatch = todo.completed
    //   .toLowerCase()
    //   .includes(query.toLowerCase());
    // return isTextMatch || isCompletedMatch;
  });
};

console.log(getThingsToDo(todos));

// deleteTodo(todos, "buy groceries");
// console.log(todos);
