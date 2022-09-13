const todoText = document.getElementById('todo');
const addBtn = document.getElementById('btn');
const todoList = document.getElementById('todolist');

addBtn.onclick = () => addItem();

function addItem() {
    let todoItem = todoText.value;
    let todoItems = localStorage.getItem('todoList');

    //se não tiver nd
    todoItems == null ? localStorage.getItem('todoList', todoItem) : localStorage.getItem('todoList', todoItems + ',' + todoItem);
    todoText.value = '';
}
