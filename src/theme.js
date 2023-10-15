import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      500: '#ffffff', 
    },
    background: {
      dark: '#2c3e50', 
    },
  },
  components: {
    Button: {
      baseStyle: {
        _focus: { boxShadow: 'none' }, // remove focus box
      },
    },
    // set the text color to white
    Text: {
      baseStyle: {
        color: 'white',
      },
    },
  },
});

export default theme;
