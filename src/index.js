import './style.css';
import './crud.js';

const toDoTasks = JSON.parse(localStorage.getItem('newTodo')) || [];
const ui = () => {
  const dynamicData = document.querySelector('.dynamicData');
  toDoTasks.forEach((task) => {
    if (task.completed) {
      dynamicData.innerHTML += `
            <li class="deleteIcon"> 
                <span><input type="checkbox" id="${task.index}" checked> 
                    <span class="lm" contenteditable="true"> ${task.description}</span>
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
}
ui();
const trash = document.querySelectorAll('.trash');
const dots = document.querySelectorAll('.dots');
const hideShow = document.querySelectorAll('.deleteIcon');

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

}

export { toDoTasks, ui };