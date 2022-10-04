import React from "react";
import { Route } from "react-router-dom";
import MainLayout from "../../../layouts/MainLayout";


const ServiceRoute = () => {

    return (
        <>
            <Route path={LOGIN} exact>
                <MainLayout><AdminAuthPage/></MainLayout>
            </Route>
        </>
    )
}

export default ServiceRoute;