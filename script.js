const todoNotesInput = document.querySelector("input[name='todo-notes__input']");
const newNotes = document.querySelector("ul");
const lists = document.querySelectorAll("li");
const spans = document.getElementsByTagName("span");
const saveNotes = document.querySelector(".todo-notes__button-save");;
const clearnotes = document.querySelector(".todo-notes__button-clear");

loadTodoNotes();

function deleteTodoNotes() {
    for (let span of spans) {
        span.addEventListener("click", function() {

        });
    }
}

function loadTodoNotes() {
    if (localStorage.getItem('notes')) {
        newNotes.innerHTML = localStorage.getItem('notes');
        const dateItem = document.querySelector("input[type='date']");
        dateItem.value = dateItem.getAttribute('data-date');
        //newNotes.innerHTML = localStorage.getItem('dateValue');
        deleteTodoNotes();
    }
}

todoNotesInput.addEventListener("keypress", function(keyPressed) {
    if (keyPressed.which === 13) {
        //creating lists and span when enter is clicked
        const lists = document.createElement("li");
        const spanElement = document.createElement("span");
        const dateInput = document.createElement("input");
        const checkboxInput = document.createElement("input");

        const newTodo = this.value;
        this.value = " ";

        dateInput.setAttribute("type", "date");
        dateInput.setAttribute("placeholder", "Date");
        dateInput.setAttribute("value", "");
        dateInput.classList.add('todo-notes__date');
        lists.classList.add('todo-notes__lists');
        spanElement.classList.add('todo-notes__span');
        checkboxInput.classList.add('todo-notes__checkbox');
        checkboxInput.setAttribute("name", "finished");
        checkboxInput.setAttribute("type", "checkbox");
        spanElement.append(checkboxInput);
        newNotes.appendChild(lists).append(spanElement, newTodo);
        lists.append(dateInput);
        deleteTodoNotes();

    }

});


saveNotes.addEventListener('click', function() {
    const dateItem = document.querySelector("input[type='date']");
    const dateInputValue = dateItem.value;
    dateItem.setAttribute('data-date', dateInputValue);
    localStorage.setItem('notes', newNotes.innerHTML);

});


clearnotes.addEventListener('click', function() {
    newNotes.innerHTML = "";
    localStorage.removeItem('notes', newNotes.innerHTML);
});

const checkedItem = document.querySelector("input[type='checkbox']");
console.log(checkedItem);
checkedItem.addEventListener('click', function() {

    console.log(checkedItem)
    if (event.currentTarget.checked) {
        checkedItem.setAttribute("checked", "checked");
    } else {
        checkedItem.removeAttribute("checked", "checked");
    }
});