import React from 'react';
import ReactDOM from 'react-dom';
import {
  StyledEngineProvider,
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import App from './App';

const theme=createTheme();

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <StyledEngineProvider injectFirst>
    <App />
  </StyledEngineProvider>
  </ThemeProvider>,
  document.getElementById("root")
);


