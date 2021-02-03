import React, { useContext } from 'react'
import { Redirect } from "react-router-dom";
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
    ]
};

function ForgotPassword() {

    // Inital variables
    const initialValues = {
		email: ''
    }
    
    const initialTouched = {
		email: false,
		password: false,
    }

    // Hooks
    const { auth } = useContext(AuthContext);

    // Custom hook
    const route = User.forgotPassword;
    const handleSuccess = (response) => {
        // No further action needed
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
        <AuthLayout title="Reset Password">
            {status}
            <Form onSubmit={handleSubmit} noValidate>
                <TextInput 
                    placeholder="Enter your email"
                    type="email"
                    label="Email"
                    name="email"
                    value={values.email} 
                    error={errors.email && errors.email.length > 0 ? errors.email[0] : null} handleChange={handleChange} />
                <Row className="form-group">
                    <Col md={{span: 8, offset: 4}}>
                        <SubmitButton buttonText="Send Password Reset Link" loadingText="Loading" isLoading={isSubmitting}/>
                    </Col>
                </Row>
            </Form>
        </AuthLayout>
    );
}

export default ForgotPassword;