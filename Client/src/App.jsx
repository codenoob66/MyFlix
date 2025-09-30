import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import "./App.css"; // 👈 import your CSS file

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
