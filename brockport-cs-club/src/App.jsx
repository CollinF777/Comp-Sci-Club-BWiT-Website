import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import CSClubPage from "./pages/CSClubPage";
import BWiTPage from "./pages/BWiTPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="site-container">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/cs-club" element={<CSClubPage />} />
                    <Route path="/bwit" element={<BWiTPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;