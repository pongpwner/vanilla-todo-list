import Task from "./Task";
import Project from "./Project";
const TodoList = (function () {
  const defaultProject = Project("default");
  const todoList = [defaultProject];

  return {
    todoList,
    addProject: function (project) {
      this.todoList.push(project);
    },

    removeProject: function (name) {
      this.todoList = this.todoList.filter((project) => project.name !== name);
      console.log(this);
    },
  };
})();

export default TodoList;
