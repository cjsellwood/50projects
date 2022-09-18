const todoForm = document.getElementById("todo-form")! as HTMLFormElement;
const todoInput = document.getElementById("todo-input")! as HTMLInputElement;
const todoList = document.getElementById("todo-list")! as HTMLUListElement;

interface Todo {
  text: string;
  completed: boolean;
}

const getStoredTodos = () => {
  const stored = localStorage.getItem("todos");
  if (stored) {
    return JSON.parse(stored);
  } else {
    return [];
  }
};

const addToList = (text: string, completed: boolean = false) => {
  const todoEl = document.createElement("li");
  todoEl.textContent = text;
  if (completed) {
    todoEl.classList.add("completed");
  }
  todoList.append(todoEl);
};

const initTodos = () => {
  const todos = getStoredTodos();
  console.log(todos);
  todos.forEach((todo: Todo) => {
    addToList(todo.text, todo.completed);
  });
};

initTodos();

const newTodo = (e: SubmitEvent) => {
  e.preventDefault();

  if (todoInput.value === "") {
    return;
  }

  addToList(todoInput.value);

  storeTodo(todoInput.value);

  todoInput.value = "";
};

const storeTodos = (todos: Todo[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const storeTodo = (text: string) => {
  const todos = getStoredTodos();
  todos.push({ text, completed: false });
  storeTodos(todos);
};

todoForm.addEventListener("submit", newTodo);

const storeCompletedStatus = (index: number) => {
  const todos = getStoredTodos();
  todos[index].completed = !todos[index].completed;
  storeTodos(todos);
};

const toggleCompleted = (e: MouseEvent) => {
  const target = e.target! as HTMLLIElement;
  target.classList.toggle("completed");

  const index = [...target.parentElement!.children].indexOf(target);
  storeCompletedStatus(index);
};

todoList.addEventListener("click", toggleCompleted);

const removeStoredTodo = (index: number) => {
  const todos = getStoredTodos();
  todos.splice(index, 1);
  storeTodos(todos);
};

const deleteTodo = (e: MouseEvent) => {
  e.preventDefault();
  const target = e.target! as HTMLLIElement;

  
  const index = [...target.parentElement!.children].indexOf(target);
  removeStoredTodo(index);
  
  target.remove();
};

todoList.addEventListener("contextmenu", deleteTodo);
