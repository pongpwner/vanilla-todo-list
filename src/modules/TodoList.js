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
  };
})();

export default TodoList;
