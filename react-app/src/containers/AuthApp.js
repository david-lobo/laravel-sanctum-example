import React, { useContext, useEffect } from 'react';
import { AuthContext } from "../contexts/AuthContext";
import User from "../apis/User";
import { handleResponse } from '../utils/axios';

function AuthApp({children}) {
    const { loginUser } = useContext(AuthContext);
    useEffect(() => {
        async function fetchData() {
            const response = await User.auth();
            const handled = handleResponse(response);
            if (handled.type === 'success') {
                loginUser(response.data);
            }
        }
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])  //Run only on first mounted

    return (
        <>
        {children}
        </>
    );
}

export default AuthApp;