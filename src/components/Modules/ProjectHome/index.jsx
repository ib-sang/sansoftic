import React from "react";
import { Link } from "react-router-dom";
import imgHospital from '../../../assets/images/p1.png'
import imgMoney from '../../../assets/images/p2.png'
import imgTelecom from '../../../assets/images/p3.png'
import imgIbfolio from '../../../assets/images/p4.png'

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
                        <img src={imgMoney} alt="" />
                    </div>
                </div>
                <div className="projects-wrap projects-trans">
                    <div className="projects-description">
                        <span className="projects-category">E-service</span>
                        <h2 className="projects-title2">The Health App For CSCOM</h2>
                        <Link to='' className="projects-link">View project</Link>
                    </div>
                    <div className="projects-wrapping-img">
                        <img src={imgHospital} alt="" />
                    </div>
                </div>
                <div className="projects-wrap">
                    <div className="projects-description">
                        <span className="projects-category">Infrastrucure</span>
                        <h2 className="projects-title2">The Project 2020, Installation DBS (Orange, MovAfrica)</h2>
                        <Link to='' className="projects-link">View project</Link>
                    </div>
                    <div className="projects-wrapping-img">
                        <img src={imgTelecom} alt="" />
                    </div>
                </div>
                <div className="projects-wrap projects-trans">
                    <div className="projects-description">
                        <span className="projects-category">E-service</span>
                        <h2 className="projects-title2">My Portolio</h2>
                        <Link to='' className="projects-link">View project</Link>
                    </div>
                    <div className="projects-wrapping-img">
                        <img src={imgIbfolio} alt="" />
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default ProjectHome