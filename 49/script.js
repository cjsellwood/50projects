"use strict";
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const getStoredTodos = () => {
    const stored = localStorage.getItem("todos");
    if (stored) {
        return JSON.parse(stored);
    }
    else {
        return [];
    }
};
const addToList = (text, completed = false) => {
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
    todos.forEach((todo) => {
        addToList(todo.text, todo.completed);
    });
};
initTodos();
const newTodo = (e) => {
    e.preventDefault();
    if (todoInput.value === "") {
        return;
    }
    addToList(todoInput.value);
    storeTodo(todoInput.value);
    todoInput.value = "";
};
const storeTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
};
const storeTodo = (text) => {
    const todos = getStoredTodos();
    todos.push({ text, completed: false });
    storeTodos(todos);
};
todoForm.addEventListener("submit", newTodo);
const storeCompletedStatus = (index) => {
    const todos = getStoredTodos();
    todos[index].completed = !todos[index].completed;
    storeTodos(todos);
};
const toggleCompleted = (e) => {
    const target = e.target;
    target.classList.toggle("completed");
    const index = [...target.parentElement.children].indexOf(target);
    storeCompletedStatus(index);
};
todoList.addEventListener("click", toggleCompleted);
const removeStoredTodo = (index) => {
    const todos = getStoredTodos();
    todos.splice(index, 1);
    storeTodos(todos);
};
const deleteTodo = (e) => {
    e.preventDefault();
    const target = e.target;
    const index = [...target.parentElement.children].indexOf(target);
    removeStoredTodo(index);
    target.remove();
};
todoList.addEventListener("contextmenu", deleteTodo);
