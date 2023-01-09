
import About from "./components/AboutSection/About";
import Header from "./components/Header/Header";
import MyServices from "./components/MyServices/MyServices";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
      <>
        <Header />
        <About />
        <MyServices />
        <Skills />
        <Projects />
        <GlobalStyles />
      </>

  );
}

export default App;
