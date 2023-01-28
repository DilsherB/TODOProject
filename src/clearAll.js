import { toDoTasks } from './index.js';

const clearAll = document.querySelector('.clearAll');
console.log(clearAll);
clearAll.addEventListener('click', () => {
    const filteredData = toDoTasks.filter((e) => e.completed === false);
    localStorage.setItem('newTodo', JSON.stringify(filteredData));
    window.location.reload();
});
