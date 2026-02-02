import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    return (
        <header className="header">
            <div className="header-content">
                <div className="header-logo-section">
                    <img src="/CSClubLogo.jpg" alt="CS Club Logo" className="header-logo" />
                    <div className="header-text">
                        <h1 className="header-title">Brockport Computer Science Club 
                            <br/>                       &
                            <br/>Brockport Women in Tech
                        </h1>
                        <p className="header-subtitle">Uniting Computer Science students through games, events, and workshops</p>
                    </div>
                </div>
                <nav className="navbar">
                    <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}> 
                        Home
                    </Link>
                    <Link to="/cs-club" className={`nav-link ${location.pathname === "/cs-club" ? "active" : ""}`}>
                        Computer Science Club
                    </Link>
                    <Link to="/bwit" className={`nav-link ${location.pathname === "/bwit" ? "active" : ""}`}>
                        Brockport Women in Tech
                    </Link>
                    <Link to="/contact" className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}>
                        Contact Us
                    </Link>
                </nav>
            </div>
        </header>
    );
}
export default Navbar;