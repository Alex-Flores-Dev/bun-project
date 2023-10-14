import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import FormOne from '../form1/Form1';
import FormTwo from '../form1/Form2';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import FormThree from '../form1/Form3';
import FormFour from '../form1/Form4';
import FormFive from '../form1/Form5';




function App() {
  return (
    <MantineProvider >
      <div>
        <Router>
          <Routes>
            <Route element={<FormOne/>} exact path="/"/>
            <Route element={<FormTwo/>} exact path="/plan-de-pagos"/>
            <Route element={<FormThree/>} exact path="/agendar-reunion"/>
            <Route element={<FormFour/>} exact path="/seguimiento"/>
            <Route element={<FormFive/>} exact path="/seguimiento-cliente"/>
            <Route path="/*" element={<FormOne to="/" />} />
          </Routes>
        </Router>
      </div>
    </MantineProvider>
  );
}

export default App;
