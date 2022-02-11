import './App.css';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import Project from './components/Project/Project';
import ContactMe from './components/ContactMe/ContactMe';
import Formation from './components/Formation/Formation';
import Competance from './components/Competance/Competance';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Project />
      <div className='spikes'></div>
      <Competance />
      <Formation />
      <div className='spikes'></div>
      <ContactMe />
    </>
  );
}

export default App;
