const Project = function (name) {
  let tasks = [];

  return {
    tasks,
    name,
    addTask: function (task) {
      this.tasks.push(task);
      console.log(tasks);
    },
    removeTask: function (title) {
      this.tasks = this.tasks.filter((task) => task.title !== title);
      console.log(this);
    },
  };
};
export default Project;
