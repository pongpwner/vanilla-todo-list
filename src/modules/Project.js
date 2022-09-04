const Project = function (name) {
  let tasks = [];

  return {
    tasks,
    name,
    addTask: function (task) {
      tasks.push(task);
      console.log(tasks);
    },
    removeTask: function (title) {
      tasks = tasks.filter((task) => task.title !== title);
      console.log(tasks);
    },
  };
};
export default Project;
