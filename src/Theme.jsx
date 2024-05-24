import { extendTheme } from '@chakra-ui/react';

const Theme = extendTheme({
  colors: {
    button: {
      text: {
        light: '#000000',  // Example: Black for light mode
        dark: '#ffffff'   // Example: White for dark mode
      }
    }
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
        color: props.colorMode === 'dark' ? 'white' : 'black',
      },
    }),
  },
});


export default Theme;