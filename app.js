const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');
const start = document.querySelector('.start');
const progress = document.querySelector('.progress');
const done = document.querySelector('.done');
const add = document.querySelector('.add');

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

placeholders.forEach((placeholder) => {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
});

function addTask() {
    add.addEventListener('click', create);
}
function create() {    
    const newDiv = placeholders[0].appendChild(document.createElement('div'));
    
    newDiv.innerHTML = `<div class="item" draggable="true">Задача №${i}</div>`;
}

addTask();

function dragStart(event) {
    event.target.classList.add('hold');
    setTimeout(() => {
        event.target.classList.add('hide');
    }, 0);
}

function dragEnd(event) {
    event.target.classList.remove('hold', 'hide');
}

function dragover(event) {
    event.preventDefault();
}
function dragenter(event) {
    event.target.classList.add('hovered');   
}
function dragleave(event) {
    event.target.classList.remove('hovered');
}
function dragdrop(event) {
    event.target.append(item);
    event.target.classList.remove('hovered');
}