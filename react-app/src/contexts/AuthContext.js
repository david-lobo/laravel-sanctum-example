import React, { createContext, useReducer } from 'react';
import { AuthReducer } from '../reducers/AuthReducer';
import User from "../apis/User";
import Csrf from '../apis/Csrf';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [auth, dispatch] = useReducer(AuthReducer,{loggedIn: false});
    
    const logoutUser = async () => {
        await User.logout();

        Csrf.removeCookie();

        dispatch({
            type: 'LOGOUT'
        });
    }

    const loginUser = (user) => {
        dispatch({
            type: 'LOGIN', 
            payload: {
                user,
                isLoggedIn: true
            }
        });
    }

    const contextValue = {
        auth,
        dispatch,
        loginUser,
        logoutUser
    };
    return (
        <AuthContext.Provider value={contextValue}>
            { props.children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;