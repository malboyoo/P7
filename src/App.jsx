import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.scss";
import Error from "./pages/Error/Error";
import Lodge from "./pages/Lodge/Lodge";

function App() {
  return (
    <>
      <div className={`${styles.appContainer} flex-col flex-fill`}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="lodge/:id" element={<Lodge />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
