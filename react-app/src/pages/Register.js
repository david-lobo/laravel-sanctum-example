import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
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
    name: [
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
    ],
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

function Register() {

    // Inital variables
    const initialValues = {
        name: '',
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

    // Hooks
    const history = useHistory();
    const { loginUser } = useContext(AuthContext);
    
    // Custom hook
    const route = User.register;
    const handleSuccess = async (response) => {
        await loginUser(response.data.data.user);
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
    
    return (
        <AuthLayout title="Register">
            {status}
            <Form onSubmit={handleSubmit} noValidate>
                <TextInput 
                    placeholder="Enter your name"
                    type="text"
                    label="Name"
                    name="name"
                    value={values.name} 
                    error={errors.name && errors.name.length > 0 ? errors.name[0] : null} handleChange={handleChange} />
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
                        <SubmitButton buttonText="Register" loadingText="Loading" isLoading={isSubmitting}/>
                    </Col>
                </Row>
            </Form>
        </AuthLayout>
    );
}

export default Register;