import React from 'react';
import { ThemeProvider, createMuiTheme, CssBaseline, Container } from '@material-ui/core';
import './index.css';

import { Router } from 'components';

function App() {
  return (
    <ThemeProvider theme={createMuiTheme()}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Router />
      </Container>
    </ThemeProvider>
  );
}

export default App;
