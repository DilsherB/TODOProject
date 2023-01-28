import './style.css';

const toDoTasks = [
  { description: 'first task', completed: false, index: 1 },
  { description: 'second task', completed: false, index: 2 },
  { description: 'third task', completed: true, index: 3 },
];

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
            <li class="deleteIcon"> <span><input type="checkbox" id="${task.index}"> <span class="lm" contenteditable="true"> ${task.description}</span></span><i class="fa-solid fa-ellipsis-vertical dots"></i><i class="fa-solid fa-trash-can trash hidden"></i></li>
        `;
  }
});

const trash = document.querySelectorAll('.trash');
const dots = document.querySelectorAll('.dots');
const hideShow = document.querySelectorAll('.deleteIcon');

for (let i = 0; i < hideShow.length; i+=1) {
  hideShow[i].addEventListener('mouseover', () => {
    trash[i].classList.remove('hidden');
    dots[i].classList.add('hidden');
  });
  hideShow[i].addEventListener('mouseout', () => {
    trash[i].classList.add('hidden');
    dots[i].classList.remove('hidden');
  });
}