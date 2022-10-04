import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../Icon";

const ServiceHome = () => {

    return (
        <div className="services reveal" id="services">
            <div className="services-head">
                <h2 className="service-title reveal_1   ">Let's redefine our marketing strategy </h2>
                <p className="reveal_2">
                We are a creative digital company focused on innovative solution quality at an affordable cost. 
                Our full-service digital creations specializing in: video production, web design, branding, branding...
                </p>
            </div>
            <div className="service-body grid3 reveal_3">
                
                <div className="service-item ">
                    <div className="service-item-back">
                        <div className="service-item-head">
                            <h2 className="service-title2">Branding</h2>
                        </div>
                        <div className="service-item-body">
                            <ul>
                                <li><Link to="" className="service-link">Brand Identity</Link></li>
                                <li><Link to="" className="service-link">Art Design</Link></li>
                                <li><Link to="" className="service-link">Visual Design</Link></li>
                                <li><Link to="" className="service-link">Illusctration & infographics</Link></li>
                                <li><Link to="" className="service-link">Content/Video</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="service-item ">
                    <div className="service-item-back">
                        <div className="service-item-head">
                            <h2 className="service-title2">Graphic Design</h2>
                        </div>
                        <div className="service-item-body">
                            <ul>
                                <li><Link to="" className="service-link">Creative Concepting</Link></li>
                                <li><Link to="" className="service-link">Apps & Mobile</Link></li>
                                <li><Link to="" className="service-link">User Experience</Link></li>
                                <li><Link to="" className="service-link">Motion Design</Link></li>
                                <li><Link to="" className="service-link">Interface Design</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="service-item">
                    <div className="service-item-back">
                        <div className="service-item-head">
                            <h2 className="service-title2">Development</h2>
                        </div>
                        <div className="service-item-body">
                            <ul>
                                <li><Link to="" className="service-link">Back-end Development Identity</Link></li>
                                <li><Link to="" className="service-link">Front-end Desvelopment</Link></li>
                                <li><Link to="" className="service-link">Web Development</Link></li>
                                <li><Link to="" className="service-link">Apps & Game</Link></li>
                                <li><Link to="" className="service-link">E-services</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="service-foot reveal_4">
                <Link to="" className="service-foot-link">View all services <span className="service-icon"><Icon name="moins"/></span> </Link>
            </div>
            
        </div>
    )
}

export default ServiceHome;