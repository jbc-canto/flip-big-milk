import "@fontsource/ibm-plex-mono";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header, Footer } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/diamond-hooves" element={<About />} />
        <Route path="/flip-big-milk" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
