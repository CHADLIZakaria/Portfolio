import './App.css';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import Project from './components/Project/Project';
import ContactMe from './components/ContactMe/ContactMe';
import Formation from './components/Formation/Formation';
import Competance from './components/Competance/Competance';
import Certifications from './components/Certifications/Certifications';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Project />
      <div className='spikes'></div>
      <Competance />
      <Certifications />
      <div className='spikes'></div>
      <Formation />
      <ContactMe />
    </>
  );
}

export default App;
