import useReveal from "./useReveal";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Background from "./components/Background";
import Strengths from "./components/Strengths";
import Certs from "./components/Certs";
import Footer from "./components/Footer";

export default function App() {
  useReveal();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Background />
        <Strengths />
        <Certs />
      </main>
      <Footer />
    </>
  );
}