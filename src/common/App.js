import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import FormOne from '../form1/Form1';
import FormTwo from '../form1/Form2';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import FormThree from '../form1/Form3';
import FormFour from '../form1/Form4';
import FormFive from '../form1/Form5';
import FormSix from '../form1/Form6';
import NavBar from './NavBar';
import Banner from './Banner';
import Main from '../form1/Main';




function App() {
  return (
    <MantineProvider >
      <div className='principal'>
        <NavBar/>
        <Banner/>
        <Router>
          <Routes>
            <Route element={<Main/>} exact path="/"/>
            <Route element={<FormOne/>} exact path="/solicitud"/>
            <Route element={<FormTwo/>} exact path="/plan-de-pagos"/>
            <Route element={<FormThree/>} exact path="/agendar-reunion"/>
            <Route element={<FormFour/>} exact path="/seguimiento"/>
            <Route element={<FormFive/>} exact path="/seguimiento-cliente"/>
            <Route element={<FormSix/>} exact path="/revisar-solicitudes"/>
            <Route path="/*" element={<FormOne to="/" />} />
          </Routes>
        </Router>
      </div>
    </MantineProvider>
  );
}

export default App;
