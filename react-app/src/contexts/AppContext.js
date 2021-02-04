import React, { createContext, useReducer } from 'react';
import { AppReducer } from '../reducers/AppReducer';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [app, dispatch] = useReducer(AppReducer, {
        pageLoading: true
      });
    
    const contextValue = {
        app,
        dispatch
    };
    return (
        <AppContext.Provider value={contextValue}>
            { props.children }
        </AppContext.Provider>
    )
}

export default AppContextProvider;