import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import "./App.css"; // 👈 import your CSS file
import AddMoviepage from "./pages/AddMoviepage"

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/addMovies" element={<AddMoviepage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
