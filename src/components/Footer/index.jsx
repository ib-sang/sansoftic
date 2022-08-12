import React from "react";
import { Link } from "react-router-dom";

const Footer = ()=>{
    return(
        <footer className="footer">
            <nav className="footNav">
                <ul className="foot-items">
                    <li className="foot-item">
                        <Link to='' className="foot-link">Home</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;