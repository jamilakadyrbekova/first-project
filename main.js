let input = document.querySelector('.todo__input');
let todoBtn = document.querySelector('.submit');
let list = document.querySelector('.todo__list');

let todoList;
localStorage.todoList ? todoList = JSON.parse(localStorage.getItem('todoList')) : todoList = [];


function todo(id, task){
    this.id = id;
    this.task = task;
    this.checked = false;
}

function overwriteList(){
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

function createItem(item, index) {
    return ` <li class="todo__item">
    <input id="${item.id}" type="checkbox" class="checkbox__input">
    <label for="${item.id}" class="checkbox__label">${item.task}</label>
</li>`
}

function overwriteList(){
    list.innerHTML ="";
    if(todoList.length > 0){
        todoList.map((item, index) => {
           list.innerHTML += createItem(item, index)
        })
    }
}
overwriteList()

todoBtn.addEventListener('click', function(){
    todoList.push(new todo(Math.floor(Math.random() * 5000), input.value))
    
    overwriteList();
    input.value = ""
})