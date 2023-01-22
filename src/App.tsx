
import { useEffect } from "react";
import About from "./components/AboutSection/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MyServices from "./components/MyServices/MyServices";
import Projects from "./components/Projects/Projects";
import Resume from "./components/ResumeSection/Resume";
import Skills from "./components/Skills/Skills";
import Testimonials from "./components/Testimonials/Testimonials";
import { GlobalStyles } from "./styles/GlobalStyles";
import { motion } from "framer-motion"

function App() {

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }
 
  return (
      <motion.div  initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}>
        <Header />
        <About />
        <MyServices />
        <Skills />
        <Projects />
        <Resume />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
        <GlobalStyles />
      </motion.div>

  );
}

export default App;
