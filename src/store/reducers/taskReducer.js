import { DELETE_TASK } from '../actions/taskActions';

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'EDIT_TASK':
      const { payload: editedTask } = action;
      const updatedTasksEdited = state.tasks.map((task) => {
        if (task.id === editedTask.id) {
          return editedTask;
        }
        return task;
      });
      return {
        ...state,
        tasks: updatedTasksEdited,
      };
    case DELETE_TASK:
      // filter out the task with the specified ID
      const updatedTasksDeleted = state.tasks.filter((task) => task.id !== action.payload);
      return {
        ...state,
        tasks: updatedTasksDeleted,
      };
    case 'FETCH_TASKS':
      // handle fetching tasks from an API and storing in state
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
