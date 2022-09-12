import TodoList from "./TodoList";
import Project from "./Project";
const Storage = (() => {
  return {
    saveTodoList: function (data) {
      localStorage.setItem("todoList", JSON.stringify(data));
      console.log("local");
    },

    getTodoList: function () {
      let localString = localStorage.getItem("todoList");
      console.log(localString);
      if (localString === null) {
        return [Project("default")];
      }
      let localObject = JSON.parse(localString);
      return localObject.map((project) => {
        return {
          ...project,
          addTask: function (task) {
            this.tasks.push(task);
            console.log(TodoList.todoList);

            Storage.saveTodoList(TodoList.todoList);
          },
          removeTask: function (title) {
            this.tasks = this.tasks.filter((task) => task.title !== title);
            console.log(this);
            Storage.saveTodoList(TodoList.todoList);
          },
        };
      });
    },
  };
})();

export default Storage;
