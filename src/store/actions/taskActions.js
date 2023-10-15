import axios from 'axios';

export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';

export const fetchTasks = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:8000/tasks'); // API endpoint
      dispatch({ type: 'FETCH_TASKS', payload: response.data });
    } 
    catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };
};

export const addTask = (task) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:8000/tasks', task); // API endpoint
      dispatch({ type: 'ADD_TASK', payload: response.data });
    } 
    catch (error) {
      console.error('Error adding task:', error);
    }
  };
}

export const deleteTask = (taskId) => {
  return async (dispatch) => {
    try {
      // make a DELETE request to API in order to delete the task by taskId
      await axios.delete(`http://localhost:8000/tasks/${taskId}`);
      dispatch({ type: 'DELETE_TASK', payload: taskId });
    } 
    catch (error) {
      console.error('Error deleting task:', error);
    }
  };
};

export const editTask = (editedTask) => {
  return {
    type: EDIT_TASK,
    payload: editedTask,
  };
};
