import React, { useState } from "react";
import img from '../../../assets/images/1.jpg'
import Icon from "../../Icon";

const AboutHome = () => {

    const [target, setTarget] = useState(1)

    return (
        <div className="abouts grid2 container reveal" id='abouts'>
            <div className="about-head">
                <div className="about-back-one reveal_2"></div>
                <div className="about-img reveal_1">
                    <div className="about-media">
                        <img src={img} alt="" className="reveal_3" />
                    </div>
                </div>
            </div>
            <div className="about-body reveal_4">
                <h2 className="about-title ">Start off on the right</h2>
                <div className="about-nav">
                    <ul className="navbar-about">
                        <li className={target == 1 ? "navbar-about-active navbar-about-list": "navbar-about-list trans-border1"} onClick={()=>setTarget(1)}><Icon name="edit"/> <span>Work progress</span></li>
                        <li className={target == 2 ? "navbar-about-active navbar-about-list": "navbar-about-list trans-border1"} onClick={()=>setTarget(2)}><Icon name="livre"/> <span>Our Vision</span></li>
                        <li className={target == 3 ? "navbar-about-active navbar-about-list": "navbar-about-list trans-border1"} onClick={()=>setTarget(3)}><Icon name="setting"/> <span>Our gaol</span></li>
                    </ul>
                </div>
                <div className="about-target">
                    <div className={target ==1 ? "toggle-about":"about-item"}>
                        <h2 className="about-title2">The process that acquaints ours</h2>
                        <p className="toggle-para">Our friendly team members are always willing to help you understand your present technology requirements
                            and provide suggestions on your futures needs.
                        </p>
                        <ol className="toggle-about-listing">
                            <li>Collect information near you </li>
                            <li>Effective procedures for a positive result</li>
                            <li>Achieve a successful launch</li>
                            <li>A finished product</li>
                        </ol>
                    </div>
                    <div className={target ==2 ? "toggle-about":"about-item"}>
                        <h2 className="about-title2">Our Mission & Vision</h2>
                        <p className="toggle-para">
                        Our primary mission is to educate people about new technologies all over the world. And how these technologies can help us in our lives.
                        </p>
                        <div className="toggle-about-flex">
                            <div>
                                <Icon name="user1"/>
                            </div>
                            <div>
                                <p className="toggle-para">Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovation</p>
                                <p className="toggle-about-user">Ib Sangaré @sansoftic</p>
                            </div>
                        </div>
                    </div>
                    <div className={target ==3 ? "toggle-about":"about-item"}>
                        <p className="toggle-para">We have a strong foundation built on legacy and emerging technologies, including excellent track record of on-time deliveries. We are emerging as one of the most promising private talent sourcing and management firms in the world. The real challenge before companies in today's world is to make their products and services appealing to everyone.
                        </p>
                        <div className="toggle-about-flex">
                            <div>
                                <Icon name="reaction"/>
                            </div>
                            <div>
                                <p className="toggle-para">"Transform your enterprise with resolutions tailored to your requirements & goals."</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default AboutHome