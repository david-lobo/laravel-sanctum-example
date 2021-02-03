import React from 'react';
import Router from '../router/index';
import AuthApp from '../containers/AuthApp';
import AuthContextProvider from '../contexts/AuthContext';
import AppContextProvider from '../contexts/AppContext';
import { AppContext } from "../contexts/AppContext";
import { AuthContext } from "../contexts/AuthContext";

function App() {
    return (
        <AppContextProvider>
            <AuthContextProvider>
                <AuthApp>
                    <Router />
                </AuthApp>
            </AuthContextProvider>
        </AppContextProvider>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}