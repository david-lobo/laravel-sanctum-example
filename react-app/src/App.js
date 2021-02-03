import React from 'react';
import Router from './router/index';
import AuthApp from './containers/AuthApp';
import AuthContextProvider from './contexts/AuthContext';
import AppContextProvider from './contexts/AppContext';
import './App.scss';

function App() {
  return (
    <div className="App">
        <AppContextProvider>
            <AuthContextProvider>
                <AuthApp>
                    <Router />
                </AuthApp>
            </AuthContextProvider>
        </AppContextProvider>
    </div>
  );
}

export default App;
