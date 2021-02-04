import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { Button, Card } from 'react-bootstrap';

import { AuthContext } from "../contexts/AuthContext";

import AuthLayout from '../containers/layout/AuthLayout';

function Home(props) {
    const { auth, logoutUser } = useContext(AuthContext);
    let history = useHistory();

    // On Submit Login From
    const submitForm = async (event) => {
        event.preventDefault();

        await logoutUser();

        history.push('/login')
    }

    let userDetails = null;

    if (auth.isLoggedIn) {
        userDetails = (
            <>
            <Card.Title>{ auth.user.name }</Card.Title>
            <Card.Text>{ auth.user.email }</Card.Text>
            <Card.Text>{ auth.user.created_at }</Card.Text>
            <Button onClick={submitForm} size="md">Logout</Button>
            </>
        );
    }

    return (
        <AuthLayout title="Dashboard">
            { userDetails }
        </AuthLayout>
    );
}

export default Home;