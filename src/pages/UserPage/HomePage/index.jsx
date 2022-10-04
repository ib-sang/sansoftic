import React from "react";
import AboutHome from "../../../components/Modules/AboutHome";
import BannerHome from "../../../components/Modules/BannerHome";
import ContactHome from "../../../components/Modules/ContactHome";
import MethodHome from "../../../components/Modules/MethodHome";
import ProjectHome from "../../../components/Modules/ProjectHome";
import ServiceHome from "../../../components/Modules/ServiceHome";

const HomePage = () => {


    return (
        <>
            <BannerHome/>
            <ServiceHome/>
            <ProjectHome/>
            <AboutHome />
            <MethodHome/>
            <ContactHome/>
        </>
    )
}

export default HomePage