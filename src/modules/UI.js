import "../styles/styles.css";
import TodoList from "./TodoList";
import Task from "./Task";
import Project from "./Project";
import Controller from "./Controller";
import Storage from "./storage";

//import TodoList from "./TodoList";
const UI = (function () {
  let currentProject = TodoList.todoList[0];

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
  INPUT3.type = "date";
  LI3.appendChild(LABEL3);
  LI3.appendChild(INPUT3);

  const LI4 = document.createElement("li");
  const LABEL4 = document.createElement("label");
  LABEL4.setAttribute("for", "priority");
  LABEL4.textContent = "priority:";
  const RADIO_LOW = document.createElement("input");
  const RADIO_HIGH = document.createElement("input");
  RADIO_LOW.setAttribute("id", "low");
  RADIO_HIGH.setAttribute("id", "high");
  const LOW_LABEL = document.createElement("label");
  LOW_LABEL.textContent = "low:";
  const HIGH_LABEL = document.createElement("label");
  HIGH_LABEL.textContent = "high";
  LOW_LABEL.setAttribute("for", "low");
  HIGH_LABEL.setAttribute("for", "high");
  RADIO_LOW.type = "radio";
  RADIO_LOW.value = "low";
  RADIO_LOW.name = "priority";
  RADIO_HIGH.type = "radio";
  RADIO_HIGH.name = "priority";
  RADIO_HIGH.value = "high";
  //RADIO_LOW.checked = true;
  LI4.appendChild(LABEL4);
  LI4.appendChild(LOW_LABEL);
  LI4.appendChild(RADIO_LOW);
  LI4.appendChild(HIGH_LABEL);
  LI4.appendChild(RADIO_HIGH);

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
    let priorityValue;
    let radios = document.getElementsByName("priority");
    for (let i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        // do whatever you want with the checked radio
        priorityValue = radios[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
      }
    }
    let newTask = Task(INPUT1.value, INPUT2.value, INPUT3.value, priorityValue);
    //
    //console.log(TodoList.todoList[0]);
    console.log(currentProject);
    currentProject.addTask(newTask);
    TODO_FORM.reset();
    removeAllChildNodes(TODO_LIST);

    addTaskToUI(currentProject);
    //console.log(TodoList.todoList[0]);
  });
  TODO_FORM.appendChild(SUBMIT);

  const TODO_LIST = document.createElement("ul");

  TODO_LIST.classList.add("todo-list");

  const CURRENT_PROJECT_NAME = document.createElement("h1");
  CURRENT_PROJECT_NAME.textContent = currentProject ? currentProject.name : "";
  TODO_LIST.appendChild(CURRENT_PROJECT_NAME);

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

  PROJECT_SUBMIT.addEventListener("click", (event) => {
    //add project to dom
    event.preventDefault();
    let newProject = Project(PROJECT_FORM_INPUT.value);
    console.log(newProject);
    TodoList.addProject(newProject);
    removeAllChildNodes(PROJECT_LIST);
    addProjectToUI();
    PROJECT_FORM.reset();
    console.log(TodoList.todoList);
  });

  PROJECT_FORM_SECTION.appendChild(PROJECT_FORM_LABEL);
  PROJECT_FORM_SECTION.appendChild(PROJECT_FORM_INPUT);
  PROJECT_FORM_SECTION.appendChild(PROJECT_SUBMIT);

  //project list

  const PROJECT_LIST = document.createElement("ul");
  PROJECT_LIST.classList.add("project-list");
  //helper functions

  //add projects to ui
  function addProjectToUI() {
    if (TodoList.todoList) {
      console.log(TodoList.todoList);
      TodoList.todoList.forEach((project) => {
        let li = document.createElement("li");
        li.textContent = project.name;
        li.addEventListener("click", () => {
          currentProject = project;
          CURRENT_PROJECT_NAME.textContent = currentProject.name;
          removeAllChildNodes(TODO_LIST);
          addTaskToUI(currentProject);
          console.log(currentProject);
        });
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
  }

  //add tasks to ui
  //todo add which project to the parameter
  function addTaskToUI(project) {
    //updates dom
    //TodoList.todoList[0]
    TODO_LIST.appendChild(CURRENT_PROJECT_NAME);
    project.tasks.forEach((task) => {
      let li = document.createElement("li");
      function toggleTaskDescription() {
        //let taskDescription = document.querySelector(".description");
        //console.log(taskDescription);
        if (li.contains(description)) {
          li.removeChild(description);
        } else {
          li.appendChild(description);
        }
      }
      li.addEventListener("click", () => toggleTaskDescription());
      TODO_LIST.appendChild(li);
      let title = document.createElement("div");
      title.textContent = task.title;
      let description = document.createElement("div");
      description.textContent = task.description;
      description.classList.add("description");
      let date = document.createElement("div");
      date.textContent = task.dueDate;
      let priority = document.createElement("div");
      priority.textContent = task.priority;
      li.appendChild(title);
      //li.appendChild(description);
      li.appendChild(date);
      li.appendChild(priority);

      let removeButton = document.createElement("button");
      removeButton.textContent = "remove";
      li.appendChild(removeButton);
      removeButton.addEventListener("click", () => {
        //fix
        project.removeTask(task.title);
        removeAllChildNodes(TODO_LIST);
        addTaskToUI(currentProject);
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
      TodoList.todoList = Storage.getTodoList();
      console.log(TODO_LIST.todoList);
      console.log(currentProject);
      PAGE_CONTENT.appendChild(TODO_FORM);
      PAGE_CONTENT.appendChild(TODO_LIST);
      PAGE_CONTENT.appendChild(PROJECT_FORM);
      PAGE_CONTENT.appendChild(PROJECT_LIST);

      addProjectToUI();
      addTaskToUI(currentProject);
    },
  };
})();

export default UI;
