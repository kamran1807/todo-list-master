import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

const Task = ({ task, onEdit, onDelete }) => {
  return (
    <Box>
      <Text>{task.title}</Text>
      <Text>{task.description}</Text>
      <Text>Status: {task.completed ? "Completed" : "Not Completed"}</Text>
      <Button onClick={() => onEdit(task.id)}>Edit</Button>
      <Button onClick={() => onDelete(task.id)}>Delete</Button>
    </Box>
  );
};

export default Task;