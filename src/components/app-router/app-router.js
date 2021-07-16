import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../../routes";
import {ASPIRANT_ROUTE, LOGIN_ROUTE} from "../../utils/consts";
import {AspirantApiContext} from "../context/aspirant-api-context";

// логика навигации по страницам
const AppRouter = () => {
        const {isAuth} = useContext(AspirantApiContext);
        //const isAuth = true;
    //console.log(isAuth);
        return (
            isAuth
                ? (
                    <Switch> {authRoutes.map(({path, render, exact}) =>
                        <Route key={path} path={path} render={render} exact={ exact }/>)};
                        <Redirect to={ASPIRANT_ROUTE}/>
                    </Switch>
                )
                : (

                    <Switch>
                        {publicRoutes.map(({path, render, exact}) =>
                            <Route key={path} path={path} render={render} exact={exact}/>)}
                        <Redirect to={LOGIN_ROUTE}/>
                    </Switch>
                )
        )


    }
;

export default AppRouter;