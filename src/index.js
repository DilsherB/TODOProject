import './style.css';
import './crud.js';
import './clearAll.js';

const toDoTasks = JSON.parse(localStorage.getItem('newTodo')) || [];
const ui = () => {
  const dynamicData = document.querySelector('.dynamicData');
  toDoTasks.forEach((task) => {
    if (task.completed) {
      dynamicData.innerHTML += `
            <li class="deleteIcon"> 
                <span><input type="checkbox" id="${task.index}" checked> 
                    <span class="lm strike" contenteditable="true"> ${task.description}</span>
                </span>
                <i class="fa-solid fa-ellipsis-vertical dots"></i>
                <i class="fa-solid fa-trash-can trash hidden"></i>
            </li>
        `;
    } else {
      dynamicData.innerHTML += `
            <li class="deleteIcon">
              <span><input type="checkbox" id="${task.index}">
                <span class="lm" contenteditable="true"> ${task.description}</span>
              </span>
              <i class="fa-solid fa-ellipsis-vertical dots"></i>
              <i class="fa-solid fa-trash-can trash hidden"></i>
            </li>
        `;
    }
  });
};
toDoTasks.forEach((e, i) => { e.index = i + 1; }); // re-asign index to remaining items
ui();
const trash = document.querySelectorAll('.trash');
const dots = document.querySelectorAll('.dots');
const hideShow = document.querySelectorAll('.deleteIcon');
const checkBox = document.querySelectorAll('input[type="checkbox"]');
const currentTask = document.querySelectorAll('.lm');

for (let i = 0; i < hideShow.length; i += 1) {
  hideShow[i].addEventListener('mouseover', () => {
    trash[i].classList.remove('hidden');
    dots[i].classList.add('hidden');
  });
  hideShow[i].addEventListener('mouseout', () => {
    trash[i].classList.add('hidden');
    dots[i].classList.remove('hidden');
  });
  trash[i].addEventListener('click', () => {
    toDoTasks.splice(i, 1);
    localStorage.setItem('newTodo', JSON.stringify(toDoTasks));
    window.location.reload();
  });
  checkBox[i].addEventListener('input', () => {
    if (toDoTasks[i].completed) {
      toDoTasks[i].completed = false;
      currentTask[i].classList.remove('strike');
    } else {
      toDoTasks[i].completed = true;
      currentTask[i].classList.add('strike');
    }
    localStorage.setItem('newTodo', JSON.stringify(toDoTasks));
  });
  currentTask[i].addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      toDoTasks[i].description = currentTask[i].innerHTML;
      localStorage.setItem('newTodo', JSON.stringify(toDoTasks));
      window.location.reload();
    }
  });
}

export { toDoTasks }; // eslint-disable-line