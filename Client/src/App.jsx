import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import "./App.css"; // 👈 import your CSS file
import Admin from "./pages/Admin";
import Movies from "./pages/Movies";

function AppContent() {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === "/Admin";

  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Movies" element={<Movies />} />
        </Routes>
      </main>
      {!hideNavAndFooter && <Footer />}
    </>
  );
}
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
export default App;
