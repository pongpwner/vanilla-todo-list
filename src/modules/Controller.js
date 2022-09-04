import Task from "./Task";
import TodoList from "./TodoList";
import Projects from "./Project";
const Controller = (function () {
  //let currentList;

  return {
    addTask: function (project, task) {
      project.push(task);
    },
  };
})();

export default Controller;
