import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
  Button,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/actions/taskActions';

const TaskForm = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    completed: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    setTask({
      title: '',
      description: '',
      completed: false,
    });
  };

  return (
    <Box maxW="sm" borderWidth="1px" rounded="lg" p={4} boxShadow="md" fontSize="2xl" color="primary.500">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            name="title"
            value={task.title}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea
            name="description"
            value={task.description}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Completed</FormLabel>
          <Checkbox
            name="completed"
            isChecked={task.completed}
            onChange={(e) =>
              setTask({ ...task, completed: e.target.checked })
            }
          >
            Task completed
          </Checkbox>
        </FormControl>
        <Button type="submit" colorScheme="teal" mt={4}>
          Add Task
        </Button>
      </form>
    </Box>
  );
};

export default TaskForm;
