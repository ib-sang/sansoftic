import React from "react";
import img from '../../../assets/images/01.png'
import img1 from '../../../assets/images/02.png'
import img2 from '../../../assets/images/03.png'

const MethodHome = () => {

    return (
        <div className="methods grid3 reveal">
            <div className="method-item reveal_1">
                <div className="method-head"><img src={img} alt="" /></div>
                <div className="method-body">
                    <h1 className="method-title">Analyse & Recherche</h1>
                    <p className="method-para">We are start with research also to image seas void great day sea don't creature.</p>
                </div>
            </div>
            <div className="method-item reveal_2">
                <div className="method-head"><img src={img1} alt="" /></div>
                <div className="method-body">
                    <h1 className="method-title">Development</h1>
                    <p className="method-para">In this step our them subdue you life craeted day given light gethering.</p>
                </div>
            </div>
            <div className="method-item reveal_3">
                <div className="method-head"><img src={img2} alt="" /></div>
                <div className="method-body">
                    <h1 className="method-title">Tests & Verifications</h1>
                    <p className="methodd-para">Final step of success firmament of alsoit great have set behold land third.</p>
                </div>
            </div>
        </div>
    )
}

export default MethodHome