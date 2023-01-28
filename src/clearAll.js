import { toDoTasks } from './index.js'; // eslint-disable-line

const clearAll = document.querySelector('.clearAll');
clearAll.addEventListener('click', () => {
  const filteredData = toDoTasks.filter((e) => e.completed === false);
  localStorage.setItem('newTodo', JSON.stringify(filteredData));
  window.location.reload();
});