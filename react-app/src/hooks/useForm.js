import { useState, useEffect } from 'react'
import { handleResponse } from '../utils/axios';
import _ from 'lodash';

const useForm = (routeFunction, initialValues, initialTouched, onSuccess, validateForm, rules) => {
    const [values, setValues] = useState(initialValues);
    const [touched, setTouched] = useState(initialTouched);
	const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitClicked, setIsSubmitClicked] = useState(false);
    const [response, setResponse] = useState({});
    const [message, setMessage] = useState({});

    // Hook runs whenever server response variable changes to update form status message.
    useEffect(() => {
        let newMessage = {
        };

        // Display any server response message
        if (_.has(response, 'type')) {
            newMessage = {
                type: response.type,
                text: response.message
            };
            if (response.type === 'error') {
                if (response.status === 422) {
                    if (Object.keys(response.errors).length > 0) {
                        const errorCount = Object.keys(response.errors).length;
                        newMessage = {
                            type: 'error',
                            text: `There are ${errorCount} errors below, please correct them and try again.`
                        };
                    }
                } else {
                    newMessage = {
                        type: 'error',
                        text: `There was an error with that request.  Please contact us for help.`
                    };
                }  
            }
        }
        setMessage(newMessage);
    }, [response]);
    
    useEffect(
        () => {
            if (validateForm) {
                const validationErrors = validateForm(rules, values, touched, isSubmitClicked);
                setErrors(validationErrors);
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [values]
    );

	const handleSubmit = async event => {
		if (event) {
            event.preventDefault();
        }

        setIsSubmitClicked(true);
		// Only validate if the validate function is used
		if (validateForm) {
            const validationErrors = validateForm(rules, values);
            setErrors(validationErrors);
            if (Object.keys(validationErrors).length > 0) {
                return false;
            }
		}
        setIsSubmitting(true);
        const response = await routeFunction(values);
        const handled = handleResponse(response);
        setResponse(handled);
        if (handled.type === 'success') {
            onSuccess(response);
        } else {
            setErrors(handled.errors);
        }
        setIsSubmitting(false);
    }

	const handleChange = event => {
        event.persist();
		setValues(values => ({
			...values,
			[event.target.name]: event.target.value,
        }));
        setTouched(touched => ({
			...touched,
			[event.target.name]: true,
        }));
	}

	return {
		handleChange,
		handleSubmit,
		values,
        errors,
        response,
        isSubmitting,
        message
	}
}

export default useForm