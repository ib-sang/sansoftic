import React, {useState}  from "react";
import { Link, useLocation } from "react-router-dom";
import { HOME } from "../../settings/constants";
import img from "../../assets/images/logos.png";
import Icon from "../Icon";

const Header = ()=>{

    const [toggle, setToggle] = useState(false)
    const { pathname, hash, key } = useLocation();

    const handleToggle = ()=>{
        if(toggle){
            setToggle(false)
        }else{
            setToggle(true)
        }
    }

    const handleActive = (subpath) =>{
        const path = hash.replace('#', '');
        const bool = path.indexOf(subpath)
        if (subpath=='/') {
            return subpath== path
        }else{
            if(bool!==-1) return true
            return false
        }
    }

    return(
        <header className="header">
            <div className="header-logo">
                <Link to={HOME}><img src={img} alt="sansoftic" /></Link>
            </div>
            <div className="header-menu">
                <span className="head-target" onClick={handleToggle}><Icon name="menu"/></span>
                
                <div className={toggle ? "is-toggle ": "no-toggle"} >
                    <nav className="navbars" onClick={handleToggle}>
                        <ul className="nav-items">
                            <li className="nav-item"><Link to={HOME} className="nav-link">Accueil</Link></li>
                            <li className="nav-item"><Link to='/#services' className="nav-link">Services</Link></li>
                            <li className="nav-item"><Link to='#contacts' className="nav-link">Contact</Link></li>
                            <li className="nav-item"><Link to='#abouts' className="nav-link">A propos</Link></li>
                            <li className="nav-item"><Link to='#blog' className="nav-link">Blog</Link></li>
                        </ul>
                    </nav>
                    <div>SANSOFTIC est une entreprise digital ...</div>
                </div>
            </div>
            <div className="header-toggle">
                <nav className="navbars">
                    <ul className="nav-items">
                        <li className="nav-item"><Link to={HOME} className={"nav-link trans-border"}>Accueil</Link></li>
                        <li className="nav-item"><Link to='#services' className={handleActive('services') ? "nav-link trans-border-at":"nav-link trans-border"}>Services</Link></li>
                        <li className="nav-item"><Link to='#contacts' className={handleActive('contacts') ? "nav-link trans-border-at":"nav-link trans-border"}>Contact</Link></li>
                        <li className="nav-item"><Link to='/#abouts' className={handleActive('abouts') ? "nav-link trans-border-at":"nav-link trans-border"}>A propos</Link></li>
                        <li className="nav-item"><Link to='' className={handleActive('blogs') ? "nav-link trans-border-at":"nav-link trans-border"}>Blog</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header