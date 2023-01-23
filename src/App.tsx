import { useEffect, useState } from "react";
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
import { motion } from "framer-motion";
import Loading from "./components/Loading/Loading";

type githubDataType = {
  public_repos: number;
  length: number;
};

function App() {
  const [githubData, setGithubData] = useState<githubDataType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const githubFetch = async () => {
    const response = await fetch(
      "https://api.github.com/users/devrodrigomolina/repos"
    );
    const responseJson = await response.json();
    setGithubData(responseJson);
    setLoading(false);
  };
  console.log(githubData)
  useEffect(() => {
    githubFetch();
  }, []);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <>
     {/*  <Loading loading={loading} /> */}
      {!loading && (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <Header />
          <About reposQtd={githubData?.length} />
          <MyServices />
          <Skills />
          <Projects />
          <Resume />
          <Contact />
          <Footer />
          <GlobalStyles />
        </motion.div>
      )}
    </>
  );
}

export default App;
