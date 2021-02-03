import React, { createContext, useReducer } from 'react';
import { AppReducer } from '../reducers/AppReducer';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [app, dispatch] = useReducer(AppReducer, {
        pageLoading: false,
        message: {
            text: 'Some message text',
            type: 'info',
            status: 'display'
        }
      });

    const addFlashMessage = (text, type) => {
        dispatch({
            type: 'SET_MESSAGE',
            payload: {
                text,
                type
            }
        });
    }

    const removeFlashMessage = (text, type) => {
        dispatch({
            type: 'REMOVE_MESSAGE'
        });
    }
    
    const contextValue = {
        app,
        dispatch,
        addFlashMessage,
        removeFlashMessage
    };
    return (
        <AppContext.Provider value={contextValue}>
            { props.children }
        </AppContext.Provider>
    )
}

export default AppContextProvider;