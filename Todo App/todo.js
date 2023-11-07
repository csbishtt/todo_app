let todoList = [
  { item: 'Buy Milk', dueDate: '4/10/2023' },
  { item: 'Go to College', dueDate: '4/10/2023' },
];

const inputElement = document.querySelector('#todo-input');
const dateElement = document.querySelector('#todo-date');
const containerElement = document.querySelector('.todo-container');

displayItems();

function addTodo() {
  const todoItem = inputElement.value;
  const todoDate = dateElement.value;

  if (todoItem && todoDate) {
    todoList.push({ item: todoItem, dueDate: todoDate });
    inputElement.value = '';
    dateElement.value = '';
    displayItems();
  } else {
    alert('Please enter both a todo item and a due date.');
  }
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  displayItems();
}

function displayItems() {
  const newHtml = todoList
    .map(({ item, dueDate }, index) => `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class='btn-delete' onclick="deleteTodo(${index});"> Delete </button>
    `)
    .join('');

  containerElement.innerHTML = newHtml;
}
