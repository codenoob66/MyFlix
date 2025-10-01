import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import "./App.css"; // 👈 import your CSS file
import AddMoviepage from "./pages/AddMoviepage"
import DeleteMoviePage from "./pages/DeleteMoviePage"
import Admin from "./pages/Admin";


function AppContent() {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === "/Admin";

  return(
    <>
      {!hideNavAndFooter && <Navbar/>}
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/addMovies" element={<AddMoviepage />} />
          <Route path="/DeleteMovies" element={<DeleteMoviePage />} />
        </Routes>
      </main>
      {!hideNavAndFooter && <Footer/>}
    </>
  )


}
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
export default App;
