import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />

      <section id="home" >
        <Hero />
      </section>

      <section id="about" className="h-screen flex items-center justify-center bg-pink-200">
        <About />
      </section>

      <section id="skills" className="h-screen flex items-center justify-center bg-yellow-200">
        <Skills />
      </section>

      <section id="projects" className="h-screen flex items-center justify-center bg-blue-200">
        <Projects />
      </section>

      <section id="contact" className="h-screen flex items-center justify-center bg-green-200">
        <Contact />
      </section>
    </>
  );
}

export default App;
