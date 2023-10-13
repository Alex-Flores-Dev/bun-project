import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider, createTheme, rem } from '@mantine/core';
import FormOne from '../form1/Form1';
import FormTwo from '../form1/Form2';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import FormThree from '../form1/Form3';

const theme = createTheme({
  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  headings: {
    fontFamily: 'Roboto, sans-serif',
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },
});



function App() {
  return (
    <MantineProvider theme={theme}>
      <div>
        <Router>
          <Routes>
            <Route element={<FormOne/>} exact path="/"/>
            <Route element={<FormTwo/>} exact path="/plan-de-pagos"/>
            <Route element={<FormThree/>} exact path="/agendar-reunion"/>
            <Route path="/*" element={<FormOne to="/" />} />
          </Routes>
        </Router>
      </div>
    </MantineProvider>
  );
}

export default App;
