import React from "react";

const RegisterLayout =(props)=>{
    return (
            <div className="register-layout">
                <div className="register-children">
                    { props.children }
                </div>
            </div>
    );
}

export default RegisterLayout;