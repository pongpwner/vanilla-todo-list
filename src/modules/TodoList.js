import Task from "./Task";
import Project from "./Project";
import Storage from "./storage";
const TodoList = (function () {
  const defaultProject = Project("default");
  //const todoList = [defaultProject];
  const todoList = Storage.getTodoList()
    ? Storage.getTodoList()
    : defaultProject;

  return {
    todoList,
    addProject: function (project) {
      this.todoList.push(project);
      Storage.saveTodoList(this.todoList);
      console.todoList;
    },

    removeProject: function (name) {
      this.todoList = this.todoList.filter((project) => project.name !== name);
      console.log(this);
      Storage.saveTodoList(this.todoList);
    },
  };
})();

export default TodoList;
