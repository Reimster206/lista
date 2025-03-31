class Todo {
    id: number;
    task: string;
    completed: boolean;
  
    constructor(id: number, task: string) {
      this.id = id;
      this.task = task;
      this.completed = false;
    }
  }
  
  class TodoList {
    private todos: Todo[] = [];
    private nextId: number = 1;
  
    addTask(task: string): void {
      const newTodo = new Todo(this.nextId++, task);
      this.todos.push(newTodo);
      this.render();
    }
  
    removeTask(id: number): void {
      this.todos = this.todos.filter(todo => todo.id !== id);
      this.render();
    }
  
    toggleTask(id: number): void {
      const todo = this.todos.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
        this.render();
      }
    }
  
    render(): void {
        const todoListElement = document.getElementById('todoList') as HTMLUListElement;
        todoListElement.innerHTML = '';
    
        this.todos.forEach(todo => {
          const li = document.createElement('li');
          li.classList.toggle('completed', todo.completed);
    
          li.innerHTML = `
            <div class="task">${todo.task}</div>
            <div class="buttons">
              <button onclick="todoList.toggleTask(${todo.id})">${todo.completed ? 'Oznacz jako nieukończone' : 'Oznacz jako ukończone'}</button>
              <button onclick="todoList.removeTask(${todo.id})">Usuń</button>
            </div>
          `;
          todoListElement.appendChild(li);
        });
      }
  }
  
  // Inicjalizacja listy zadań
  const todoList = new TodoList();
  
  const addTaskButton = document.getElementById('addTaskButton') as HTMLButtonElement;
  const taskInput = document.getElementById('taskInput') as HTMLInputElement;
  
  addTaskButton.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task) {
      todoList.addTask(task);
      taskInput.value = '';
    }
  });
  