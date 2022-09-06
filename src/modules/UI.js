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
  LABEL1.setAttribute("for", "title");
  LABEL1.textContent = "title:";
  const INPUT1 = document.createElement("input");
  INPUT1.setAttribute("id", "title");
  INPUT1.type = "text";
  LI1.appendChild(LABEL1);
  LI1.appendChild(INPUT1);

  const LI2 = document.createElement("li");
  const LABEL2 = document.createElement("label");
  LABEL2.setAttribute("for", "desription");
  LABEL2.textContent = "description:";
  const INPUT2 = document.createElement("input");
  INPUT2.setAttribute("id", "desription");
  INPUT2.type = "text";
  LI2.appendChild(LABEL2);
  LI2.appendChild(INPUT2);

  const LI3 = document.createElement("li");
  const LABEL3 = document.createElement("label");
  LABEL3.setAttribute("for", "due-date");
  LABEL3.textContent = "due date:";
  const INPUT3 = document.createElement("input");
  INPUT3.setAttribute("id", "due-date");
  INPUT3.type = "text";
  LI3.appendChild(LABEL3);
  LI3.appendChild(INPUT3);

  const LI4 = document.createElement("li");
  const LABEL4 = document.createElement("label");
  LABEL4.setAttribute("for", "priority");
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
    //append tasks to the dom
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

  //Project form
  const PROJECT_FORM = document.createElement("form");
  PROJECT_FORM.classList.add("project-form");

  const PROJECT_FORM_TITLE = document.createElement("h1");
  PROJECT_FORM_TITLE.textContent = "New Project";
  PROJECT_FORM.appendChild(PROJECT_FORM_TITLE);
  const PROJECT_FORM_SECTION = document.createElement("div");
  PROJECT_FORM_SECTION.classList.add("form-section");
  PROJECT_FORM.appendChild(PROJECT_FORM_SECTION);

  PROJECT_FORM_SECTION;

  const PROJECT_FORM_LABEL = document.createElement("label");
  PROJECT_FORM_LABEL.textContent = "Project Name:";
  PROJECT_FORM_LABEL.setAttribute("for", "project-name");
  const PROJECT_FORM_INPUT = document.createElement("input");
  PROJECT_FORM_INPUT.type = "text";
  PROJECT_FORM_INPUT.setAttribute("id", "project-name");

  const PROJECT_SUBMIT = document.createElement("button");
  PROJECT_SUBMIT.type = "buton";
  PROJECT_SUBMIT.textContent = "Submit";
  //todo add event listener to add project
  PROJECT_SUBMIT.addEventListener("click", () => {
    event.preventDefault();
    let newProject = Project(PROJECT_FORM_INPUT.value);
    TodoList.addProject(newProject);
    removeAllChildNodes(PROJECT_LIST);
    addProjectToUI();
    PROJECT_FORM.reset();
  });

  PROJECT_FORM_SECTION.appendChild(PROJECT_FORM_LABEL);
  PROJECT_FORM_SECTION.appendChild(PROJECT_FORM_INPUT);
  PROJECT_FORM_SECTION.appendChild(PROJECT_SUBMIT);

  //project list

  const PROJECT_LIST = document.createElement("ul");
  //helper functions

  //add projects to ui
  function addProjectToUI() {
    TodoList.todoList.forEach((project) => {
      let li = document.createElement("li");
      li.textContent = project.name;
      PROJECT_LIST.appendChild(li);

      let removeButton = document.createElement("button");
      removeButton.textContent = "remove";
      li.appendChild(removeButton);
      removeButton.addEventListener("click", () => {
        //TODO
        //fix
        TodoList.removeProject(project.name);
        removeAllChildNodes(PROJECT_LIST);
        addProjectToUI();
      });
    });
  }

  //add tasks to ui
  //todo add which project to the parameter
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
      PAGE_CONTENT.appendChild(PROJECT_FORM);
      PAGE_CONTENT.appendChild(PROJECT_LIST);
      addProjectToUI();
    },
  };
})();

export default UI;
