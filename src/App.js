import './reset.css';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <div id='home'></div>
      <div className='content-wrap'>
        <About />
        <Skills />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
