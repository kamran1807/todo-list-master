import React from 'react';
import { Box, Button, Input } from '@chakra-ui/react'; 
import { useState } from 'react';

function EditTaskForm({ task, onSave, onCancel }) {
  const [editedTask, setEditedTask] = useState(task);

  // populate the input fields with the current title and description
  const { title, description } = editedTask;

  const handleSave = () => {
    // call an action to save the edited task
    onSave(editedTask);
  };

  return (
    <Box>
      <Input
        value={title}
        onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
      />
      <Input
        value={description}
        onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
      />
      <Button onClick={handleSave}>Save</Button>
      <Button onClick={onCancel}>Cancel</Button>
    </Box>
  );
}

export default EditTaskForm;
