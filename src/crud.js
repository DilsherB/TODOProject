import { toDoTasks } from './index.js'; // eslint-disable-line

document.querySelector('.fa-angle-down').addEventListener('click', () => {
  const todoData = document.querySelector('.newTodo').value;
  if (todoData.trim() === '') {
    return;
  }
  toDoTasks.push({ description: `${todoData}`, completed: false, index: toDoTasks.length+1 });
  localStorage.setItem('newTodo', JSON.stringify(toDoTasks));
  window.location.reload();
  document.querySelector('.newTodo').value = '';
});
