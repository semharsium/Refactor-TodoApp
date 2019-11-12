const todoNotesInput = document.querySelector("input[name='todo-notes__input']");
const newNotes = document.querySelector("ul");
const lists = document.querySelectorAll("li");
const i = document.getElementsByTagName("i");
const saveNotes = document.querySelector(".todo-notes__button-save");;
const clearnotes = document.querySelector(".todo-notes__button-clear");

loadTodoNotes();

function deleteTodoNotes() {
    for (let element of i) {
        element.addEventListener("click", function() {
            element.parentElement.parentElement.remove();
        });
    }
}

function loadTodoNotes() {
    if (localStorage.getItem('notes')) {
        newNotes.innerHTML = localStorage.getItem('notes');
        const dateItem = document.querySelectorAll("input.todo-notes__date");
        for (var i = 0; i < dateItem.length; i++) {
            dateItem[i].value = dateItem[i].getAttribute('data-date');
        }

        const checkedItem = document.querySelectorAll("input[type='checkbox']");
        for (var i = 0; i < checkedItem.length; i++) {
            checkedItem[i].checked = checkedItem[i].getAttribute("checked");
        }

        deleteTodoNotes();
    }
}

todoNotesInput.addEventListener('click', function() {
    if (this.value.length > 0) {
        //creating lists and span when mouse is clicked
        createElement();
    }

});

todoNotesInput.addEventListener('keypress', function(keypressed) {
    if (keypressed.which === 13) {
        //creating lists and span when enter is pressed
        createElement();
    }

});


saveNotes.addEventListener('click', function() {
    const dateItem = document.querySelectorAll("input.todo-notes__date");

    for (var i = 0; i < dateItem.length; i++) {
        const dateInputValue = dateItem[i].value;

        dateItem[i].setAttribute('data-date', dateInputValue);
    }

    const checkedItem = document.querySelectorAll("input[type='checkbox']");

    for (var i = 0; i < checkedItem.length; i++) {
        const checkboxValue = checkedItem[i].checked;

        if (checkedItem[i].checked) {
            checkedItem[i].setAttribute("checked", "checked");
        } else {
            checkedItem[i].removeAttribute("checked", "checked");
        }
    }


    localStorage.setItem('notes', newNotes.innerHTML);

});


clearnotes.addEventListener('click', function() {
    newNotes.innerHTML = "";
    localStorage.removeItem('notes', newNotes.innerHTML);
});

function createElement() {
    const lists = document.createElement("li");
    const spanElement = document.createElement("span");
    const dateInput = document.createElement("input");
    const checkboxInput = document.createElement("input");
    const icon = document.createElement("i");

    const newTodo = todoNotesInput.value;
    console.log(newTodo);
    todoNotesInput.value = "";

    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("placeholder", "Date");
    dateInput.classList.add('todo-notes__date');
    lists.classList.add('todo-notes__lists');
    spanElement.classList.add('todo-notes__span');
    checkboxInput.classList.add('todo-notes__checkbox');
    checkboxInput.setAttribute("name", "finished");
    checkboxInput.setAttribute("type", "checkbox");

    spanElement.append(icon);
    newNotes.appendChild(lists).append(spanElement, checkboxInput, newTodo);
    lists.append(dateInput);
    deleteTodoNotes();
}