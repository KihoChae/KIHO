const list = document.getElementById('list');
const createBtn = document.getElementById('create-btn');

let todos = [];

createBtn.addEventListener('click', createNewTodo);

function createNewTodo() {
    const item = {
        id : new Date().getTime(),
        Text: "",
        complete: false
    }

    todos.unshift(item);

    const {itemEl, inputEl} = createTodoElement(item);

    list.prepend(itemEl);

    inputEl.removeAttribute('disabled');
    inputEl.focus();
    saveTolocalStorage(itemEl);
}

function createTodoElement(item) {
    const itemEl = document.createElement('div');
    itemEl.classList.add('item');

    const checkboxEl = document.createElement('input');
    checkboxEl.type = 'checkbox';
    checkboxEl.checked = item.complete;

    if(item.complete) {
        itemEl.classList.add('complete');
    }

    const inputEl = document.createElement('input');
    inputEl.type = 'text';
    inputEl.value = item.Text;

    inputEl.setAttribute('disabled', '');

    const actionEl = document.createElement('div');
    actionEl.classList.add('action');

    const editBtnEl = document.createElement('button');
    editBtnEl.classList.add('material-icons');
    editBtnEl.innerText = 'edit';

    const removeBtnEl = document.createElement('button');
    removeBtnEl.classList.add('material-icons','remove-btn');
    removeBtnEl.innerText = 'remove-circles';

    inputEl.addEventListener('input', () => {
        item.Text = inputEl.value;
    })

    checkboxEl.addEventListener('change', () => {
    item.complete = checkboxEl.checked;

    if(item.complete) {
        itemEl.classList.add('complete');
    } else {
        itemEl.classList.remove('complete');
    }
    saveTolocalStorage();
    })
    inputEl.addEventListener('blur', () => {
        inputEl.setAttribute('disabled', '');
        saveToLocalStorage();
    })

    editBtnEl.addEventListener('click', () => {
        inputEl.removeAttribute('disabled');
        inputEl.focus();
    })

    removeBtnEl.addEventListener('click', () => {
        todos = todos.filter(t=>t.id !== item.id);
        itemEl.remove();
        saveToLocalStorage();
    })

    actionEl.append(editBtnEl);
    actionEl.append(removeBtnEl);

    itemEl.appendChild(checkboxEl);
    itemEl.appendChild(inputEl);

    itemEl.append(actionEl);

    return {itemEl, inputEl, removeBtnEl, editBtnEl};

}

function saveToLocalStorage() {
    const data = JSON.stringify(todos);
    window.localStorage.setItem('my_todos', data);
}

function loadFromLocalStorage() {
    const data = window.localStorage.getItem('my_todos');
    if (data) {
        todos = JSON.parse(data);
    }
}


function displayTodos() {
    loadFromLocalStorage();
    for (let index=0; index < todos.length; index++) {
        const item = todos[index];
        const {itemEl} = createTodoElement(item);

        list.append(itemEl)
    }
}

displayTodos();
