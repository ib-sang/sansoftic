import React from "react";
import img from '../../../assets/images/32.jpg'
import Icon from '../../Icon';

const BannerHome = () => {

    return (
        <div className="banner reveal">
            <div className="banner-item banner-media">
                <div className="banner-animated reveal_4"></div>
                <div className="banner-img reveal_1"> <img src={img} alt="" /> </div>
                <div className="banner-play reveal_4"><div className="banner-playing"><Icon name='play' /></div></div>
            </div>
            <div className="banner-item banner-definition">
                <h1 className="title banner-title reveal_2">Welcome to the SANSOFTIC website</h1>
                <p className="banner-para reveal_3">
                SANSOFTIC is a digital services company that offers a range of services and solutions to businesses, organizations and individuals according to their needs.
                </p>
            </div>
        </div>
    )
}

export default BannerHome;