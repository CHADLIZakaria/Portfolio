import './App.css';
import Navbar from './components/Navbar/Navbar';
import 'font-awesome/css/font-awesome.min.css';
import ParticlesComponent from './components/Particles/particles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactMe from './components/ContactMe/ContactMe';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Project/Project'

function App() {
  return (
      <BrowserRouter>
        <>
          <ParticlesComponent></ParticlesComponent>
          <Navbar></Navbar>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/aboutMe" element={<AboutMe />} />
              <Route path="/projects" element={<Projects />} />  
              <Route path="/contact" element={<ContactMe />} />      
          </Routes>
        </>
      </BrowserRouter>
  );
}

export default App;
