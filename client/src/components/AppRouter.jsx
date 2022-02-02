import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import {privateRoutes, publicRoutes} from "../router/routes";

const AppRouter = () => {
    const isAuth = true
    return (
        <Routes>
            {privateRoutes.map(route =>
                <Route
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                />
            )}
            {/*{publicRoutes.map(route =>*/}
            {/*    <Route*/}
            {/*        component={route.component}*/}
            {/*        path={route.path}*/}
            {/*        exact={route.exact}*/}
            {/*    />*/}
            {/*)}*/}
        </Routes>
    );
};

export default AppRouter;