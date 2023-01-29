import { toDoTasks } from './index.js'; // eslint-disable-line

const addItem = () => {
  const todoData = document.querySelector('.newTodo').value;
  if (todoData.trim() === '') {
    return;
  }
  toDoTasks.push({ description: `${todoData}`, completed: false, index: toDoTasks.length + 1 });
  localStorage.setItem('newTodo', JSON.stringify(toDoTasks));
  window.location.reload();
  document.querySelector('.newTodo').value = '';
};

document.querySelector('.fa-angle-down').addEventListener('click', addItem);
document.querySelector('.newTodo').addEventListener('keydown', (e) => {
  if(e.code === 'Enter'){(addItem())};
});
