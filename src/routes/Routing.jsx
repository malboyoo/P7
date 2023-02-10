import { Routes, Route } from "react-router-dom";
import Error from "../pages/Error/Error";
import Lodge from "../pages/Lodge/Lodge";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="lodge/:id" element={<Lodge />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Routing;
