import * as React from 'react';
import { DefaultTheme, Text, Provider as PaperProvider } from 'react-native-paper';
import App from './App';


const theme = {
  ...DefaultTheme,
  roundness: 2,
  dark: true,
  fonts: {
    ...DefaultTheme.fonts,
      regular: 'sans-serif'




},
  colors: {
    ...DefaultTheme.colors,
    
  
  
  },
 
 
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
      <Text>jofhfiohofihofhohvo</Text>
    </PaperProvider>
  );
}