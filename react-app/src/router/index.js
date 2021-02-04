import React, { useContext } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Register from '../pages/Register';
import About from '../pages/About';
import Navigation from '../components/Navigation';
import Loader from '../components/Loader';
import { AppContext } from "../contexts/AppContext";
import PrivateRoute from '../containers/PrivateRoute';

function Router(props) {
    const { app } = useContext(AppContext);

    return (
        <>
            {app.pageLoading ? <Loader /> :
            <BrowserRouter>
                <Navigation />
                <main className="py-4 h-50">
                    <Switch>
                        <PrivateRoute path="/home" component={Home} />
                        <Route exact path="/" component={Welcome} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/forgot-password" component={ForgotPassword} />
                        <Route path="/register" component={Register} />
                        <Route path="/about" component={About} />
                        <Route exact path="/reset-password/:token" component={ResetPassword}/>
                    </Switch>
                </main>
            </BrowserRouter>}
        </>
    );
}

export default Router;