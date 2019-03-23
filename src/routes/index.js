import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ROUTES from './routeConfig';

const rendrSubRoutes = ROUTES.map((route, index) => {
    return <Route key={`route_${index}`}
    path={route.path}
    exact={route.path === '/' || (typeof route.exact === 'undefined' && route.exact)}
    render={props => <route.component {...props} route={route.routes} />}
    />
});

const AppRouting = () => (
    <Switch>
        {rendrSubRoutes}
    </Switch>
);

export default AppRouting;