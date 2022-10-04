import React from "react";
import { Link } from "react-router-dom";
import img from '../../../assets/images/ib.jpg'

const ProjectHome = () => {

    return (
        <div className="projects">
            <div>
                <div className="projects-sticky">
                    <h1 className="project-title">Our achievements </h1>
                    <p>
                    We have built a strong team capable of providing the best quality of services in website design, 
                    website development, game development...
                    </p>
                </div>
                
            </div>
            <div className="grid2">
                <div className="projects-wrap">
                    <div className="projects-description">
                        <span className="projects-category">E-service</span>
                        <h2 className="projects-title2">The Transfer Gestion Money</h2>
                        <Link to='' className="projects-link">View project</Link>
                    </div>
                    <div className="projects-wrapping-img">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="projects-wrap projects-trans">
                    <div className="projects-description">
                        <span className="projects-category">E-service</span>
                        <h2 className="projects-title2">The Health App For CSCOM</h2>
                        <Link to='' className="projects-link">View project</Link>
                    </div>
                    <div className="projects-wrapping-img">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="projects-wrap">
                    <div className="projects-description">
                        <span className="projects-category">Infrastrucure</span>
                        <h2 className="projects-title2">The Project 2020, Installation DBS (Orange, MovAfrica)</h2>
                        <Link to='' className="projects-link">View project</Link>
                    </div>
                    <div className="projects-wrapping-img">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="projects-wrap projects-trans">
                    <div className="projects-description">
                        <span className="projects-category">Audit & Consult</span>
                        <h2 className="projects-title2">The Assistance Soutenance</h2>
                        <Link to='' className="projects-link">View project</Link>
                    </div>
                    <div className="projects-wrapping-img">
                        <img src={img} alt="" />
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default ProjectHome