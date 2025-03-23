import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ParticlesComponent from './components/Particles/particles';
import ContactMe from './pages/ContactMe/ContactMe';
import AboutMe from './pages/AboutMe/AboutMe';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';

function App() {
  return (
      <Router basename='/Portfolio' >
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
      </Router>
  );
}

export default App;
