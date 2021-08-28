import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../../routes";
import {AspirantApiContext} from "../context/aspirant-api-context";

// логика навигации по страницам
const AppRouter = () => {
        const {isAuth} = useContext(AspirantApiContext);
        //const isAuth = true;
        return (
            isAuth
                ? (
                    <Switch> {authRoutes.map(({path, render, exact}) =>
                        <Route key={path} path={path} render={render} exact={ exact }/>)};
                        <Redirect to={authRoutes[0].path}/>
                    </Switch>
                )
                : (

                    <Switch>
                        {publicRoutes.map(({path, render, exact}) =>
                            <Route key={path} path={path} render={render} exact={exact}/>)}
                        <Redirect to={publicRoutes[0].path}/>
                    </Switch>
                )
        )


    }
;

export default AppRouter;