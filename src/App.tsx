import Nav from "./components/Nav";
import SpaceBackground from "./components/SpaceBackground";
import Hero from "./components/Hero";
import CurrentlyBuilding from "./components/CurrentlyBuilding";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-bg text-text font-body">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-bg focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to content
      </a>
      <SpaceBackground />
      <Nav />
      <main>
        <Hero />
        <CurrentlyBuilding />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
