import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../../Forms/FormInput";
import FormTextArea from "../../Forms/FormTextArea";
import Icon from "../../Icon";

const ContactHome = () => {

    const handleFolio = (name) =>{
        window.open(name, '_blank');
    }

    return (
        <div className="contacts" id='contacts'>
            <div className="contacts-body grid2">
                <div className="form-contacts">
                    <h2 className="contact-title">Don't be shy, say hi!</h2>
                    <p className="contact-para">Have a question, a project? We'd love to discuss... </p>
                    <form action="" className="form-contact">
                        <div className="form-group-contact">
                            <div>
                                <FormInput 
                                    placeholder='Name'
                                    type="text"
                                    className="trans-input"
                                />
                            </div>
                            <div>
                                <FormInput
                                    tpe='email'
                                    placeholder='Your email'
                                    className="trans-input"
                                />
                            </div>
                        </div>
                        <div className="form-spacing-contact">
                            <FormInput 
                                placeholder='Subject'
                                type='text'
                                className="trans-input"
                            />
                        </div>
                        <div className="form-spacing-contact">
                            <FormTextArea 
                                placeholder='Message'
                                className="trans-input"
                            />
                        </div>
                    </form>
                </div>
                <div className="contacts-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13441.602943296042!2d-7.918262465587424!3d12.603469213586417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe51d3fc2e6c68e9%3A0xf8e44ef8b0645b0!2sSanSOFTIC!5e0!3m2!1sfr!2sml!4v1629765664898!5m2!1sfr!2sml" allowFullScreen="" loading="lazy" style={{border: 0}}></iframe>
                </div>
            </div>
            <div className="contacts-head">
                <div className="contacts-head-item">
                    <div><span className="contacts-link" onClick={()=>handleFolio('tel:0022391923237')} ><Icon name="phone" className="icon" /> <span>+ (223) 91 92 32 37</span></span></div>
                    <div>
                        Call us on above number to get quick solution. Additional charges may apply
                    </div>
                </div>
                <div className="contacts-head-item">
                    <div><span className="contacts-link" onClick={()=>handleFolio('mailto:sibrahima250@gmail.com')}><Icon name="envelop"/> <span>ib@sansoftic.net</span></span></div>
                    <div>
                        For general queries and questions including partnership opportunities
                    </div>
                </div>
                <div className="contacts-head-item">
                    <div><Link to='' ><Icon name="map"/> <span>Yirimadjo kodjalani</span></Link></div>
                    <div>
                    If you have technical questions, chat live with developers in our Skype chat
                    </div>
                </div>
                <div className="contacts-head-item">
                    <div><span className="contacts-link" onClick={()=>handleFolio('https://ibfolio.sansoftic.net')}><Icon name="user-form"/> <span>ibfolio.sansoftic.net</span></span></div>
                    <div>
                        Careers & Press related queries please email us at above address
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ContactHome;