import React from 'react';
import Route from "./Route";
import Redirect from "./Redirect";

export default function Protected({component: Component, ...values}) {
    return <Route {...values} render={props => (
        localStorage.getItem('login') ? <Component {...props}/> : <Redirect from={props.match.path} to="/login"/>
    )}/>
}