import React from 'react'
import { useParams } from "react-router";
import { Row, Col, Form } from 'react-bootstrap';

import User from "../apis/User";
import useForm from '../hooks/useForm'
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
        },
        {
            name: 'confirmed'
        }
    ],
    password_confirmation: [
        {
            name: 'required'
        }
    ]
};

function ResetPassword() {
    let { token } = useParams();
    // Inital variables
    const initialValues = {
        token,
		email: '',
        password: '',
        password_confirmation: ''
    }
    
    const initialTouched = {
        name: false,
		email: false,
        password: false,
        password_confirmation: false
    }

    // Custom hook
    const route = User.resetPassword;
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
    
    return (
        <AuthLayout title="Reset Password">
            {status}
            <Form onSubmit={handleSubmit} noValidate>
                <input readOnly type="hidden" value={values.token} />
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
                <TextInput
                    placeholder="Confirm your password"
                    type="password"
                    label="Confirm Password"
                    name="password_confirmation"
                    value={values.password_confirmation}
                    error={errors.password_confirmation && errors.password_confirmation.length > 0 ? errors.password_confirmation[0] : null}
                    handleChange={handleChange}
                />
                <Row className="form-group">
                    <Col md={{span: 8, offset: 4}}>
                        <SubmitButton buttonText="Reset Password" loadingText="Loading" isLoading={isSubmitting}/>
                    </Col>
                </Row>
            </Form>
        </AuthLayout>
    );
}

export default ResetPassword;