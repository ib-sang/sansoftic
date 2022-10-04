import React, { useEffect } from "react";
import { Route, useLocation } from "react-router-dom";
import MainLayout from "../../../layouts/MainLayout";
import HomePage from "../../../pages/UserPage/HomePage";
import { HOME } from "../../../settings/constants";


const HomeRoute = () => {

    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        // if not a hash link, scroll to top
        if (hash === '') {
          window.scrollTo(0, 0);
        }
        // else scroll to id
        else {
          setTimeout(() => {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
              element.scrollIntoView({block: "start", inline: "nearest"});
              
            }
          }, 100);
        }
      }, [pathname, hash, key]); 

    return (
        <>
            <Route path={HOME} exact>
              <MainLayout><HomePage/></MainLayout>
            </Route>
        </>
    )
}

export default HomeRoute;