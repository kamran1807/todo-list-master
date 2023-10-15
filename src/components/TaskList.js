import React, { useEffect, useState } from 'react';
import { Text, Button } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux'; // to access Redux store and dispatch actions
import { fetchTasks } from '../store/actions/taskActions';
import { deleteTask } from '../store/actions/taskActions';
import { editTask } from '../store/actions/taskActions';
import EditTaskForm from './EditTaskForm';

const TaskList = ({ task }) => {

  const [editingTask, setEditingTask] = useState(null);

  // fetch tasks from Redux store 
  const tasks = useSelector((state) => state.tasks.tasks); 

  // hook that allows for sending or dispatching an action to store  
  const dispatch = useDispatch(); 

  useEffect(() => {
    // fetch tasks when the component mounts
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleDelete = (taskId) => {
    // dispatch the deleteTask action with the taskId
    dispatch(deleteTask(taskId));
  };

  const handleEdit = (taskId) => {
    // set the task to be edited
    setEditingTask(taskId);
  };

  return (
    <div style={{ marginBottom: 50 }}>
      <Text fontSize="2xl" color="primary.500">Task List</Text>
      {tasks.length === 0 ? (
        <Text fontSize="2xl" color="primary.500">No tasks to display.</Text>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <strong><Text fontSize="2xl" color="primary.500">{task.title}</Text></strong>
              <Text fontSize="xl" color="primary.500">{task.description}</Text>
              <Text fontSize="xl" color="primary.500">Status: {task.completed ? 'Completed' : 'Not Completed'}</Text>
              <Button
                colorScheme="red"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </Button>
              <Button
                colorScheme="blue"
                onClick={() => handleEdit(task.id)}
              >
                Edit
              </Button>
            </li>
          ))}

          {editingTask && (
            <EditTaskForm
              task={tasks.find((task) => task.id === editingTask)}
              onSave={(editedTask) => {
                // dispatch the 'editTask' action to update the task in the store
                dispatch(editTask(editedTask));
                setEditingTask(null); // clear the editing state
              }}
              onCancel={() => setEditingTask(null)}
            />
          )}

        </ul>
      )}
    </div>
  );
};

export default TaskList;
