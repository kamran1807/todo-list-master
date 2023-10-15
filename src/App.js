import React from 'react';
import { ChakraProvider, CSSReset, Box, Container, Text } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './store/store'; // Redux store
import TaskList from './components/TaskList'; 
import TaskForm from './components/TaskForm';
import theme from './theme';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Container maxW="container.lg">
          <Box 
            bg="background.dark"
            minH="100vh"
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            p={4}
          >
            <Text fontSize="2xl" color="primary.500" margin={50}>Todo List App</Text>
            <TaskList />
            <TaskForm />
          </Box>
        </Container>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
