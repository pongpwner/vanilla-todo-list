import Storage from "./storage";
import TodoList from "./TodoList";
const Project = function (name) {
  let tasks = [];

  return {
    tasks,
    name,
    addTask: function (task) {
      this.tasks.push(task);
      console.log(TodoList.todoList);
      console.log(tasks);
      Storage.saveTodoList(TodoList.todoList);
    },
    removeTask: function (title) {
      this.tasks = this.tasks.filter((task) => task.title !== title);
      console.log(this);
      Storage.saveTodoList(TodoList.todoList);
    },
  };
};
export default Project;
