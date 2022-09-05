import "../styles/styles.css";
import TodoList from "./TodoList";
import Task from "./Task";
import Project from "./Project";
import Controller from "./Controller";
//import TodoList from "./TodoList";
const UI = (function () {
  const PAGE_CONTENT = document.querySelector("#content");
  //todo create form
  const TODO_FORM = document.createElement("form");
  TODO_FORM.classList.add("todo-form");

  const FORM_TITLE = document.createElement("h1");
  FORM_TITLE.textContent = "New Task";
  TODO_FORM.appendChild(FORM_TITLE);
  const FORM_SECTION = document.createElement("ul");
  FORM_SECTION.classList.add("form-section");
  TODO_FORM.appendChild(FORM_SECTION);

  const LI1 = document.createElement("li");
  const LABEL1 = document.createElement("label");
  LABEL1.for = "title";
  LABEL1.textContent = "title:";
  const INPUT1 = document.createElement("input");
  INPUT1.setAttribute("id", "title");
  INPUT1.type = "text";
  LI1.appendChild(LABEL1);
  LI1.appendChild(INPUT1);

  const LI2 = document.createElement("li");
  const LABEL2 = document.createElement("label");
  LABEL2.for = "description";
  LABEL2.textContent = "description:";
  const INPUT2 = document.createElement("input");
  INPUT2.setAttribute("id", "desription");
  INPUT2.type = "text";
  LI2.appendChild(LABEL2);
  LI2.appendChild(INPUT2);

  const LI3 = document.createElement("li");
  const LABEL3 = document.createElement("label");
  LABEL3.for = "due-date";
  LABEL3.textContent = "due date:";
  const INPUT3 = document.createElement("input");
  INPUT3.setAttribute("id", "due-date");
  INPUT3.type = "text";
  LI3.appendChild(LABEL3);
  LI3.appendChild(INPUT3);

  const LI4 = document.createElement("li");
  const LABEL4 = document.createElement("label");
  LABEL4.for = "priority";
  LABEL4.textContent = "priority:";
  const INPUT4 = document.createElement("input");
  INPUT4.setAttribute("id", "priority");
  INPUT4.type = "text";
  LI4.appendChild(LABEL4);
  LI4.appendChild(INPUT4);

  //append li to ul tasklist
  FORM_SECTION.appendChild(LI1);
  FORM_SECTION.appendChild(LI2);
  FORM_SECTION.appendChild(LI3);
  FORM_SECTION.appendChild(LI4);

  //submit button
  const SUBMIT = document.createElement("button");
  SUBMIT.type = "buton";
  SUBMIT.textContent = "Submit";
  SUBMIT.addEventListener("click", (event) => {
    event.preventDefault();
    let newTask = Task(INPUT1.value, INPUT2.value, INPUT3.value, INPUT4.value);
    //
    console.log(TodoList.todoList[0]);
    TodoList.todoList[0].addTask(newTask);
    TODO_FORM.reset();
    removeAllChildNodes(TODO_LIST);
    addTaskToUI();
    console.log(TodoList.todoList[0]);
  });
  TODO_FORM.appendChild(SUBMIT);

  const TODO_LIST = document.createElement("ul");
  TODO_LIST.classList.add("todo-list");

  //todo get todo list and append tasks to the list

  //helper functions
  function addTaskToUI() {
    //updates dom

    TodoList.todoList[0].tasks.forEach((task) => {
      let li = document.createElement("li");
      li.textContent = task.title;
      TODO_LIST.appendChild(li);

      let removeButton = document.createElement("button");
      removeButton.textContent = "remove";
      li.appendChild(removeButton);
      removeButton.addEventListener("click", () => {
        //fix
        TodoList.todoList[0].removeTask(task.title);
        removeAllChildNodes(TODO_LIST);
        addTaskToUI();
      });
    });
  }

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  return {
    loadUI: function () {
      PAGE_CONTENT.appendChild(TODO_FORM);
      PAGE_CONTENT.appendChild(TODO_LIST);
    },
  };
})();

export default UI;
