import Header from "./components/Header/Header.js";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer.js";
import styles from "./App.module.scss";
import Error from "./pages/Error/Error.js";
import Lodge from "./pages/Lodge/Lodge.js";

function App() {
  return (
    <>
      <div className={`${styles.appContainer} flex-col flex-fill`}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="lodging/:id" element={<Lodge />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
