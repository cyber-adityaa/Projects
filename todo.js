// Define a function to display the to-do list

function displayTodoList(todoList) {

  console.log('To-Do List');

  console.log('----------');

  for (let i = 0; i < todoList.length; i++) {

    console.log(`${i + 1}. ${todoList[i]}`);

  }

}

// Define a function to add a task to the to-do list

function addTask(todoList) {

  const task = prompt('Enter a task:');

  todoList.push(task);

  console.log(`Added task: ${task}`);

  displayTodoList(todoList);

}

// Define a function to edit a task in the to-do list

function editTask(todoList) {

  const index = prompt('Enter the number of the task you want to edit:') - 1;

  const task = prompt('Enter the new task:');

  todoList[index] = task;

  console.log(`Edited task: ${task}`);

  displayTodoList(todoList);

}

// Define a function to delete a task from the to-do list

function deleteTask(todoList) {

  const index = prompt('Enter the number of the task you want to delete:') - 1;

  const task = todoList.splice(index, 1)[0];

  console.log(`Deleted task: ${task}`);

  displayTodoList(todoList);

}

// Define the main function to run the to-do list app

function runTodoListApp() {

  const todoList = [];

  // Display the to-do list and ask the user for input

  displayTodoList(todoList);

  let command = prompt('Enter a command (add, edit, delete, or quit):');

  // Loop until the user enters the quit command

  while (command !== 'quit') {

    switch (command) {

      case 'add':

        addTask(todoList);

        break;

      case 'edit':

        editTask(todoList);

        break;

      case 'delete':

        deleteTask(todoList);

        break;

      default:

        console.log('Invalid command');

        break;

    }

    // Ask the user for input again

    command = prompt('Enter a command (add, edit, delete, or quit):');

  }

  console.log('Goodbye!');

}

// Run the to-do list app

runTodoListApp();
