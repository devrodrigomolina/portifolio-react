
import About from "./components/AboutSection/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import MyServices from "./components/MyServices/MyServices";
import Projects from "./components/Projects/Projects";
import Resume from "./components/ResumeSection/Resume";
import Skills from "./components/Skills/Skills";
import Testimonials from "./components/Testimonials/Testimonials";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
      <>
        <Header />
        <About />
        <MyServices />
        <Skills />
        <Projects />
        <Resume />
        <Testimonials />
        <Contact />
        <GlobalStyles />
      </>

  );
}

export default App;
