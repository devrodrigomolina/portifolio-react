
import About from "./components/AboutSection/About";
import Header from "./components/Header/Header";
import MyServices from "./components/MyServices/MyServices";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
      <>
        <Header />
        <About />
        <MyServices />
        <GlobalStyles />
      </>

  );
}

export default App;
