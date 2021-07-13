export function addTask() {
  return {
    type: 'addTask',
  };
}

export function updateTaskTitle(taskTitle) {
  return {
    type: 'updateTaskTitle',
    payload: {
      taskTitle,
    },
  };
}
