import React, { useContext } from 'react'
import { useHistory, Redirect } from "react-router-dom";
import { Row, Col, Form } from 'react-bootstrap';

import User from "../apis/User";
import useForm from '../hooks/useForm'
import { AuthContext } from '../contexts/AuthContext';
import { validateForm } from '../utils/validation';

import AuthLayout from '../containers/layout/AuthLayout';
import TextInput from '../components/TextInput';
import SubmitButton from '../components/SubmitButton';
import Message from '../components/Message';

const rules = {
    email: [
        {
            name: 'required'
        },
        {
            name: 'email'
        }
    ],
    password: [
        {
            name: 'required'
        },
        {
            name: 'min',
            min: 3
        },
        {
            name: 'max',
            max: 255
        }
    ]
};

function Login() {

    // Inital variables
    const initialValues = {
		email: '',
		password: '',
    }
    
    const initialTouched = {
		email: false,
		password: false,
    }

    // Hooks
    const history = useHistory();
    const { auth, loginUser } = useContext(AuthContext);

    // Custom hook
    const route = User.login;
    const handleSuccess = (response) => {
        loginUser(response.data.data.user);
        history.push('/home');
    }
    
    const {
        values,
        // eslint-disable-next-line
        touched,
        errors,
        // eslint-disable-next-line
        response,
        message,
        isSubmitting,
        handleChange,
        handleSubmit
    } = useForm(
        route,
        initialValues,
        initialTouched,
        handleSuccess,
        validateForm,
        rules
    );

    let status;
    if (message.text) {
        status = <Row>
            <Col md={{span: 6, offset: 4}}>
                <Message text={message.text} type={message.type} />
            </Col>
        </Row>;
    }

    if (auth.isLoggedIn) {
        return <Redirect to="/home" />
    }
    
    return (
        <AuthLayout title="Login">
            {status}
            <Form onSubmit={handleSubmit} noValidate>
                <TextInput 
                    placeholder="Enter your email"
                    type="email"
                    label="Email"
                    name="email"
                    value={values.email} 
                    error={errors.email && errors.email.length > 0 ? errors.email[0] : null} handleChange={handleChange} />
                <TextInput
                    placeholder="Enter your password"
                    type="password"
                    label="Password"
                    name="password"
                    value={values.password}
                    error={errors.password && errors.password.length > 0 ? errors.password[0] : null}
                    handleChange={handleChange}
                />
                <Row className="form-group">
                    <Col md={{span: 8, offset: 4}}>
                        <SubmitButton buttonText="Login" loadingText="Loading" isLoading={isSubmitting}/>
                        <a className="btn btn-link" href="/auth/forgot-password">Forgot your password</a>
                    </Col>
                </Row>
            </Form>
        </AuthLayout>
    );
}

export default Login;