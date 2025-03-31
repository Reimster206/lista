var Todo = /** @class */ (function () {
    function Todo(id, task) {
        this.id = id;
        this.task = task;
        this.completed = false;
    }
    return Todo;
}());
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todos = [];
        this.nextId = 1;
    }
    // Dodaj zadanie
    TodoList.prototype.addTask = function (task) {
        var newTodo = new Todo(this.nextId++, task);
        this.todos.push(newTodo);
        this.render();
    };
    // Usuń zadanie
    TodoList.prototype.removeTask = function (id) {
        this.todos = this.todos.filter(function (todo) { return todo.id !== id; });
        this.render();
    };
    // Zmień status zadania na ukończone/nieukończone
    TodoList.prototype.toggleTask = function (id) {
        var todo = this.todos.find(function (todo) { return todo.id === id; });
        if (todo) {
            todo.completed = !todo.completed;
            this.render();
        }
    };
    // Wyświetl listę zadań
    TodoList.prototype.render = function () {
        var todoListElement = document.getElementById('todoList');
        todoListElement.innerHTML = '';
        this.todos.forEach(function (todo) {
            var li = document.createElement('li');
            li.classList.toggle('completed', todo.completed);
            li.innerHTML = "\n            <div class=\"task\">".concat(todo.task, "</div>\n            <div class=\"buttons\">\n              <button onclick=\"todoList.toggleTask(").concat(todo.id, ")\">").concat(todo.completed ? 'Oznacz jako nieukończone' : 'Oznacz jako ukończone', "</button>\n              <button onclick=\"todoList.removeTask(").concat(todo.id, ")\">Usu\u0144</button>\n            </div>\n          ");
            todoListElement.appendChild(li);
        });
    };
    return TodoList;
}());
// Inicjalizacja listy zadań
var todoList = new TodoList();
var addTaskButton = document.getElementById('addTaskButton');
var taskInput = document.getElementById('taskInput');
addTaskButton.addEventListener('click', function () {
    var task = taskInput.value.trim();
    if (task) {
        todoList.addTask(task);
        taskInput.value = '';
    }
});
